import { Layout, Text } from "@ui-kitten/components";
import React, {useEffect} from "react";
import { Image, StyleSheet } from "react-native";

const FoodCard = ({data}) => {
    useEffect(() => console.log(data), [])
  return (
    <Layout level="3" style={styles.card}>
      <Image
        source={{
          uri: data.recipe.image,
        }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.text}>{data.recipe.label}</Text>
      <Text style={styles.sub} category = "c1">Chicken</Text>
    </Layout>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  card: {
    width: "45%",
    padding: 10,
    borderRadius: 10,
        margin: 8,
    backgroundColor : "#fff6d7"
  },
  image: {
    justifyContent: "center",
    height: 150,
    width: 150,
    borderRadius: 5,
    },
    text: {
        paddingTop: 6,
        fontSize: 20,
        fontWeight : "bold"
    },
    sub: {
        paddingTop: 6,
    }
});
