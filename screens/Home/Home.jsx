import { useNavigation } from "@react-navigation/native";
import { Text } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Cuisines from "../../components/Banners/Cuisines";
import Healthy from "../../components/Banners/Healthy";
import FoodCard from "../../components/FoodCard";
import RowLoader from "../../components/loaders/RowLoader";
import Row from "../../components/Row";
import TypeCard from "../../components/TypeCard";
import TypeCard2 from "../../components/TypeCard2";
import { pBlue, pGreen, pOrange, pPink, pViolet } from "../../constants";
import meal from "../../helpers/getTime";
import {
  fetchDessert,
  fetchIndian,
  fetchMealTime,
} from "../../redux/actions/recipeAction";

const Home = () => {
  const { loading: bLoading, mealTime } = useSelector(
    (state) => state.mealTime
  );
  const { loading: iLoading, indian } = useSelector((state) => state.indian);
  const { loading: dLoading, dessert } = useSelector((state) => state.dessert);
  const navigator = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMealTime(meal));
    dispatch(fetchIndian());
    dispatch(fetchDessert());
    console.log(meal);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text category={"h1"} style={styles.header}>
        Food tomorrow because today is almost over.
      </Text>
      <Cuisines />
      <Text category={"h2"} style={styles.header}>
        {meal[0].toUpperCase() + meal.split(meal[0])[1]} Time
      </Text>
      {bLoading ? <RowLoader /> : <Row loading={bLoading} foods={mealTime} />}
     
      <Text category={"h1"} style={styles.header}>
        Indian
      </Text>
      {iLoading ? <RowLoader /> : <Row foods={indian} />}
      <Healthy />
      <Text category={"h1"} style={styles.header}>
        Dessert
      </Text>
      {dLoading ? <RowLoader /> : <Row foods={dessert} />}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: "#f3f3f3",
  },

  hContainer: {
    paddingVertical: 10,
  },
  header: {
    paddingVertical: 20,
    fontWeight: "bold",
    fontSize: 25,
  },
 
 
});
