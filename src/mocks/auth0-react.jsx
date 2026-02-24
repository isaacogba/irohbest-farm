import React from "react";

export const Auth0Provider = ({ children }) => {
  return <>{children}</>;
};

export const useAuth0 = () => {
  return {
    user: undefined,
    isAuthenticated: false,
    loginWithRedirect: async () => {},
    logout: () => {},
    getAccessTokenWithPopup: async () => "",
  };
};

export default useAuth0;
