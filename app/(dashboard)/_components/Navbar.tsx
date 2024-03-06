import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

import React from "react";
import SearchBar from "./SearchBar";
import InviteButton from "./InviteButton";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center gap-x-4 p-5 ">
        <div className="hidden lg:flex lg:flex-1 ">
          <SearchBar />
        </div>
        <div className="block lg:hidden flex-1">
          <OrganizationSwitcher
            hidePersonal
            appearance={{
              elements: {
                rootBox: {
                  width: "100%",
                },
                organizationSwitcherTrigger: {
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb ",
                  justifyContent: "space-between",
                  backgroundColor: "white",
                  marginRight: "2px",
                },
              },
            }}
          />
        </div>
        <InviteButton />
        <UserButton />
      </div>
    </>
  );
};

export default Navbar;
