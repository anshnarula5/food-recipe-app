import { Layout, Text } from "@ui-kitten/components";
import React, { useEffect } from "react";
import { Image, StyleSheet } from "react-native";
import {pPink, pViolet} from "../constants";

const TypeCard = () => {
  return (
    <Layout style={styles.card}>
      
      <Text style={styles.text}>Chinese</Text>
      
    </Layout>
  );
};

export default TypeCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginRight: 10,
        width: 180,
    backgroundColor : pPink
  },
  image: {
    justifyContent: "center",
    height: 150,
    borderRadius: 5,
  },
  text: {
    padding: 10,
    fontSize: 17,
  },
  sub: {
    paddingTop: 6,
  },
});


