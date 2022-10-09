// Magical cows problem

interface MagicalCowProblemParams {
  maxNoOfCows: number;
  cowsInEachFarm: number[];
  numberOfDifferentDaysRegulatorVisiting: number;
}

const magicalCowProblem = ({
  maxNoOfCows,
  cowsInEachFarm,
  numberOfDifferentDaysRegulatorVisiting,
}: MagicalCowProblemParams): number[] => {
  let eachDay = 0;

  let updatedFarmsWithCow = [...cowsInEachFarm];

  let numberOfFarmsEachDay = [];

  do {
    if (eachDay !== 0) {
      [...updatedFarmsWithCow].forEach((noOfCows, index) => {
        const numberOfCows = noOfCows * 2;

        if (numberOfCows > maxNoOfCows) {
          const numberOfCowsAfterHalf = numberOfCows / 2;
          updatedFarmsWithCow[index] = numberOfCowsAfterHalf;
          updatedFarmsWithCow.push(numberOfCowsAfterHalf);
        } else {
          updatedFarmsWithCow[index] = numberOfCows;
        }
      });
    }
    numberOfFarmsEachDay.push(updatedFarmsWithCow.length);

    eachDay++;
  } while (eachDay < numberOfDifferentDaysRegulatorVisiting);

  return numberOfFarmsEachDay;
};

const params = {
  maxNoOfCows: 2,
  cowsInEachFarm: [1, 2, 1, 2, 1],
  numberOfDifferentDaysRegulatorVisiting: 3,
};

const newFarmsWithCow = magicalCowProblem(params);

console.log(newFarmsWithCow);
