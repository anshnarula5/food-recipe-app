import { Layout, Text } from "@ui-kitten/components";
import React, { useEffect } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
const TypeCard2 = ({ text, color, icon, handlePress }) => {
  return (
    <TouchableOpacity style={{ backgroundColor: color, ...styles.card }} onPress={() => handlePress()}>
      <Image
        source={
          icon === 1
            ? require(`../assets/icons/noodles.png`)
            : icon === 2
            ? require(`../assets/icons/pizza.png`)
            : icon === 3 && require(`../assets/icons/taco.png`)
        }
        resizeMode="cover"
      />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TypeCard2;

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    width: 105,
  },
  text: {
    fontSize: 17,
    paddingVertical:8,
  },
  sub: {
    paddingTop: 6,
  },
});
