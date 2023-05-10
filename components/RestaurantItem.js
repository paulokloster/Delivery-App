import { View, Text, Image } from 'react-native'
import React from 'react'

export default function RestaurantItem() {
  return (
    <View>
      <RestaurantImage />
      {/* <RestaurantInfo /> */}
    </View>
  );
}

const RestaurantImage = () => (
    <Image
    source={{
        uri: "https://www.tastingtable.com/img/gallery/12-low-carb-fast-food-options-that-wont-ruin-your-diet/intro-1651501665.webp"


    }}
    style={{ width: "100%", height: 180}}
    />
);