import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { EmployeeScreen } from "./screens/Main";
import { EmployeeContextProvider } from "./components/context/EmployeesContext";

export default function App() {
  return (
    <EmployeeContextProvider>
      <EmployeeScreen />
    </EmployeeContextProvider>
  );
}
