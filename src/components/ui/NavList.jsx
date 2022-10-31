import React, { memo } from "react";

export const NavList = memo(({ nav }) => {
  const navDefault = nav.toString().toLowerCase()
  const navName = {
    'HOME': 'header',
    'OUR TEAM': 'our-team'
  }
  return (
    <li className="nav-item">
      <a
        className="nav-link page-scroll"
        href={`#${navName[nav] || navDefault}`}
      >
        {nav} {nav === "HOME" && <span className="sr-only">(current)</span>}
      </a>
    </li>
  );
});
