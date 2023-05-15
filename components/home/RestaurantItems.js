import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
    {
      name: "Pizza Hutt",
      image_url:
        "https://static.phdvasia.com/nz/menu/single/mobile_detail_25c13ad7-2725-4a84-980a-272dabc95519.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "MC Donalds",
      image_url:
        "https://mcdonalds.co.nz/sites/mcdonalds.co.nz/files/product-Quarter-Pounder-Double-desktop_1.png",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "KFC",
      image_url:
        "https://static.kfc.co.nz/images/items/lg/bacon-lovers-burger.jpg?v=LWkPkL",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
  ];

  export default function RestaurantItems({ navigation, ...props }) {
    return (
      <>
        {props.restaurantData.map((restaurant, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            style={{ marginBottom: 30 }}
            onPress={() =>
              navigation.navigate("RestaurantDetail", {
                name: restaurant.name,
                image: restaurant.image_url,
                price: restaurant.price,
                reviews: restaurant.review_count,
                rating: restaurant.rating,
                categories: restaurant.categories,
              })
            }
          >
            <View
              style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
            >
              <RestaurantImage image={restaurant.image_url} />
              <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
            </View>
          </TouchableOpacity>
        ))}
      </>
    );
  }

//HOME SCREEN IMAGE COMPONENT  ---------
const RestaurantImage = (props) => (
    <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180, borderRadius: 20}}
    />

    {/* HEART ON THE TOP RIGHT OF THE IMAGE  */}
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

//  TEXT UNDER THE IMAGE
const RestaurantInfo = (props) => (
<View
    style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    }}
>   
    <View>          
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
        <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
    </View>
    
    

    {/* The style below is to make the circle around the rate number on the bottom right of the screen under the photo*/}
    <View style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
        <Text>{props.rating}</Text>
    </View>
</View>
);