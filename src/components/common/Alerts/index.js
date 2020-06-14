import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useAlert } from 'react-alert';

/**
 * Responsible for displaying alerts.
 */
export const Alerts = () => {
  const alert = useAlert();
  const message = useSelector(state => state.errors.message);
  const status = useSelector(state => state.errors.status);
  React.useEffect(() => {
    if (message || status) {
      alert[status || 'error'](message || 'Some problem occurred...');
    }
  }, [message, status]);
  return(<React.Fragment />);
};

Alerts.propTypes = {
  message: PropTypes.string,
  status: PropTypes.string
};