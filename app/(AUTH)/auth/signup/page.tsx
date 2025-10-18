'use client';
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useMutation} from "@tanstack/react-query";
import {http} from "@/lib/httpClient";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";

const SignupPage = () => {
    const router = useRouter();

    const {status,mutate} = useMutation({
        mutationFn:async (data:any)=>{
            return (await http.post('/auth/signup',data)).data
        },
        onSuccess(response){
            if(response.success){
                toast.success("Signup successful");
                router.push('/auth/login');
            }else{
                toast.error(response.message || "Something went wrong");
            }
        }
    })

    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target as HTMLFormElement));
        if(data['password'] !== data['confirm-password']){
            toast.error("Passwords do not match");
            return;
        }

        data['role'] = 'buyer';
        mutate(data);
    }

    return  <main className="w-full min-h-screen flex flex-col gap-4 justify-center items-center">
      <form onSubmit={handleSubmit} className="flex w-[400px] flex-col gap-3">
        <h1 className="text-3xl font-bold mb-4">Sign up</h1>        <div className="flex gap-2 flex-col w-full">
          <Label htmlFor="email" className="text-lg">
             Name
          </Label>
          <Input
              className="w-full"
              id="name"
              name="name"
              required
          />
      </div>
          <div className="flex gap-2 flex-col w-full">
          <Label htmlFor="email" className="text-lg">
            Email
          </Label>
          <Input
            type="email"
            className="w-full"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="flex gap-2 flex-col w-full">
          <Label htmlFor="password" className="text-lg">
            Password
          </Label>
          <Input
            type="password"
            id="password"
            className="w-full"
            name="password"
            required
          />
        </div>
          <div className="flex gap-2 flex-col w-full">
              <Label htmlFor="password" className="text-lg">
                Confirm Password
              </Label>
              <Input
                  type="password"
                  id="confirm-password"
                  className="w-full"
                  name="confirm-password"
                  required
              />
          </div>
        <Button
          disabled={status === "pending"}
          className="disabled:bg-gray-600 cursor-not-allowed"
          type="submit"
        >
          Signup
        </Button>
      </form>
    </main>;
}

export default SignupPage;