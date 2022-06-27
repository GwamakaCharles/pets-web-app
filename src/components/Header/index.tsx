/* eslint-disable linebreak-style */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC<{ classes: any }> = ({ classes }) => {
  return (
    <div className={classes.header}>
      <Link to="/"><img src="/icons/pet-icon.svg" alt="pet-icon" className={classes.img} /></Link>
    </div>
  );
};

export default Header;
