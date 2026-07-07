
import { Link } from "react-router"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu"


export const CustomMenu = () => {

  // no hace falta, actualizado shadcn
  // const { pathname } = useLocation()
  // const isActive = (path: string) => {
  //   return pathname === path
  // }

  return (
    <NavigationMenu>
      <NavigationMenuList>

        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuLink
            // className={cn(isActive('/') && "bg-slate-200 rounded-md", " p-2")}    // no hace falta, actualizado shadcn
            className='bg-slate-200 rounded-md p-2'
            render={<Link to="/">Home</Link>} />
        </NavigationMenuItem >

        {/* Search */}
        <NavigationMenuItem>
          <NavigationMenuLink
            // className={cn(isActive('/search') && "bg-slate-200 rounded-md", " p-2")} // no hace falta, actualizado shadcn
            className='bg-slate-200 rounded-md p-2'
            render={<Link to="/search">Search</Link>} />
        </NavigationMenuItem >

      </NavigationMenuList>
    </NavigationMenu>
  )
}
