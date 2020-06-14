import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './styles.scss';
import { SET_COUNTRY } from '../../redux/actions/types';

/**
 * Function component responsible to
 * render the navigation bar.
 */
export const Header = () => {
  const selectedCountry = useSelector(state => state.news.country.selected);
  const dispatch = useDispatch();
  const isGbActive = selectedCountry === 'gb' ? 'active' : '';
  const isUsActive = selectedCountry === 'us' ? 'active' : '';

  /**
   * Fires an action and updates the state.
   * @param {String} country Represents 'gb' or 'us'
   * @param {String} selectedCountry Represents already selected country
   */
  const handleCountrySelection = (country, selectedCountry) => {
    if (country !== selectedCountry) {
      dispatch({ type: SET_COUNTRY, payload: country });
    }
  };

  return (
    <header className='header'>
      <nav className='header__navigation'>
        <ul className='header__navigation__menu-links'>
          <NavLink exact to='/top-news' activeClassName='active'>Top News</NavLink>
          <NavLink to='/categories' activeClassName='active'>Categories</NavLink>
          <NavLink to='/search' activeClassName='active'>Search</NavLink>
        </ul>
      </nav>
      <ul className='header__country-selection'>
        <li
          className={`header__country-selection__option ${isGbActive}`}
          onClick={() => handleCountrySelection('gb', selectedCountry)}>
          GB
        </li>
        <li
          className={`header__country-selection__option ${isUsActive}`}
          onClick={() => handleCountrySelection('us', selectedCountry)}>
          US
        </li>
      </ul>
    </header>
  );
};