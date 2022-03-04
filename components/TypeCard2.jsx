import { Layout, Text } from "@ui-kitten/components";
import React, { useEffect } from "react";
import { Image, StyleSheet } from "react-native";
const TypeCard2 = ({text, color, icon}) => {
  return (
    <Layout style={{ backgroundColor: color, ...styles.card }}>
      <Image
        source={require(`../assets/icons/taco.png`)}
        resizeMode="cover"
      />
      <Text style={styles.text}>{text}</Text>
    </Layout>
  );
};

export default TypeCard2;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingVertical: 15,
    width: 100
  },
  text: {
    fontSize: 17,
    paddingVertical: 7,
  },
  sub: {
    paddingTop: 6,
  },
});
