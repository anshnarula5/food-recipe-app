import { useNavigation } from "@react-navigation/native";
import { Text } from "@ui-kitten/components";
import { StyleSheet, FlatList, View, TouchableOpacity } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import {background, capitalize} from "../constants";

const TitleList = ({  route }) => {
  const navigation = useNavigation();
  const list = route.params.list
  const Title = ({ data }) => {
    return (
      <TouchableOpacity
        style={{
          paddingVertical: 12,
          backgroundColor: "white",
          marginBottom: 10,
          marginHorizontal: 5,
          paddingHorizontal: 8,
          elevation: 5,
          borderRadius: 15,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width:  175
        }}
      >
        <Text
          style={{ fontWeight: "bold", fontSize: 20, paddingHorizontal: 15 }}
        >
          {capitalize(data)}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({ item }) => <Title data={item} />}
        keyExtractor={(item) => Math.random()}
        numColumns = {2}
      />
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
    paddingTop: 15,
    backgroundColor: background,
  },
});
