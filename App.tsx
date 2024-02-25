import { StatusBar } from "expo-status-bar";
import Providers from "./src/configs/provider";

export default function App() {
  return (
    <Providers>
      <StatusBar style="auto" />
    </Providers>
  );
}
