import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SkeletonContent from "react-native-skeleton-content";
import { pOrange } from "../../constants";

const ListLoader = () => {
  return (
    <SkeletonContent
      containerStyle={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
      isLoading={true}
      animationDirection="diagonalTopLeft"
      layout={[
        {
          key: "someId",
          width: 175,
          height: 150,
          marginHorizontal: 5,
          marginBottom: 10,
          borderRadius: 5,
        },
        {
          key: "someOtherId",
          width: 175,
          height: 150,
          marginHorizontal: 5,
          marginBottom: 10,
          borderRadius: 5,
        },
        {
          key: "someId1",
          width: 175,
          height: 150,
          marginHorizontal: 5,
          marginBottom: 10,
          borderRadius: 5,
        },
        {
          key: "someOtherId1",
          width: 175,
          height: 150,
          marginHorizontal: 5,
          marginBottom: 10,
          borderRadius: 5,
        },
        {
          key: "someId2",
          width: 175,
          height: 150,
          marginHorizontal: 5,
          marginBottom: 10,
          borderRadius: 5,
        },
        {
          key: "someOtherId2",
          width: 175,
          height: 150,
          marginHorizontal: 5,
          marginBottom: 10,
          borderRadius: 5,
        },
        {
          key: "someId43",
          width: 175,
          height: 150,
          marginHorizontal: 5,
          marginBottom: 10,
          borderRadius: 5,
        },
        {
          key: "someOtherId44",
          width: 175,
          height: 150,
          marginHorizontal: 5,
          marginBottom: 10,
          borderRadius: 5,
        },
        {
          key: "someId36",
          width: 175,
          height: 150,
          marginHorizontal: 5,
          marginBottom: 10,
          borderRadius: 5,
        },
        {
          key: "someOtherId04",
          width: 175,
          height: 150,
          marginHorizontal: 5,
          marginBottom: 10,
          borderRadius: 5,
        },
      ]}
    ></SkeletonContent>
  );
};

export default ListLoader;

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
