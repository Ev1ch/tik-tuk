interface IStage {
  MAXIMUM: number;
  DIVIDER: number;
  POSTFIX: string;
}

interface IStages {
  [key: string]: IStage;
}

const convertToMinifiedNumber = (number: number) => {
  let convertedNumber: string = number.toFixed(1);

  const Stages: IStages = {
    THOUSANDS: {
      MAXIMUM: 1000000,
      DIVIDER: 1000,
      POSTFIX: 'T',
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

  for (const stage in Stages) {
    const currentStage = Stages[stage];

    if (number < currentStage.MAXIMUM) {
      convertedNumber = `${(number / currentStage.DIVIDER).toFixed(1)} ${currentStage.POSTFIX}`;
      return convertedNumber;
    }
  }

  return convertedNumber;
};

export default convertToMinifiedNumber;
