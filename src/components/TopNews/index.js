import React from 'react';
import { useSelector } from 'react-redux';

import { Content } from '../../containers/Content';
import { Cards } from '../common';
import { useAPI } from '../../hooks/api';
import { GET_COUNTRY_TOP_NEWS } from '../../redux/actions/types';

export const TopNews = () => {
  useAPI(GET_COUNTRY_TOP_NEWS);
  const countryTopNews = useSelector(state => state.news.countryTopNews);
  const countryOptions = useSelector(state => state.news.country.options);
  const selectedCountry = useSelector(state => state.news.country.selected);
  const country = countryOptions.find(option => selectedCountry === option.value);
  const title = `Top news from ${country.name}`;
  return (
    <Content>
      <Cards
        cards={countryTopNews}
        title={title}
      />
    </Content>
  );
};