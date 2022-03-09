import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import FoodCard from "./FoodCard";
import RowLoader from "./loaders/RowLoader";

const Row = ({ foods }) => {
  return (
    <View style={styles.hContainer}>
      
        <FlatList
          horizontal={true}
          data={foods}
          renderItem={({ item }) => <FoodCard data={item} />}
          keyExtractor={(item) => Math.random()}
        />
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  hContainer: {
    paddingVertical: 10,
  },
});
