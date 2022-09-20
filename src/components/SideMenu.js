import React from "react";
import Logo from "./Logo"
import MenuLinks from "./MenuLinks";
import Search from "./Search";
function SideMenu() {
  return (
    <aside className="side-bar open">
      <Logo></Logo>
      <MenuLinks></MenuLinks>
      <Search></Search>
    </aside>
  );
}

export default SideMenu;
