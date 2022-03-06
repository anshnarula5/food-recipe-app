import { useNavigation } from "@react-navigation/native";
import { Layout, Text } from "@ui-kitten/components";
import { StyleSheet, FlatList } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

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
    <Layout style={styles.container}>
      {foods.length === 0 ? (
        <Text>Loading</Text>
      ) : (
        <Layout >
          <FlatList
            data={foods}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </Layout>
      )}
    </Layout>
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
        paddingTop : 10
    }
});
