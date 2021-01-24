/**
 * @param {number[]} arr
 * @return {boolean}
 */

const checkIfExist = function (arr) {
  const setOfArray = new Set(arr);
  let index = -1;
  const isDoubleExist = arr.some((number, currentIndex) => {
    const doubleOfTheNumber = 2 * number;
    if (setOfArray.has(doubleOfTheNumber)) {
      index = arr.indexOf(doubleOfTheNumber);
    }
    return setOfArray.has(doubleOfTheNumber) && index !== currentIndex;
  });
  return isDoubleExist;
};

checkIfExist([22, 1, 2, 11]);
