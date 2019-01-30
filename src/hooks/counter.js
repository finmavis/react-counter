import { useState } from 'react';

const useCounter = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    increment: () => setValue(value + 1),
    decrement: () => setValue(value - 1),
    reset: () => setValue(0),
  };
};

export default useCounter;
