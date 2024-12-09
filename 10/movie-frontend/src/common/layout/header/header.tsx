import DropdownMenu from "@/common/layout/header/component/dropdown_menu";
import HeaderButton from "@/common/layout/header/component/header_button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  return (
    <NavigationMenu className="max-h-[4rem] w-screen bg-gray-900">
      <NavigationMenuList className="w-screen justify-start space-x-0">
        <NavigationMenuItem>
          <HeaderButton onClick={() => navigate(`/`)}>Rail</HeaderButton>
        </NavigationMenuItem>
        <NavigationMenuItem className="relative">
          <NavigationMenuTrigger className="h-[4rem] rounded-none bg-gray-900 text-white hover:bg-gray-700">
            MOVIE
          </NavigationMenuTrigger>
          <NavigationMenuContent className="relative">
            <DropdownMenu />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <HeaderButton>Search</HeaderButton>
        </NavigationMenuItem>
        <NavigationMenuItem className="w-full flex flex-row justify-end">
          <HeaderButton onClick={() => navigate(`/sign-in`)}>
            Sign in
          </HeaderButton>
          <HeaderButton onClick={() => navigate(`/sign-up`)}>
            Sign up
          </HeaderButton>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
