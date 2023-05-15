import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from 'react-native-elements';
import BouncyCheckbox from "react-native-bouncy-checkbox";


  
const foods = [
    {
        title: "Pizza",
        description: 
            "Amazing pizza bla bla bla",
        price: "$19.90",
        image: 
            "https://c4.wallpaperflare.com/wallpaper/165/200/910/food-pizza-cheese-wallpaper-preview.jpg"
    },
    {
        title: "Pizza",
        description: 
            "Amazing pizza bla bla bla",
        price: "$19.90",
        image: 
            "https://c0.wallpaperflare.com/preview/839/412/980/food-and-drink-pizza-pizzas-tomato.jpg"
    },
    {
        title: "Pizza",
        description: 
            "Amazing pizza bla bla bla",
        price: "$19.90",
        image: 
            "https://c4.wallpaperflare.com/wallpaper/826/968/997/food-pizza-tomatoes-red-onion-wallpaper-preview.jpg"
    },
    {
      title: "Pizza",
      description: 
          "Amazing pizza bla bla bla",
      price: "$19.90",
      image: 
          "https://c4.wallpaperflare.com/wallpaper/207/466/351/food-pizza-wallpaper-preview.jpg"
  },
  {
    title: "Pizza",
    description: 
        "Amazing pizza bla bla bla",
    price: "$19.90",
    image: 
        "https://c4.wallpaperflare.com/wallpaper/165/200/910/food-pizza-cheese-wallpaper-preview.jpg"
},
{
  title: "Pizza",
  description: 
      "Amazing pizza bla bla bla",
  price: "$19.90",
  image: 
      "https://c4.wallpaperflare.com/wallpaper/363/606/522/italian-pizza-wallpaper-preview.jpg"
},
{
  title: "Pizza",
  description: 
      "Amazing pizza bla bla bla",
  price: "$19.90",
  image: 
      "https://c0.wallpaperflare.com/preview/177/685/219/pizza-supreme-cheese-food.jpg"
},
];


// STYLES
const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

//Adding FoodInfo and FoodImage components
export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
           
              <BouncyCheckbox
                iconStyle={{ borderColor: "lightgray", borderRadius: 0,  }}
                fillColor="green"
                
                
              />
           
            <FoodInfo food={food} />
            <FoodImage food={food}  />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
      <Text style={styles.titleStyle}>{props.food.title}</Text>
      <Text>{props.food.description}</Text>
      <Text>{props.food.price}</Text>
    </View>
  );
  
  const FoodImage = ({ marginLeft, ...props }) => (
    <View>
      <Image
        source={{ uri: props.food.image }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 8,
          marginLeft: marginLeft,
        }}
      />
    </View>
  );