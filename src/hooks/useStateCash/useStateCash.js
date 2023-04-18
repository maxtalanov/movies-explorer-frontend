import { useState, useRef } from 'react';

function useStateCash(initialValue) {
  const [state, setState] = useState(initialValue);
  const cashState = useRef(initialValue);

  return [state, setState, cashState.current];
}

export default useStateCash;