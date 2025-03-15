import React from "react";

import "./index.scss";

interface LinkProps {
  text: string;
  href: string;
  backgroundColor: string;
}

const Link: React.FC<LinkProps> = ({ text, backgroundColor, href }) => {
  return (
    <a
      href={href}
      className="link"
      style={{ backgroundColor: backgroundColor }}
    >
      {text}
    </a>
  );
};

export default Link;
