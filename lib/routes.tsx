import { GrDashboard, GrProductHunt } from "react-icons/gr";
import { PiPlusBold } from "react-icons/pi";

export const routes = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: GrDashboard,
  },
  {
    label: "Products",
    icon: GrProductHunt,
    subRoutes: [
      { label: "All Products", href: "/admin/products", icon: GrProductHunt },
      { label: "Add Product", href: "/admin/add-product", icon: PiPlusBold },
    ],
  },
  {
    label: "Categories",
    icon: PiPlusBold,
    subRoutes: [
      {
        label: "All Categories",
        href: "/admin/categories",
        icon: GrProductHunt,
      },
      { label: "Add Category", href: "/admin/add-category", icon: PiPlusBold },
    ],
  },
];
