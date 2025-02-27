import { useState } from "react";

const useForm = (initialState) => {
  const [formState, setFormState] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormState(initialState);
  };

  return [formState, handleInputChange, resetForm, setFormState];
};

export default useForm;

