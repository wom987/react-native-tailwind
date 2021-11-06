import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffa500",
    alignItems: "center",
    justifyContent: "center",
  },
  banner: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    marginLeft: "1%",
    marginRight: "1%",
    width: "98%",
    height: 180,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  header: {
    margin: "6%",
  },
  headerTitle: {
    fontSize: 35,
    fontWeight: "bold",
  },
  optionsContainer: {
    flexDirection: "row",
  },
  element: {
    alignItems: "center",
    justifyContent: "flex-end",
    margin: 10,
    height: 210,
    width: 190,
  },
  footer: {
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    backgroundColor: "#ffffd3",
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 30,
  },
  imageText: {
    fontSize: 25,
    marginLeft:45
  },
  products: {
    height: "65%",
    paddingBottom: "1%",
    backgroundColor: "#ffffd3",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  itemScreem: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
    marginTop:"10%",
    backgroundColor:'#fff',
    padding:10,
    borderRadius:5
  }, containerScreen: {
    backgroundColor: "#ffa500",
    alignItems: "center",
    justifyContent: "center",
  },textItemScren:{
    fontSize:20,
    margin:5,
    width:150
  },textTitleItemScren:{
    fontSize:20,
    margin:5,
    width:150,
    fontWeight:'bold'
  },textDescriptionItemScren:{
    fontSize:20,
    margin:5,
    width:150,
  },textItemPriceScren:{
    fontSize:20,
    margin:5,
    width:70,
  },flatListItem:{
    height:510
  }
});
export default Styles;
