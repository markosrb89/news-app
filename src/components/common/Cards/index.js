import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import './styles.scss';

/**
 * Renders news.
 * @param {Array} cards Represents news
 * @param {Array} title
 */
export const Cards = ({ cards, title }) => (
  <section>
    <h3 className='cards-title'><span>&#8226;</span>{title}</h3>
    <div className='cards-container'>
      {cards.map(card => (
        <div
          key={uuidv4()}
          className='cards-container__card'
        >
          <p className='cards-container__card__title'>{card.title}</p>
          <div className='cards-container__card__img'>
            <img src={card.urlToImage} alt='News Image'/>
          </div>
          <p className='cards-container__card__description'>{card.description}</p>
          <div className='cards-container__card__more-info'>More &gt;</div>
        </div>
      ))}
    </div>
  </section>
);

Cards.propTypes = {
  cards: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};