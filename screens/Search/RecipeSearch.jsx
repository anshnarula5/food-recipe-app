import { Text, ListItem, Divider, List } from "@ui-kitten/components";
import React, { useEffect, useRef, useState } from "react";
import { FlatList, Linking } from "react-native";
import {
  Animated,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";
import Icon from "react-native-vector-icons/AntDesign";
import { SimpleLineIcons } from "react-native-vector-icons";
import { FontAwesome } from "react-native-vector-icons";
import {
  capitalize,
  darkGreen,
  pBlue,
  pGreen,
  pPink,
  pPurple,
  pSky,
  pViolet,
} from "../../constants";
import { Feather } from "react-native-vector-icons";
import Nutrition from "../../components/Nutrition";

const RecipeSearch = ({ route, navigation }) => {
  const { recipe } = route.params;
  const nuts = Object.values(recipe.totalDaily);
  const totalCal = nuts.reduce((prev, i) => prev + i.quantity, 0);
  nuts.map((n) => (n.quantity = n.quantity / totalCal));
  nuts.sort((a, b) => b.quantity - a.quantity);
  const filteredNuts = nuts.slice(0, nuts.length / 3);
  const remNuts = nuts.slice(nuts.length / 3, nuts.length);
  const remCal = remNuts.reduce((prev, i) => prev + i.quantity, 0);

  const safeInsets = useSafeAreaInsets();
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      delay: 0,
      useNativeDriver: true,
    }).start();
  }, []);

  
  const Ingredient = ({ data }) => {
    return (
      <View
        style={{
          paddingVertical: 10,
          backgroundColor: "white",
          marginBottom: 10,
          marginHorizontal: 5,
          paddingHorizontal: 10,
          elevation: 5,
          borderRadius: 15,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: data.image }}
          style={styles.ingImage}
          resizeMode="contain"
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            paddingHorizontal: 15,
            flex: 1,
            flexWrap: "wrap",
          }}
        >
          {data.text}
        </Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Animated.View
        style={{
          opacity,
          position: "absolute",
          top: safeInsets.top + 20,
          left: safeInsets.left + 20,
          right: safeInsets.right + 20,
          zIndex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text onPress={() => navigation.goBack()}>Go back</Text>
      </Animated.View>

      <SharedElement id={recipe.label}>
        <Image
          source={{ uri: recipe.images.LARGE?.url || recipe.image }}
          style={styles.postImage}
          resizeMode="cover"
        />
      </SharedElement>
      <View style={styles.recipe}>
        <Text style={{ color: pBlue, fontSize: 20 }}>
          {capitalize(recipe.mealType[0])}
        </Text>
        <Text
          category={"h2"}
          style={{ fontWeight: "bold", paddingVertical: 10 }}
        >
          {recipe.label}
        </Text>
        <View style={styles.cards}>
          <View style={{ backgroundColor: pPurple, ...styles.card }}>
            <Icon name="clockcircleo" size={30} />
            <View style={{ alignItems: "center", paddingTop: 7 }}>
              <Text>{5 + Math.floor(Math.random() * 30)} </Text>
              <Text>min</Text>
            </View>
          </View>
          <View style={{ backgroundColor: pSky, ...styles.card }}>
            <SimpleLineIcons name="fire" size={30} />
            <View style={{ alignItems: "center", paddingTop: 7 }}>
              <Text>{recipe.calories.toFixed(2)}</Text>

              <Text>Calories</Text>
            </View>
          </View>
          <View style={{ backgroundColor: pPink, ...styles.card }}>
            <FontAwesome name="heartbeat" size={30} />
            <Text style={styles.text}>
              {recipe.dietLabels[0] || recipe.healthLabels[0]}
            </Text>
          </View>
        </View>

        <View>
          <Text
            category={"h3"}
            style={{ fontWeight: "200", paddingVertical: 20 }}
          >
            Ingredients
          </Text>
          <FlatList
            data={recipe.ingredients}
            renderItem={({ item }) => <Ingredient data={item} />}
            keyExtractor={(item) => item.uri}
          />
        </View>
        <Text
          category={"h3"}
          style={{
            fontWeight: "200",
            paddingVertical: 20,
            paddingHorizontal: 10,
          }}
          onPress={() => Linking.openURL(recipe.url)}
        >
          Instructions <Feather name="external-link" size={25} />
        </Text>
        <Nutrition filteredNuts={filteredNuts} remCal={remCal}/>
      </View>
    </ScrollView>
  );
};


export default RecipeSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postImage: {
    height: 300,
    width: "100%",
  },
  ingImage: {
    height: 60,
    width: 60,
    borderRadius: 15,
  },
  recipe: {
    padding: 10,
    paddingHorizontal: 15,
  },
  card: {
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingVertical: 12,
    width: 100,
    elevation: 10,
  },
  text: {
    fontSize: 17,
    paddingVertical: 7,
  },
  cards: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 15,
    justifyContent: "space-evenly",
  },
  nutrition: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
