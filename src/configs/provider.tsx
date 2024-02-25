import React from "react";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import { ThemeProp } from "react-native-paper/lib/typescript/types";
import { SnackbarProvider } from "../context/snackbar.context";
import Navigation from "./navigation/index.config";
import { UserProvider } from "../context/user.context";

export const theme: ThemeProp = {
  ...DefaultTheme,
  roundness: 1,
};

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <PaperProvider theme={theme}>
      <SnackbarProvider>
        <UserProvider>
          <Navigation>{children}</Navigation>
        </UserProvider>
      </SnackbarProvider>
    </PaperProvider>
  );
};

export default Providers;
