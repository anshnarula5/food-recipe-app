import {useNavigation} from "@react-navigation/native";
import { Layout, Text } from "@ui-kitten/components";
import React, { useEffect } from "react";
import { Image, StyleSheet } from "react-native";
import {TouchableOpacity} from "react-native";

const FoodCard = ({data}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Recipe", { id: data.id })}
    >
      <Layout style={styles.card} level={"2"}>
        <Image
          source={{
            uri: data.recipe.image,
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.text}>{data.recipe.label}</Text>
      </Layout>
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginRight: 10,
    width: 180,
  },
  image: {
    justifyContent: "center",
    height: 150,
    borderRadius: 5,
  },
  text: {
    padding: 10,
    fontSize: 17,
    fontWeight: "bold",
  },
  sub: {
    paddingTop: 6,
  },
});
