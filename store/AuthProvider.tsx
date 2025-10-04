"use client";
import {
  createContext,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import React from "react";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { http } from "@/lib/httpClient";

// setup axios client to set auth cookie
http.defaults.withCredentials = true;

const authPages = ["login"];

export type User = {
  _id: string;
  name: string;
  email: string;
};

export type AuthContext = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

const authContext = createContext<AuthContext | null>(null);

export const useAuth = () => {
  const context = React.useContext(authContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

function isAuthPage() {
  const path = window.location.pathname;
  if (path === "/" || path === "") return false;
  return (
    path.includes("/auth/") && authPages.some((page) => path.includes(page))
  );
}

function isProtectedPage() {
  const path = window.location.pathname;
  return path.startsWith("/admin");
}

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const {
    data: check_auth_response,
    error: check_auth_error,
    refetch: check_auth,
    isFetching: checking_auth,
    isFetched: auth_check_done,
  } = useQuery({
    queryKey: ["check-auth"],
    async queryFn() {
      return (await http.post("auth/auth-check")).data;
    },
    enabled: false,
  });

  useLayoutEffect(() => {
    http.defaults.withCredentials = true;
  }, []);

  useEffect(() => {
    if (!user) {
      const userStored = localStorage.getItem("user");
      if (!userStored) {
        if (!isAuthPage() && isProtectedPage()) {
          router.push("/auth/login");
        }
      } else {
        // invoke check auth endpoint
        if (isProtectedPage()) {
          check_auth();
        }
      }
    }
  }, [user, check_auth, router]);

  useEffect(() => {
    if (!checking_auth && auth_check_done) {
      if (check_auth_error && (check_auth_error as AxiosError).status === 401) {
        localStorage.removeItem("user");
        // setUser(null);
        if (!isAuthPage() && isProtectedPage()) {
          router.push("/auth/login");
        }
      } else {
        if (check_auth_response) {
          if (check_auth_response.success) {
            setUser(check_auth_response.user);
            if (isAuthPage()) {
              router.push("/board");
            }
          } else {
            localStorage.removeItem("user");
            setUser(null);
            if (!isAuthPage() && isProtectedPage()) {
              router.push("/auth/login");
            }
          }
        }
      }
    }
  }, [
    auth_check_done,
    check_auth_error,
    check_auth_response,
    checking_auth,
    router,
  ]);

  const { refetch: logout, isFetching: logging_out } = useQuery({
    queryKey: ["logout"],
    async queryFn() {
      const response = (await http.post("auth/logout")).data;
      if (response.success) {
        localStorage.removeItem("user");
        setUser(null);
      }
      return response;
    },
    enabled: false,
  });

  const login = (user: User) => {
    setUser(user);
  };

  const values = { user, login, logout };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthProvider;
