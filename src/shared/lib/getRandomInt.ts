export const getRandomInt = (max: number, min: number) => {
  return Math.round(Math.random() * (max - min) + min);
};
