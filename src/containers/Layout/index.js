import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

/**
 * Main container for the whole app.
 * @param {Component} children
 */
export const Layout = ({ children }) => (
  <div className='layout'>
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};