import React from "react";
import { Text, View, ImageBackground, FlatList } from "react-native";
import Styles from "./Util";
import Componente from "./Componente";
const Bebida = ({ navigation, route }) => {
  const { platillos, category } = route.params;
  const dataShow = platillos;
  return (
    <View style={Styles.containerScreen}>
      <ImageBackground
        style={Styles.banner}
        resizeMode="stretch"
        source={require("../assets/drinks.jpg")}
      ></ImageBackground>
      <View style={Styles.header}>
        <Text style={Styles.headerTitle}>Nuestras Bebidas</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={Styles.flatListItem}
        keyExtractor={(item, index) => index.toString()}
        data={dataShow}
        renderItem={({ item }) => {
          if (item.category == 4) {
            return (
              <View>
                <Componente
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  source={item.category}
                />
              </View>
            );
          }
        }}
      />
    </View>
  );
};

export default Bebida;
