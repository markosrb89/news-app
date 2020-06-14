import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Collapsible from 'react-collapsible';

import { Content } from '../../containers/Content';
import { useAPI } from '../../hooks/api';
import { GET_COUNTRY_TOP_NEWS_BY_CATEGORIES } from '../../redux/actions/types';

/*
 * Component responsible to render categories
 * with expand/collapse behaviour.
 */
export const Categories = () => {
  useAPI(GET_COUNTRY_TOP_NEWS_BY_CATEGORIES);
  const countryTopNewsByCategory = useSelector(state => state.news.countryTopNewsByCategory);
  const countryOptions = useSelector(state => state.news.country.options);
  const selectedCountry = useSelector(state => state.news.country.selected);
  const country = countryOptions.find(option => selectedCountry === option.value);
  const title = `Top 5 news by categories from ${country.name}`;
  return (
    <Content>
      <React.Fragment>
        {title}
        <Collapsible trigger="Start here">
          <p>This is the collapsible content. It can be any element or React component you like.</p>
          <p>It can even be another Collapsible component.</p>
        </Collapsible>
        {countryTopNewsByCategory.map(news => <div key={uuidv4()}>{news.title}</div>)}
      </React.Fragment>
    </Content>
  );
};