import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EmployeeScreen } from "../screens/Main";
import { Edit } from "../screens/Edit";
import { NavigationContainer } from '@react-navigation/native';

const { Screen, Navigator } = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="EmployeeScreen" component={EmployeeScreen} />
        <Screen name="Edit" component={Edit} />
      </Navigator>
    </NavigationContainer>
  );
}