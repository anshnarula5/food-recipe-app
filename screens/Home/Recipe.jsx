import { Text, Layout } from "@ui-kitten/components";
import React, { useEffect, useRef } from "react";
import { Animated, View, StyleSheet, Image, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";
import Icon from "react-native-vector-icons/AntDesign";
import { SimpleLineIcons } from "react-native-vector-icons";
import { FontAwesome } from "react-native-vector-icons";
import * as Progress from "react-native-progress";
import {
  capitalize,
  pBlue,
  pGreen,
  pPink,
  pPurple,
  pSky,
  pViolet,
} from "../../constants";

const Recipe = ({ route, navigation }) => {
  const { recipe } = route.params;
  const nuts = Object.values(recipe.totalDaily);
  const filteredNuts = nuts.slice(0, 7);
  const safeInsets = useSafeAreaInsets();
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    console.log(nuts);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      delay: 0,
      useNativeDriver: true,
    }).start();
  }, []);

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
      <Layout style={styles.recipe}>
        <Text style={{ color: pBlue, fontSize: 20 }}>
          {capitalize(recipe.mealType[0])}
        </Text>
        <Text
          category={"h2"}
          style={{ fontWeight: "bold", paddingVertical: 10 }}
        >
          {recipe.label}
        </Text>
        <Layout style={styles.cards}>
          <Layout style={{ backgroundColor: pPurple, ...styles.card }}>
            <Icon name="clockcircleo" size={30} />
            <View style={{ alignItems: "center", paddingTop: 7 }}>
              <Text>{5 + Math.floor(Math.random() * 30)} </Text>
              <Text>min</Text>
            </View>
          </Layout>
          <Layout style={{ backgroundColor: pSky, ...styles.card }}>
            <SimpleLineIcons name="fire" size={30} />
            <View style={{ alignItems: "center", paddingTop: 7 }}>
              <Text>{recipe.calories.toFixed(2)}</Text>

              <Text>Calories</Text>
            </View>
          </Layout>
          <Layout style={{ backgroundColor: pPink, ...styles.card }}>
            <FontAwesome name="heartbeat" size={30} />
            <Text style={styles.text}>{recipe.healthLabels[0]}</Text>
          </Layout>
        </Layout>
        <Text
          category={"h3"}
          style={{ fontWeight: "200", paddingVertical: 10 }}
        >
          Nutrition
        </Text>
        <Layout>
          {filteredNuts.map((f) => (
            <Layout>
              <Text>{f.label}</Text>
              <Progress.Bar
                progress={Math.random()}
                width={300}
                borderWidth={0.6}
                height={10}
                animated={false}
              />
            </Layout>
          ))}
        </Layout>
      </Layout>
    </ScrollView>
  );
};

export default Recipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postImage: {
    height: 300,
    width: "100%",
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
    paddingVertical: 15,
    minWidth: 100,
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
});
