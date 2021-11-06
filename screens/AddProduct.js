import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Image, Pressable, Text, TextInput, View ,Alert} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import tw from "tailwind-react-native-classnames";
import { Picker } from "@react-native-picker/picker";
const AddProduct = ({navigation,route}) => {
  const { base_uri} = route.params;
  const initalState = {
    title: "",
    price: "",
    description: "",
    category: 4,
  };
  const [state, setState] = useState(initalState);
  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };
  const newProduct = async () => {
    if (state.title == "" || state.price == "" || state.description == "") {
      alert("No se aceptan valores vacios!");
    } else {
      try {
        var formData = new FormData();
        formData.append("title",state.title);
        formData.append("price",state.price);
        formData.append("description",state.description);
        formData.append("category",state.category);
        fetch(base_uri+"add", { method: 'POST', body: formData })
            .then(function (response) {
              return response.text();
            })
              .then(function (body) {
                Alert.alert(
                  "La petecion ha tenido un resultado de:",
                  body,
                  [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ]
                );
              });
              
        handleChangeText("", "title");
        handleChangeText("", "description");
        handleChangeText("", "price");
        navigation.navigate("Home",{
          refreshData:true
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <View style={tw`relative h-full py-20 bg-green-600 overflow-hidden`}>
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
            Crear nuevo producto
          </Text>
          <View style={tw`mt-2`}>
            <View style={tw`mt-2 `}>
              <Text style={tw`text-gray-700 text-gray-200`}>Nombre</Text>
              <TextInput
                style={tw`w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md bg-gray-800 text-gray-300 border-gray-600 border-blue-500 border-blue-500`}
                onChangeText={(value) => handleChangeText(value, "title")}
                value={state.title}
              />
            </View>
            <View style={tw`mt-2`}>
              <Text style={tw`text-gray-700 text-gray-200`}>Precio</Text>
              <TextInput
              keyboardType="decimal-pad"
                style={tw`w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md bg-gray-800 text-gray-300 border-gray-600 border-blue-500 border-blue-500 `}
                onChangeText={(value) => handleChangeText(value, "price")}
                value={state.price}
              />
            </View>
            <View style={tw`mt-2`}>
              <Text style={tw`text-gray-700 text-gray-200`}>Descripcion</Text>
              <TextInput
                style={tw`w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md bg-gray-800 text-gray-300 border-gray-600 border-blue-500 border-blue-500 `}
                onChangeText={(value) => handleChangeText(value, "description")}
                value={state.description}
              />
            </View>
            <View style={tw`mt-2`}>
              <Text style={tw`text-gray-700 text-gray-200`}>Categoria</Text>
              <Picker
                style={tw`w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md bg-gray-800 text-gray-300 border-gray-600 border-blue-500 border-blue-500 `}
                selectedValue={state.category}
                onValueChange={(itemValue, itemIndex) => {
                  handleChangeText(itemValue, "category");
                }}
              >
                <Picker.Item label="Bebidas" value="4" />
                <Picker.Item label="Carnes" value="1" />
                <Picker.Item label="Ensaladas" value="3" />
                <Picker.Item label="Mariscos" value="2" />
              </Picker>
            </View>
            <View style={tw`mt-5`}>
              <Pressable
                style={tw` text-sm px-4 py-2 font-medium tracking-wide text-white capitalize bg-indigo-600 rounded-md bg-green-500 `}
                onPress={() => {
                  newProduct();
                }}
              >
                <Text style={tw`text-center m-0.5`}>
                  <Icon
                    name="plus"
                    style={tw`text-lg font-semibold m-2 text-gray-700 capitalize text-white`}
                  />
                  <Text
                    style={tw`text-lg font-semibold text-gray-700 capitalize text-white `}
                  >
                    Crear Producto
                  </Text>
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddProduct;
