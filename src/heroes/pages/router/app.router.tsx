import { lazy } from "react";
import { createBrowserRouter } from "react-router";

import { HomePage } from '../home/HomePage';
import { HeroPage } from "../hero/HeroPage";
import { AdminPage } from "@/admin/pages/AdminPage";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { AdminLayout } from "@/admin/layouts/AdminLayout";

// import { SearchPage } from "../search/SearchPage";
// const SearchPage = lazy(() => import("../search/SearchPage").then(module => ({ default: module.SearchPage }))  //añadimos export default en SearchPage y no hace falta poner .then....
const SearchPage = lazy(() => import("../search/SearchPage"))


export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HeroesLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'heroes/1',
        element: <HeroPage />
      },
      {
        path: 'search',
        element: <SearchPage />
      },
    ]
  },

  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />
      }
    ]
  },
])

