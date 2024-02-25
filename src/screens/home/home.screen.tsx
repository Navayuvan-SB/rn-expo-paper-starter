import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../configs/navigation/routes.config";
import { Text } from "react-native-paper";
import Scaffold from "../../configs/ui/scaffold.config";

type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  return (
    <Scaffold>
      <Text>A</Text>
    </Scaffold>
  );
};

export default HomeScreen;
