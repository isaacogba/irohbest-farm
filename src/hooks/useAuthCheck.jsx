import React from "react";

const useAuthCheck = () => {
  const validateLogin = () => true;

  return { validateLogin };
};

export default useAuthCheck;
