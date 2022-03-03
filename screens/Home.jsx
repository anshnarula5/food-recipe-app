import { Layout, Text } from "@ui-kitten/components";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet } from "react-native";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import FoodCard from "../components/FoodCard";
import TypeCard from "../components/TypeCard";
import {fetchBreakfast, fetchDessert, fetchIndian} from "../redux/actions/recipeAction";

const Home = () => {
  const {loading : bLoading, breakfast} = useSelector(state => state.breakfast)
  const {loading : iLoading, indian} = useSelector(state => state.indian)
  const {loading : dLoading, dessert} = useSelector(state => state.dessert)
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBreakfast())
    dispatch(fetchIndian())
    dispatch(fetchDessert())
  }, []);
  return (
    <ScrollView style={styles.container}>
      <Text category={"h1"} style={styles.header}>Food tomorrow because today is almost over.</Text>
      <TypeCard />
      <Text category={"h1"} style={styles.header}>Breakfast</Text>
      <Layout style={styles.hContainer}>
        {bLoading ? <Text >loading</Text> : (
          <FlatList
            horizontal={true}
            data={breakfast}
            renderItem={({ item }) => <FoodCard data={item} />}
            keyExtractor={(item) => item.uri}
          />
        )}
      </Layout>
      <Text category={"h1"} style={styles.header}>Indian</Text>
      <Layout style={styles.hContainer}>
        {iLoading  ? <Text >loading</Text> : (
          <FlatList
            horizontal={true}
            data={indian}
            renderItem={({ item }) => <FoodCard data={item} />}
            keyExtractor={(item) => item.uri}
          />
        )}
      </Layout>
      <Text category={"h1"} style={styles.header}>Dessert</Text>
      <Layout style={styles.hContainer}>
        {dLoading  ? <Text >loading</Text> : (
          <FlatList
            horizontal={true}
            data={dessert}
            renderItem={({ item }) => <FoodCard data={item} />}
            keyExtractor={(item) => item.uri}
          />
        )}
      </Layout>
     
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  
  hContainer: {
    paddingVertical : 10
  },
  header: {
    paddingVertical : 10
  },
});
