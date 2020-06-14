import {
  GET_COUNTRY_TOP_NEWS,
  GET_COUNTRY_TOP_NEWS_BY_CATEGORIES,
  GET_CATEGORY_TOP_NEWS,
  SET_COUNTRY,
  DISABLE_COUNTRY_SELECTION
} from '../actions/types';

const initialState = {
  country: {
    selected: 'gb',
    options: [
      { name: 'Great Britain', value: 'gb' },
      { name: 'United States', value: 'us' }
    ],
    disabled: false
  },
  countryTopNews: [],
  countryTopNewsByCategory: [],
  categoryTopNews: []
};

export default function (state = initialState, action) {
  switch (action.type) {
  case GET_COUNTRY_TOP_NEWS:
    return {
      ...state,
      countryTopNews: action.payload,
    };
  case GET_COUNTRY_TOP_NEWS_BY_CATEGORIES:
    return {
      ...state,
      countryTopNewsByCategory: [
        ...state.countryTopNewsByCategory,
        { ...action.payload }
      ],
    };
  case GET_CATEGORY_TOP_NEWS:
    return {
      ...state,
      categoryTopNews: action.payload,
    };
  case SET_COUNTRY:
    return {
      ...state,
      country: {
        ...state.country,
        selected: action.payload
      },
    };
  case DISABLE_COUNTRY_SELECTION:
    return {
      ...state,
      country: {
        ...state.country,
        disabled: action.payload
      },
    };
  default:
    return state;
  }
}