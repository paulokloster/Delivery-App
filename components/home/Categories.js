import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const items = [
  {
    image: require("../../assets/images/paper-bags.png"),
    text: "Pick-up",
  },
  {
    image: require("../../assets/images/fast-food1.png"),
    text: "Fast Foods",
  },
  {
    image: require("../../assets/images/discount.png"),
    text: "Deals",
  },
  {
    image: require("../../assets/images/coke3.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../../assets/images/bread1.png"),
    text: "Bakery Items",
  },
  {
    image: require("../../assets/images/coffee-cup.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../../assets/images/cheesecake.png"),
    text: "Desserts",
  },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}