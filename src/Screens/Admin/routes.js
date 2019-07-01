import AddCategory from "./Category/AddCategory";
import { AdminDash } from "./Home";
import AddItem from "./Items/AddItem";
import AdminProfile from "./Profile/AdminProfile";

export const routes = [
  {
    path: "/dashboard",
    exact: true,
    component: AdminDash,
    name: "AdminDashboard"
  },
  {
    path: "/dashboard/category",
    component: AddCategory,
    name: "Category"
  },
  {
    path: "/dashboard/profile",
    component: AdminProfile,
    name: "Profile"
  },
  {
    path: "/dashboard/items",
    component: AddItem,
    name: "Items"
  }
];

export const pages = [
  { path: "/dashboard", name: "Home" },
  { path: "/dashboard/profile", name: "Profile" },
  { path: "Location", name: "Location" },
  { path: "/dashboard/category", name: "Add Category" },
  { path: "/dashboard/items", name: "Add Item" }
];
