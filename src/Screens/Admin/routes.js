import AddCategory from "./Category/AddCategory";
import { AdminDash } from "./Home";
import AddItem from "./Items/AddItem";
import AdminProfile from "./Profile/AdminProfile";

const routes = [
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
