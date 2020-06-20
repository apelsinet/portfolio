/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import "./layout.css";

const Layout = ({ children, style }) => {
  return (
    <>
      <div className="wrapper">
        <div className="grid" style={style}>
          {children}
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
