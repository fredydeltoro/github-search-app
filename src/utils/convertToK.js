/**
 * Converts a number in miles to its representation in 'k'
 * @param {number} num - The number to convert
 * @returns {string} - The number converted to 'k' or the original number if less than 1000
 */
const convertToK = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed() + "k";
  }
  return num.toString();
};

export default convertToK;
