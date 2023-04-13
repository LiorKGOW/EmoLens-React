import React from "react";
import { Nav, NavItem, NavList, PageHeader } from "@patternfly/react-core";

const NavBar = () => {
  const [activeItem, setActiveItem] = React.useState(0);

  const onSelect = (result) => {
    setActiveItem(result.itemId);
  };

  const menu = ["Gallery", "Profile", "Login"];
  const links = ["/", "/profile", "/login"];

  const menuLinks = new Map();

  for (let i = 0; i < menu.length; i++) {
    menuLinks.set(menu[i], links[i]);
  }

  let index = 0;

  const nav = (
    <Nav
      onSelect={onSelect}
      variant="horizontal"
      aria-label="Horizontal global nav"
      role="navigation"
    >
      <NavList>
        { menuLinks.forEach((menuItem, link) => {
          const num = index + 1;
          index++;
          return (
            <NavItem
              preventDefault
              key={num}
              itemId={num}
              isActive={activeItem === num}
              id={`horizontal-pageHeader-${num}`}
              to={`${link}`}
            >
              {menuItem}
            </NavItem>
          );
        })}
      </NavList>
    </Nav>
  );

  console.log(nav.children);

  return <PageHeader topNav={nav} />;
};

export default NavBar;
