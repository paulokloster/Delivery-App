import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView,ScrollView } from 'react-native';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import RestaurantItem from '../components/RestaurantItem';


export default function home() {
  
  return (

    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>        
        <HeaderTabs />
        <SearchBar />
       </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem />
      </ScrollView>     
    </SafeAreaView>
  );
}