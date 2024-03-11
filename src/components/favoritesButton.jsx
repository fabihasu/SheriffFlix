import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as unfilledHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';
import './favoritesButton.css';

const FavoriteButton = ({ isFavorite, onClick }) => (
<button className="favorite-btn" onClick={onClick}>
    <FontAwesomeIcon icon={isFavorite ? filledHeart : unfilledHeart} />
     <span>Adicionar aos Favoritos</span>
  </button>
);

 export default FavoriteButton;