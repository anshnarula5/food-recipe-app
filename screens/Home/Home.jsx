import { useNavigation } from "@react-navigation/native";
import { Text } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import FoodCard from "../../components/FoodCard";
import RowLoader from "../../components/loaders/RowLoader";
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
      <Text category={"h2"} style={styles.header}>
        Cuisines
      </Text>
      <View style={styles.box}>
        <TypeCard2
          text={"Chinese"}
          color={pGreen}
          icon={1}
          handlePress={() =>
            navigator.navigate("List", {
              url: "https://api.edamam.com/api/recipes/v2?type=public&q=&app_id=53f9c771&app_key=4fcebc5db45c3a7aac2e1b746c3052fe&cuisineType=chinese&imageSize=LARGE&random=true",
            })
          }
        />
        <TypeCard2
          text={"Italian"}
          color={pViolet}
          icon={2}
          handlePress={() =>
            navigator.navigate("List", {
              url: "https://api.edamam.com/api/recipes/v2?type=public&q=&app_id=53f9c771&app_key=4fcebc5db45c3a7aac2e1b746c3052fe&cuisineType=italian&imageSize=LARGE&random=true",
            })
          }
        />
        <TypeCard2
          text={"Mexican"}
          color={pBlue}
          icon={3}
          handlePress={() =>
            navigator.navigate("List", {
              url: "https://api.edamam.com/api/recipes/v2?type=public&q=&app_id=53f9c771&app_key=4fcebc5db45c3a7aac2e1b746c3052fe&cuisineType=mexican&imageSize=LARGE&random=true",
            })
          }
        />
      </View>
      <Text category={"h2"} style={styles.header}>
        {meal[0].toUpperCase() + meal.split(meal[0])[1]} Time
      </Text>
      <View style={styles.hContainer}>
        {bLoading ? (
          <RowLoader />
        ) : (
          <FlatList
            horizontal={true}
            data={mealTime}
            renderItem={({ item }) => <FoodCard data={item} />}
            keyExtractor={(item) => item.uri}
          />
        )}
      </View>
      <Text category={"h2"} style={styles.header}>
        Healthy food
      </Text>
      <View style={styles.box2}>
        <TypeCard
          text={"Vegan"}
          color={pGreen}
          handlePress={() =>
            navigator.navigate("List", {
              url: "https://api.edamam.com/api/recipes/v2?type=public&q=&app_id=53f9c771&app_key=4fcebc5db45c3a7aac2e1b746c3052fe&health=vegan&imageSize=LARGE&random=true",
            })
          }
        />
        <TypeCard
          text={"Gluten-free"}
          color={pViolet}
          handlePress={() =>
            navigator.navigate("List", {
              url: "https://api.edamam.com/api/recipes/v2?type=public&q=&app_id=53f9c771&app_key=4fcebc5db45c3a7aac2e1b746c3052fe&health=gluten-free&imageSize=LARGE&random=true",
            })
          }
        />
        <TypeCard
          text={"High Protien"}
          color={pBlue}
          handlePress={() =>
            navigator.navigate("List", {
              url: "https://api.edamam.com/api/recipes/v2?type=public&q=&app_id=53f9c771&app_key=4fcebc5db45c3a7aac2e1b746c3052fe&diet=high-protien&imageSize=LARGE&random=true",
            })
          }
        />
        <TypeCard
          text={"Low Sugar"}
          color={pPink}
          handlePress={() =>
            navigator.navigate("List", {
              url: "https://api.edamam.com/api/recipes/v2?type=public&q=&app_id=53f9c771&app_key=4fcebc5db45c3a7aac2e1b746c3052fe&health=sugar-conscious&imageSize=LARGE&random=true",
            })
          }
        />
      </View>

      <Text category={"h1"} style={styles.header}>
        Indian
      </Text>
      <View style={styles.hContainer}>
        {iLoading ? (
          <RowLoader />
        ) : (
          <FlatList
            horizontal={true}
            data={indian}
            renderItem={({ item }) => <FoodCard data={item} />}
            keyExtractor={(item) => item.uri}
          />
        )}
      </View>
      <Text category={"h1"} style={styles.header}>
        Dessert
      </Text>
      <View style={styles.hContainer}>
        {dLoading ? (
          <RowLoader />
        ) : (
          <FlatList
            horizontal={true}
            data={dessert}
            renderItem={({ item }) => <FoodCard data={item} />}
            keyExtractor={(item) => item.uri}
          />
        )}
      </View>
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
    fontSize : 25
  },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box2: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
