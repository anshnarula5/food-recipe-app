import { useNavigation } from "@react-navigation/native";
import { Text } from "@ui-kitten/components";
import { StyleSheet, FlatList, View } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import ListLoader from "./loaders/ListLoader";
import {background} from "../constants";

const List = ({ route }) => {
  const navigation = useNavigation();
  const url = route.params.url;
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const fetchFood = async () => {
      const res = await axios.get(url);
      setFoods(res.data.hits);
      console.log(res.data.hits);
    };
    fetchFood();
  }, []);

  const renderItem = ({ item }) => {
    return <FoodCard data={item} />;
  };

  return (
    <View style={styles.container}>
      {foods.length === 0 ? (
        <ListLoader />
      ) : (
        <View>
          <FlatList
            data={foods}
            renderItem={renderItem}
            keyExtractor={(item) => Math.random()}
            numColumns={2}
          />
        </View>
      )}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor : background
  },
});
