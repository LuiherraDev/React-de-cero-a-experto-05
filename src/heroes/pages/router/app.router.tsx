import { createBrowserRouter } from "react-router";

import { HomePage } from '../home/HomePage';
import { HeroPage } from "../hero/HeroPage";
import { AdminPage } from "@/admin/pages/AdminPage";
import { SearchPage } from "../search/SearchPage";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { AdminLayout } from "@/admin/layouts/AdminLayout";


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

