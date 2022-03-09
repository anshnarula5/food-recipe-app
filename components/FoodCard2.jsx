import { useNavigation } from "@react-navigation/native";
import { View, Text } from "@ui-kitten/components";
import React, { useEffect } from "react";
import { Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import ProgressiveImage from "./ProgressiveImage";

const FoodCard2 = ({ data }) => {
  const navigation = useNavigation();
  const recipe = data.recipe;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("RecipeSearch", { recipe: recipe })}
      style={styles.card}
      
    >
      <SharedElement id={recipe.label}>
        <ProgressiveImage
          source={recipe.images.LARGE?.url}
          defaultImageSource="https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png"
          style={styles.image}
          resizeMode="cover"
        />
      </SharedElement>
      <Text style={styles.text}>{recipe.label}</Text>
    </TouchableOpacity>
  );
};

export default FoodCard2;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginRight: 10,
    width: 180,
    paddingBottom : 5
  },
  image: {
    justifyContent: "center",
    height: 150,
    borderRadius: 5,
  },
  text: {
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  sub: {
    paddingTop: 6,
  },
});
