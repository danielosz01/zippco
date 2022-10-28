import React, { memo } from "react";

export const NavList = memo(({ nav }) => {
  console.log(nav);
  return (
    <li className="nav-item">
      <a
        className="nav-link page-scroll"
        href={`#${nav.toString().toLowerCase() === "home" ?  'header' : nav.toString().toLowerCase()}`}
      >
        {nav} {nav === "HOME" && <span className="sr-only">(current)</span>}
      </a>
    </li>
  );
});
