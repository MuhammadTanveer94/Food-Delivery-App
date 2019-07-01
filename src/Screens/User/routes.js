import { UserDash } from "./home";
import { UserProfile } from "./profile";
import { DetailScreen } from "./userDetailScreen";
// import UserRequest from "./request/UserRequest";

export const routes = [
  {
    path: "/dashboard",
    exact: true,
    component: UserDash,
    name: "Home"
  },
  {
    path: "/dashboard/profile",
    component: UserProfile,
    name: "Profile"
  },
  {
    path: "/dashboard/details",
    component: DetailScreen,
    name: "DetailScreen"
  }
];

export const pages = [
  { path: "/dashboard", name: "Home" },
  { path: "/dashboard/profile", name: "Profile" },
  { path: "Location", name: "Location" }
];
