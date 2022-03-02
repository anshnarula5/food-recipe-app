import { Layout, Text } from "@ui-kitten/components";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import FoodCard from "../components/FoodCard";

const Home = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get(
      "https://api.edamam.com/search?q=chicken&app_id=53f9c771&app_key=4fcebc5db45c3a7aac2e1b746c3052fe"
    );
    console.log(res.data);
    setData(res.data.hits);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout style={styles.container}>
          {data.length > 0 && data.map(d => (
          <FoodCard data={d}/>
      ))}
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  container: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    paddingHorizontal: 5,
  },
});
