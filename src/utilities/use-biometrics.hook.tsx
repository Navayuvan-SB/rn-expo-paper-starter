import React from "react";
import * as LocalAuthentication from "expo-local-authentication";

const useBiometric = () => {
  const isFingerprintAuthenticated = async () => {
    const { success } = await LocalAuthentication.authenticateAsync({
      promptMessage: "Unlock with your fingerprint",
    });

    return success;
  };

  return { isFingerprintAuthenticated };
};

export default useBiometric;
