import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import Login from './screens/Login';
import Home from './screens/Home';
import Carnes from "./screens/Carnes";
import Bebidas from "./screens/Bebida";
import Mariscos from "./screens/Mariscos";
import Ensalada from "./screens/Ensalada";
import AddProduct from "./screens/AddProduct";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffc14d",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Agregar"
        component={AddProduct}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Carnes"
        component={Carnes}
      />
      <Stack.Screen
        name="Mariscos"
        component={Mariscos}
      />
      <Stack.Screen
        name="Bebidas"
        component={Bebidas}
      />
      <Stack.Screen
        name="Ensaladas"
        component={Ensalada}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
