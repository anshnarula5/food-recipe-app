import { Layout, Text } from "@ui-kitten/components";
import React, { useEffect } from "react";
import { Image, StyleSheet } from "react-native";
import { pPink, pViolet } from "../constants";

const TypeCard = ({ text, color }) => {
  return (
    <Layout style={{ backgroundColor: color, ...styles.card }}>
      <Text style={styles.text}>{text}</Text>
    </Layout>
  );
};

export default TypeCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginRight: 10,
    width: "47%",
    marginBottom: 10,
    padding: 15,
    
  },
  image: {
    justifyContent: "center",
    height: 150,
    borderRadius: 5,
  },
  text: {
    fontSize: 17,
  },
  sub: {
    paddingTop: 6,
  },
});
