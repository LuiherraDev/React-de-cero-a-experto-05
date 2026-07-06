import { RouterProvider } from "react-router"
import { appRouter } from './heroes/pages/router/app.router';


export const HeroesApp = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}
