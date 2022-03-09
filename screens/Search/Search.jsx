import { Text } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
} from "react-native";
import { background } from "../../constants";
import Icon from "react-native-vector-icons/AntDesign";
import { fetchSearchresults } from "../../redux/actions/searchAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import FoodCard from "../../components/FoodCard";
import ListLoader from "../../components/loaders/ListLoader";
import FoodCard2 from "../../components/FoodCard2";

const renderItem = ({ item }) => {
  return <FoodCard2 data={item} />;
};

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { loading, foods } = useSelector((state) => state.searchFood);
  useEffect(() => {
    const delay = setTimeout(() => {
      dispatch(fetchSearchresults(keyword));
    }, 300);
    return () => clearTimeout(delay);
  }, [keyword]);

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={() => setKeyword("")} style={styles.clear}>
          <Icon name="delete" size={30} color={"white"} />
        </TouchableOpacity> */}
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={"black"}
        onChangeText={(e) => setKeyword(e)}
        value={keyword}
      ></TextInput>
      {keyword.length > 0 ? (
        <View style={styles.container}>
          {loading ? (
            <ListLoader />
          ) : (
            <View>
              <FlatList
                data={foods}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
              />
            </View>
          )}
        </View>
      ) : (
        <Text>Search</Text>
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 5,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: "90%",
    padding: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#e0e0e0",
    borderRadius: 15,
    alignItems: "center",
    marginVertical: 20,
    marginBottom: 30,
    color: "black",
    elevation: 5,
  },
  header: {
    fontSize: 25,
    color: "white",
    padding: 10,
  },
  image: {
    justifyContent: "center",
    height: 200,
    width: 150,
  },
  poster: {
    margin: 10,
    elevation: 15,
    shadowColor: "black",
  },
  tag: {
    padding: 5,
    marginRight: 6,
    marginBottom: 6,
    elevation: 15,
    borderRadius: 5,
  },
  history: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  searchTerm: {
    color: "white",
    padding: 4,
    fontSize: 15,
  },
  clear: {
    position: "absolute",
    left: 325,
    elevation: 15,
    top: 28,
  },
});
