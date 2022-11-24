import { useMutation } from "@tanstack/react-query";

import { registrationApiCall } from "../../api/registration";

const useFormSubmit = () => {
  const { isLoading, mutate: handleSubmitForm } = useMutation(
    registrationApiCall,
    {
      onSuccess: () => {
        alert("Registered successfully.");
      },
      onError: () => {
        alert("Registration error.");
      },
    }
  );

  return { isLoading, handleSubmitForm };
};

export default useFormSubmit;
