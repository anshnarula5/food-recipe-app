import { View, Text } from "@ui-kitten/components";
import React, { useEffect } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { pPink, pViolet } from "../constants";

const TypeCard = ({ text, color, handlePress }) => {
  return (
    <TouchableOpacity style={{backgroundColor: color, ...styles.card}} onPress={() => handlePress()} >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TypeCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginHorizontal: 10,
    width: "44%",
    marginBottom: 15,
    padding: 15,
    elevation : 5
    
  },
  image: {
    justifyContent: "center",
    height: 150,
    borderRadius: 5,
  },
  text: {
    fontSize: 15,
  },
  sub: {
    paddingTop: 6,
  },
});
