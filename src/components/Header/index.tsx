import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC<{ classes: any }> = ({ classes }) => {
  return (
    <div className={classes.header}>
      <Link to="/"><img src="/icons/pet-icon.svg" alt="pet-icon" className={classes.img} /></Link>
    </div>
  );
};

export default Header;
