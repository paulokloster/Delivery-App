import React from "react";
import { View, Text, Image } from "react-native";

const yelpRestaurantInfo = {
  name: "Brazilian Cuisine",
  image: "https://c4.wallpaperflare.com/wallpaper/165/200/910/food-pizza-cheese-wallpaper-preview.jpg", 
  price: "$$",
  reviews: "1200",
  rating: 4.5,
  categories: [
    { title: "Brazilian"}, 
    { title: " Pizzas" },
    { title: "Juice"} 
  ],
};

const {name, image, price, reviews, rating, categories} = yelpRestaurantInfo;

const formattedCategories = categories.map((cat) => cat.title).join(" • ");

const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;


export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle name={name} />
      <RestaurantDescription description={description} />

    </View>
  );
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
  );

const RestaurantTitle = (props) => (
<Text
  style={{
    fontSize: 29,
    fontWeight: "600",
    marginTop: 10,
    marginHorizontal: 15,
  }}
  >
{props.title}
</Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);