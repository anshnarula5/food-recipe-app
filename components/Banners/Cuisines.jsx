import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { pBlue, pGreen, pink, pViolet } from "../../constants";
import TypeCard2 from "../TypeCard2";

const Cuisines = () => {
  const navigator = useNavigation();
  const cuisines = [
    "american",
    "asian",
    "british",
    "caribbean",
    "chinese",
    "french",
    "indian",
    "italian",
    "japanese",
    "kosher",
    "mediterranean",
    "mexican",
    "nordic",
  ];
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
   

        }}
      >
        <Text category={"h2"} style={styles.header}>
          Cuisines
        </Text>
        <TouchableOpacity
          category={"h2"}
          onPress={() => navigator.navigate("TitleList", { list: cuisines })}
        >
          <Text>See more</Text>
        </TouchableOpacity>
      </View>

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
    </View>
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
