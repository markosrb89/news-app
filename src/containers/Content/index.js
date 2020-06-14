import React from 'react';
import PropTypes from 'prop-types';

/**
 * Content container.
 * All components should use it as
 * a wrapper.
 * @param {Component} children
 */
export const Content = ({ children }) => {
  return (
    <main className='content' role='main'>
      {children}
    </main>
  );
};

Content.propTypes = {
  children: PropTypes.element.isRequired
};