interface IStage {
  MAXIMUM: number;
  DIVIDER: number;
  POSTFIX: string;
}

interface IStages {
  [key: string]: IStage;
}

const isInteger = (number: number) => number.toString().split('.').length === 1;

const convertToMinifiedNumber = (number: number) => {
  let convertedNumber: string = number.toFixed(1);

  const Stages: IStages = {
    HUNDRED: {
      MAXIMUM: 1000,
      DIVIDER: 1,
      POSTFIX: '',
    },
    THOUSANDS: {
      MAXIMUM: 1000000,
      DIVIDER: 1000,
      POSTFIX: 'K',
    },
    MILLIONS: {
      MAXIMUM: 1000000000,
      DIVIDER: 1000000,
      POSTFIX: 'M',
    },
    BILLIONS: {
      MAXIMUM: 1000000000000,
      DIVIDER: 1000000000,
      POSTFIX: 'B',
    },
  };

  Object.values(Stages).forEach((currentStage): string => {
    const dividedNumber = number / currentStage.DIVIDER;

    if (number < currentStage.MAXIMUM) {
      convertedNumber = `${isInteger(dividedNumber) ? dividedNumber : dividedNumber.toFixed(1)} ${
        currentStage.POSTFIX
      }`;
      return convertedNumber;
    }

    return String(number);
  });

  return convertedNumber;
};

export default convertToMinifiedNumber;
