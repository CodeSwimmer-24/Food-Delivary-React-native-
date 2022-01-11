import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { OrderDelivery, Restaurant } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={"Home"}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
export default App;
