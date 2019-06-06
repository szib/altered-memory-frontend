import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import tw from 'tailwind.macro';

import Item from './InfoPanelItem';

const InfoPanel = ({ className, context }) => {
  const { score, turn } = context;
  return (
    <div className={className}>
      <Item title="Score" value={score} />
      <Item title="Time" value={10} />
      <Item title="Turn" value={turn} />
    </div>
  );
};

InfoPanel.propTypes = {
  context: PropTypes.shape({
    name: PropTypes.string,
    provisionalScore: PropTypes.number,
    turn: PropTypes.number,
    time: PropTypes.number,
    score: PropTypes.number,
    cards: PropTypes.array,
    timerInterval: PropTypes.number,
    renderInterval: PropTypes.number,
  }).isRequired,
  className: PropTypes.string.isRequired
};

const StyledInfoPanel = styled(InfoPanel)`
  ${tw`bg-gray-900 text-gray-100`}
  ${tw`flex flex-col justify-around`}
`;

export default StyledInfoPanel;
