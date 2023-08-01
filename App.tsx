import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { Text, TouchableOpacity, View } from "react-native";

const SView = styled(View, "flex-1 items-center justify-center");
const SButton = styled(
  TouchableOpacity,
  "bg-blue-500 w-1/3 h-12 items-center justify-center rounded-md "
);
const STextBlack = styled(Text, "text-white");

export default function App() {
  return (
    <SView>
      <SButton>
        <STextBlack>Press me</STextBlack>
      </SButton>
      <StatusBar style="auto" />
    </SView>
  );
}
