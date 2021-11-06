import React, { useState, useEffect } from "react";
import {
  Button,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import Icon from "react-native-vector-icons/FontAwesome";

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [platillos, setPlatillos] = useState([]);

  const getCategories = async () => {
    try {
      const data = [];

      fetch("http://localhost/api/cat")
        .then(res => res.json())
        .then(
          (result) => {
            result.forEach((category) => {
              let nameCategory = (category.categoria).toLowerCase();
              let newNameCategory = nameCategory.charAt(0).toUpperCase() + nameCategory.slice(1)
              data.push({
                name: newNameCategory,
                image: newNameCategory,
              })
            })

            setData(data);
          }
        )

    } catch (error) {
      console.error(error);
    }
  }

  const getPlatillos = async () => {
    try {
      const foodData = [];
      fetch("http://localhost/api/")
        .then(res => res.json())
        .then(
          (result) => {
            result.forEach((food) => {
              foodData.push({
                title: food.nombre,
                description: food.descripcion,
                price: food.precio,
                category: food.categoriaId
              })
            })

            setPlatillos(foodData);
          }
        )
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {

    getCategories();

    getPlatillos();

  }, []);

  return (
    <View style={tw`relative h-full py-10 bg-yellow-200`}>
      <Image style={tw`w-full  h-40`} source={require("../src/banner.png")} />
      <View style={tw`text-center mt-2`}>
        <Text
          style={tw`text-3xl font-bold text-gray-800 uppercase text-black text-center`}
        >
          Platillos y bebidas
        </Text>
        <Text
          style={tw` mx-auto   text-gray-700 capitalize text-gray-700`}
        >
          Selecciona una categoria para consultar
        </Text>
      </View>
      <View style={styles.container}>
        <FlatList
          style={tw`h-full`}
          keyExtractor={(item, id) => id.toString()}
          data={data}
          numColumns={2}
          renderItem={({ item }) => (
            <Pressable
              style={tw`max-w-xs w-5/12 overflow-hidden bg-white rounded-lg shadow-lg bg-yellow-500 mx-auto mt-3`}
              onPress={() => {
                navigation.navigate(item.name, {
                  platillos: platillos,
                  category: item.name,
                });
              }}
            >
              <View style={tw`px-4 py-2`}>
                <View>
                  <Text
                    style={tw`text-xl font-bold text-gray-800 uppercase text-white`}
                  >
                    {item.name}
                  </Text>
                </View>
              </View>
              <Image
                style={{ width: "100%", height: 150 }}
                source={
                  item.name == "Carnes"
                    ? require("../src/carne.jpg")
                    : item.name == "Bebidas"
                      ? require("../src/bebida.jpg")
                      : item.name == "Ensaladas"
                        ? require("../src/ensalada.jpg")
                        : require("../src/mariscos.jpg")
                }
              />
              <View
                style={tw`flex items-center justify-between px-4 py-2 bg-yellow-400`}
              >
                <Text style={tw`text-lg font-bold text-white`}>
                  <Icon
                    name="star"
                    style={tw`text-lg font-semibold m-2 text-gray-700 capitalize text-white`}
                  />
                  <Icon
                    name="star"
                    style={tw`text-lg font-semibold m-2 text-gray-700 capitalize text-white`}
                  />
                  <Icon
                    name="star"
                    style={tw`text-lg font-semibold m-2 text-gray-700 capitalize text-white`}
                  />
                  <Icon
                    name="star"
                    style={tw`text-lg font-semibold m-2 text-gray-700 capitalize text-white`}
                  />
                  <Icon
                    name="star"
                    style={tw`text-lg font-semibold m-2 text-gray-700 capitalize text-white`}
                  />
                </Text>
              </View>
            </Pressable>
          )}
        />

      </View>
      <View style={{ marginTop: 25 }}>
        <Pressable
          style={tw` text-sm w-1/2  mx-auto px-4 py-2 font-medium tracking-wide text-white capitalize bg-indigo-600 rounded-md bg-green-500 `}
          onPress={() => {
            navigation.navigate("Agregar");
          }}
        >
          <Text style={[tw`flex text-center justify-between  `]}>
            <Text
              style={tw`text-lg font-semibold text-gray-700 capitalize text-white `}
            >
              <Icon
                name="plus"
                style={tw`text-lg font-semibold m-2 text-gray-700 capitalize text-gray-50`}
              />
              Agregar platillo
            </Text>
          </Text>
        </Pressable>
        <Text
          style={tw`text-lg mx-auto  font-semibold  text-gray-700 capitalize text-gray-700`}
        >
          Wilmar Otoniel Osorio Majano DS39
        </Text>
      </View>
    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 5,
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  btn: {
    marginBottom: 7,
  },
});
export default Home;
