import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { GET_ERRORS } from '../redux/actions/types';


/**
 * Every action with the corresponding
 * API url should be defined here.
 */
const actionTypes = {
  GET_COUNTRY_TOP_NEWS: {
    getApiUrl: country => `${getBaseApiUrl()}?country=${country.toLowerCase()}`,
  },
  GET_COUNTRY_TOP_NEWS_BY_CATEGORIES: {
    getApiUrl: (country, category) => `${getBaseApiUrl()}?country=${country.toLowerCase()}&category=${category}`,
  }
};

// eslint-disable-next-line no-undef
export const getApiKey = () => process.env.API_KEY;

// eslint-disable-next-line no-undef
export const getBaseApiUrl = () => process.env.BASE_API_URL;

/**
 * Custom hook responsible for fetching
 * the data.
 * Successfully fetched data will be handled by news
 * reducer and if there are some issues/errors then message
 * and status code will be saved in errors reducer.
 * @param {String} type Represents an action
 * @param {String} category Represents category
 */
export const useAPI = (type, category) => {
  const country = useSelector(state => state.news.country.selected);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getData();
  }, [country]);

  async function getData() {
    try {
      const response = await axios.get(
        actionTypes[type].getApiUrl(country, category),
        {
          headers: {
            'Authorization': getApiKey()
          }
        }
      );

      return dispatch({
        type,
        payload: response.data.articles
      });
    } catch (error) {
      const errors = {
        message: error.message,
        status: error.status
      };
      return dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    }
  }
};