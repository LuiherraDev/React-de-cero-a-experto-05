import { createBrowserRouter } from "react-router";
import { HomePage } from '../home/HomePage';
import { HeroPage } from "../hero/HeroPage";
import { AdminPage } from "@/admin/pages/AdminPage";
import { SearchPage } from "../search/SearchPage";


export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/heroes/1',
    element: <HeroPage />
  },
  {
    path: '/search',
    element: <SearchPage />
  },
  {
    path: '/admin',
    element: <AdminPage />
  },
])

