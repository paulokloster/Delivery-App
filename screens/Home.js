import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView,ScrollView } from 'react-native';
import { Divider } from "react-native-elements";
import BottomTabs from "../components/BottomTabs";
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import RestaurantItems, {localRestaurants }from '../components/RestaurantItems';
import SearchBar from '../components/SearchBar';



const YELP_API_KEY = "MnPMKfZsKYwDVVD1mzQXPl2yK1wEEY_1GLJaoH6Edu7xlL6zMvf0Wo9BkkBMsavS6POh8mvjE85pnXsNp2l0zIsbaPV_-fLQ2TFVhm4in1LiXiAH_WPBkGdXQEhbZHYx";

export default function home() {  
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("Chicago");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = 
    `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
    .then((res) => res.json())
    .then((json) =>
      setRestaurantData(
        json.businesses.filter((business) =>
          business.transactions.includes(activeTab.toLowerCase())
        )
      )
    );
};

useEffect(() => {
  getRestaurantsFromYelp();
}, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>        
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
       </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData}/>
      </ScrollView>   
      <Divider width={1} />
      <BottomTabs />  
    </SafeAreaView>
  );
}