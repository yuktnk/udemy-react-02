import { Page02 } from "../Page02";
import { UrlParameter } from "../UrlParameter";

export const Page02Routes = [
  {
    path: "/",
    exact: true,
    children: <Page02 />
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
