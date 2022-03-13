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
}: MagicalCowProblemParams) => {
  let eachDay = 0;

  let updatedFarmsWithCow = [...cowsInEachFarm];

  do {
    if (eachDay !== 0) {
      let farmsWithDoubledCow = cowsInEachFarm.map((noOfCows) => {
        const numberOfCows = noOfCows * 2;

        if (numberOfCows > maxNoOfCows) {
        }
      });
    }
    eachDay++;
  } while (eachDay < numberOfDifferentDaysRegulatorVisiting);

  return updatedFarmsWithCow;
};

const params = {
  maxNoOfCows: 2,
  cowsInEachFarm: [1, 2, 1, 2, 2],
  numberOfDifferentDaysRegulatorVisiting: 0,
};

const newFarmsWithCow = magicalCowProblem(params);

console.log(newFarmsWithCow);
