/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'tailwind.macro';

class Card extends PureComponent {
  render() {
    console.log('Card this.props', this.props);
    const { className, card, clickOnCardHandler } = this.props;
    return (
      <div className={className} onClick={() => clickOnCardHandler(card.id)} />
    );
  }
}

// const Card = ({ className, card, clickOnCardHandler }) => 
//   <div className={className} onClick={() => clickOnCardHandler(card.id)} />;
  
Card.propTypes = {
  className: PropTypes.string.isRequired,
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    kind: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
    faceUp: PropTypes.bool.isRequired,
    found: PropTypes.bool.isRequired,
  }).isRequired,
  clickOnCardHandler: PropTypes.func.isRequired
};

const StyledCard = styled(Card)`
  box-sizing: border-box;

  width: 20vmin;
  height: 20vmin;
  
  background-repeat: no-repeat;
  background-size: contain;
  background-blend-mode: normal;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.4);

  color: ${props => props.color};

  ${props => (props.card.faceUp ? tw`bg-orange-400` : tw`bg-blue-400`)}
  ${props => (props.card.faceUp ? tw`bg-orange-400` : tw`bg-blue-400`)}
  
  background-image: url(${props => (props.card.faceUp ? props.card.frontImage : props.card.backImage)});

  ${tw`opacity-75 hover:opacity-100`}

  ${tw`rounded-lg cursor-pointer`}
`;

export default StyledCard;
