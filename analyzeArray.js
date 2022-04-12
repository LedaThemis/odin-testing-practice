const analyzeArray = (arr) => {
  return {
    average: arr.reduce((prev, now) => prev + now, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
};

export default analyzeArray;
