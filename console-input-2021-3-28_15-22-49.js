// Students are asked to stand in non-decreasing order of heights for an annual photo.

// Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.

// Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats.

/**
 * @param {number[]} heights
 * @return {number}
 */

const anotherHeightChecker = function (heights) {
  let newOrderHeights = [...heights];

  newOrderHeights.sort((a, b) => a - b);

  const numberOfOrderChanges = newOrderHeights.reduce(
    (acc, curr, currentIndex) => {
      if (curr === heights[currentIndex]) {
        return acc;
      }
      const newNumberOfOrdersChanges = acc + 1;
      return newNumberOfOrdersChanges;
    },
    0,
  );

  return numberOfOrderChanges;
};

console.log(anotherHeightChecker());
