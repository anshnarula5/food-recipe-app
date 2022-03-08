import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { pBlue, pGreen, pViolet } from "../../constants";
import TypeCard2 from "../TypeCard2";

const Cuisines = () => {
  return (
    <>
      <Text category={"h2"} style={styles.header}>
        Cuisines
      </Text>

      <View style={styles.box}>
        <TypeCard2
          text={"Chinese"}
          color={pGreen}
          icon={1}
          handlePress={() =>
            navigator.navigate("List", {
              url: "https://api.edamam.com/api/recipes/v2?type=public&q=&app_id=53f9c771&app_key=4fcebc5db45c3a7aac2e1b746c3052fe&cuisineType=chinese&imageSize=LARGE&random=true",
            })
          }
        />
        <TypeCard2
          text={"Italian"}
          color={pViolet}
          icon={2}
          handlePress={() =>
            navigator.navigate("List", {
              url: "https://api.edamam.com/api/recipes/v2?type=public&q=&app_id=53f9c771&app_key=4fcebc5db45c3a7aac2e1b746c3052fe&cuisineType=italian&imageSize=LARGE&random=true",
            })
          }
        />
        <TypeCard2
          text={"Mexican"}
          color={pBlue}
          icon={3}
          handlePress={() =>
            navigator.navigate("List", {
              url: "https://api.edamam.com/api/recipes/v2?type=public&q=&app_id=53f9c771&app_key=4fcebc5db45c3a7aac2e1b746c3052fe&cuisineType=mexican&imageSize=LARGE&random=true",
            })
          }
        />
      </View>
    </>
  );
};

export default Cuisines;

const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    paddingVertical: 20,
    fontWeight: "bold",
    fontSize: 25,
  },
});
