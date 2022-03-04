import { useNavigation } from "@react-navigation/native";
import { Layout, Text } from "@ui-kitten/components";
import React, { useEffect } from "react";
import { Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { SharedElement } from "react-navigation-shared-element";

const FoodCard = ({ data }) => {
  const navigation = useNavigation();
  const recipe = data.recipe;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Recipe", { recipe: recipe })} style={styles.card} 
    >
        <SharedElement id={recipe.label}>
          <Image
            source={{
              uri: recipe.images.LARGE?.url || recipe.image,
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </SharedElement>
        <Text style={styles.text}>{recipe.label}</Text>
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
