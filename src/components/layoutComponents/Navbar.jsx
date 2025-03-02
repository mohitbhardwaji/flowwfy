import { useState } from "react";
import { Link } from "react-router-dom";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { LogOut, User, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50 px-6 py-4 flex items-center justify-between">
      {/* Logo / Brand */}
      <Link to="/" className="text-2xl font-semibold text-gray-800">
        MyApp
      </Link>

      {/* Profile Dropdown */}
      <DropdownMenu.Root open={open} onOpenChange={setOpen}>
        <DropdownMenu.Trigger className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-100 transition">
          <User className="w-6 h-6 text-gray-600" />
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            align="end"
            className="bg-white shadow-lg rounded-lg p-2 w-40 border border-gray-200"
          >
            <DropdownMenu.Item
              className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer"
              onClick={() => console.log("Logging out...")}
            >
              <LogOut className="w-5 h-5 text-red-500" />
              Logout
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </nav>
  );
};

export default Navbar;
