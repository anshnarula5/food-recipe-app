import { useNavigation } from "@react-navigation/native";
import { Text } from "@ui-kitten/components";
import { StyleSheet, FlatList, View } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

const TitleList = ({ titles }) => {
  const navigation = useNavigation();
    
  return (
    <View style={styles.container}>
      
    </View>
  );
};

export default TitleList;

const styles = StyleSheet.create({
  list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor : "#f3f3f3"
  },
});
