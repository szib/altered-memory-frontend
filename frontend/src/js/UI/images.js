import backImage from '../../images/back.jpg';

const importAll = (r) => {
  const images = {};
  r.keys().forEach((item, idx) => { images[idx] = r(item); });
  return images;
};

export const cardImages = importAll(require.context('../../images/cards', false, /\.(png|jpe?g|svg)$/));

export { backImage };
