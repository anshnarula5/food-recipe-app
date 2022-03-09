import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SkeletonContent from "react-native-skeleton-content";
import { pOrange } from "../../constants";

const RowLoader = () => {
  return (
    <SkeletonContent
      containerStyle={{ display: "flex", flexDirection: "row" }}
      isLoading={true}
      animationDirection="diagonalTopLeft"
      layout={[
        { key: "someId", width: 170, height: 150, marginHorizontal : 5, borderRadius : 5 },
        { key: "someOtherId", width: 170, height: 150, marginHorizontal : 5, borderRadius : 5 },
      ]}
    ></SkeletonContent>
  );
};

export default RowLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    display: "flex",
    alignContent: "center",
    flexDirection: "row",
  },
  box1: {
    width: 180,
    height: 180,
    marginRight: 10,
    borderRadius: 6,
  },
  box2: {
    width: 180,
    height: 180,
    borderRadius: 6,
  },
});
