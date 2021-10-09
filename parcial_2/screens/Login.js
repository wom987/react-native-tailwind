import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  Text,
  TextInput,
  View,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import tw from "tailwind-react-native-classnames";
import firebase from "../DB/firebase";

const Login = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const opacity = useState(new Animated.Value(0))[0];

  function fadeInModal() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }

  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, username, password } = doc.data();
        users.push({
          id: doc.id,
          name,
          username,
          password,
        });
      });
      setUsers(users);
    });
  }, []);
  const validarDatos = () => {
    if (users[0].username === username && users[0].password === password) {
      navigation.navigate("Home");
    } else {
      fadeInModal();
    }
  };
  return (
    <View style={tw`relative h-full py-20 bg-gray-600 overflow-hidden`}>
      <View
        style={tw`max-w-7xl w-4/5 mx-auto bg-white rounded-md shadow-md bg-gray-800`}
      >
        <Image
          style={tw`w-full h-40 rounded-md`}
          source={require("../src/login.jpg")}
        />
        <View
          style={tw`w-full mx-auto p-6 bg-white bg-opacity-90 rounded-md bg-gray-800`}
        >
          <Text
            style={tw`text-3xl font-bold text-gray-700 capitalize text-white`}
          >
            Bienvenido
          </Text>
          <Text
            style={tw`text-lg font-semibold text-gray-700 capitalize text-white mt-2`}
          >
            Restaurante Villa Maria
          </Text>
          <Text
            style={tw`text-base font-semibold text-gray-700 capitalize text-white mt-2`}
          >
            Iniciar session
          </Text>
          <View style={tw`mt-2`}>
            <View style={tw`mt-2 `}>
              <Text style={tw`text-gray-700 text-gray-200`}>Usuario</Text>
              <TextInput
                style={tw`w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md bg-gray-800 text-gray-300 border-gray-600 border-blue-500 border-blue-500`}
                onChangeText={(value) => {
                  setUsername(value);
                }}
              />
            </View>
            <View style={tw`mt-2`}>
              <Text style={tw`text-gray-700 text-gray-200`}>Contraseña</Text>
              <TextInput
                 secureTextEntry={true}
                style={tw`w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md bg-gray-800 text-gray-300 border-gray-600 border-blue-500 border-blue-500 `}
                onChangeText={(value) => {
                  setPassword(value);
                }}
              />
            </View>
            <View style={tw`mt-5`}>
              <Pressable
                style={tw` text-sm px-4 py-2 font-medium tracking-wide text-white capitalize bg-indigo-600 rounded-md bg-green-500 `}
                onPress={() => {
                  validarDatos();
                }}
              >
                <Text style={tw`text-center m-0.5`}>
                  <Icon
                    name="user"
                    style={tw`text-lg font-semibold m-2 text-gray-700 capitalize text-white`}
                  />
                  <Text
                    style={tw`text-lg font-semibold text-gray-700 capitalize text-white `}
                  >
                    Iniciar Session
                  </Text>
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <Animated.View style={[{ opacity }]}>
        <View
          style={tw`relative w-full text-white bg-red-500 mt-6 max-w-7xl w-3/5 mx-auto rounded-md shadow-md p-2`}
        >
          <Text style={tw`text-center`}>
            <Icon
              name="ban"
              style={tw` text-3xl font-semibold text-gray-700 capitalize text-white`}
            />
          </Text>
          <Text style={tw`text-center`}>
            <Text
              style={tw` text-lg font-semibold text-gray-700 capitalize text-white`}
            >
              Usuario/Contraseña invalidos
            </Text>
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default Login;
