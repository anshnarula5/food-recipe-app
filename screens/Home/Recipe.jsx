import { Text } from "@ui-kitten/components";
import React, { useEffect, useRef } from "react";
import { Animated, View, StyleSheet, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";

const Recipe = ({ route, navigation }) => {
  const { recipe } = route.params;
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

  return (
    <View style={styles.container}>
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
        <Text  onPress={() => navigation.goBack()}>Go back</Text>
      </Animated.View>

      <SharedElement id={recipe.label}>
        <Image
          source={{ uri: recipe.images.LARGE?.url || recipe.image }}
          style={styles.postImage}
          resizeMode="cover"
        />
      </SharedElement>
      <Text>{recipe.label}</Text>
    </View>
  );
};

export default Recipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postImage: {
    height: 325,
    width: "100%",
  },
});
