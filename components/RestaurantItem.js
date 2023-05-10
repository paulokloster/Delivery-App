import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export default function RestaurantItem() {
  return (
    <View>
      <RestaurantImage />
      {/* <RestaurantInfo /> */}
    </View>
  );
}

const RestaurantImage = () => (
    <>
    <Image
      source={{
        uri: "https://www.tastingtable.com/img/gallery/12-low-carb-fast-food-options-that-wont-ruin-your-diet/intro-1651501665.webp"
      }}
      style={{ width: "100%", height: 180}}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);