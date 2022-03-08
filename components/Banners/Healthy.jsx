import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { pBlue, pGreen, pPink, pViolet } from "../../constants";
import TypeCard from "../TypeCard";
import TypeCard2 from "../TypeCard2";

const Healthy = () => {
  return (
    <>
      <Text category={"h2"} style={styles.header}>
        Healthy food
      </Text>
      <View style={styles.box2}>
        <TypeCard
          text={"Vegan"}
          color={pGreen}
          handlePress={() =>
            navigator.navigate("List", {
              url: "https://api.edamam.com/api/recipes/v2?type=public&q=&app_id=53f9c771&app_key=4fcebc5db45c3a7aac2e1b746c3052fe&health=vegan&imageSize=LARGE&random=true",
            })
          }
        />
        <TypeCard
          text={"Gluten-free"}
          color={pViolet}
          handlePress={() =>
            navigator.navigate("List", {
              url: "https://api.edamam.com/api/recipes/v2?type=public&q=&app_id=53f9c771&app_key=4fcebc5db45c3a7aac2e1b746c3052fe&health=gluten-free&imageSize=LARGE&random=true",
            })
          }
        />
        <TypeCard
          text={"High Protien"}
          color={pBlue}
          handlePress={() =>
            navigator.navigate("List", {
              url: "https://api.edamam.com/api/recipes/v2?type=public&q=&app_id=53f9c771&app_key=4fcebc5db45c3a7aac2e1b746c3052fe&diet=high-protien&imageSize=LARGE&random=true",
            })
          }
        />
        <TypeCard
          text={"Low Sugar"}
          color={pPink}
          handlePress={() =>
            navigator.navigate("List", {
              url: "https://api.edamam.com/api/recipes/v2?type=public&q=&app_id=53f9c771&app_key=4fcebc5db45c3a7aac2e1b746c3052fe&health=sugar-conscious&imageSize=LARGE&random=true",
            })
          }
        />
      </View>
    </>
  );
};

export default Healthy;

const styles = StyleSheet.create({
  box2: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  header: {
    paddingVertical: 20,
    fontWeight: "bold",
    fontSize: 25,
  },
});
