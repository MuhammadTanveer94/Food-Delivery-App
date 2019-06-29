import { UserDash } from "./home";
import { UserProfile } from "./profile";
import { DetailScreen } from "./userDetailScreen";
// import UserRequest from "./request/UserRequest";

const routes = [
  {
    path: "/dashboard",
    exact: true,
    component: UserDash,
    name: "UserDashboard"
  },
  {
    path: "/dashboard/profile",
    component: UserProfile,
    name: "UserProfile"
  },
  {
    path: "/dashboard/details",
    component: DetailScreen,
    name: "DetailScreen"
  }
];
