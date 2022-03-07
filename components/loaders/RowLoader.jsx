import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SkeletonContent from "react-native-skeleton-content";
import {pOrange} from "../../constants";

const RowLoader = () => {
  return (
    <SkeletonContent
      containerStyle={styles.container}
      duration={1000}
      isLoading={true}
      boneColor="#cccccc"
      highlightColor="#dbdbdb"
      animationType="pulse"
      View={[
        {
          key: "someId",
          width: 180,
          height: 180 ,
          marginRight: 10,
          borderRadius : 6
        },
        {
          key: "someOtherId",
          width: 180,
          height: 180 ,
          borderRadius : 6
        },
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
});
