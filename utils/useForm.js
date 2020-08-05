import { useState } from "react";

const UseForm = () => {
  const [state, setState] = useState({});

  const handleChange = (e) => {
    e.persist();
    console.log(state);
    setState((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return [state, setState, handleChange];
};

export default UseForm;
