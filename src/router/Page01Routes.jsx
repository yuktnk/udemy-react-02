import { Page01 } from "../Page01";
import { Page01DetailA } from "../Page01DetailA";
import { Page01DetailB } from "../Page01DetailB";

export const Page01Routes = [
  {
    path: "/",
    exact: true,
    children: <Page01 />
  },
  {
    path: "/detailA",
    exact: false,
    children: <Page01DetailA />
  },
  {
    path: "/detailB",
    exact: false,
    children: <Page01DetailB />
  }
];
