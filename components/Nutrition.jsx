import {Text} from "@ui-kitten/components";
import React from "react";
import {View, TouchableOpacity, FlatList} from "react-native";
import * as Progress from "react-native-progress";

const RenderItem = ({ item }) => {
  return (
    <View
      style={{
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: 6,
        }}
      >
        <Text category={"s1"} style={{}}>
          {item.label}
        </Text>
        <Text category={"s1"} style={{}}>
          {(item.quantity * 100).toFixed(2)} %
        </Text>
      </View>

      <Progress.Bar
        progress={item.quantity}
        borderWidth={0}
        height={7}
        width={350}
        animated={false}
        borderRadius={6}
        unfilledColor={"#e0e0e0"}
        color="#FE724C"
      />
    </View>
  );
};

const Nutrition = ({filteredNuts, remCal}) => {
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          category={"h3"}
          style={{ fontWeight: "200", paddingVertical: 15 }}
        >
          Nutrition Info
        </Text>
        <TouchableOpacity onPress={() => setCollapse((prev) => !prev)}>
          <Text>View info</Text>
        </TouchableOpacity>
      </View>
        <View
          style={{
            backgroundColor: "white",
            padding: 10,
            borderRadius: 15,
            elevation: 10,
            paddingHorizontal: 15,
            paddingBottom: 20,
          }}
        >
          <FlatList
            style={{ backgroundColor: "white" }}
            data={filteredNuts}
            renderItem={({ item }) => <RenderItem item={item} />}
            keyExtractor={(item) => item.uri}
          />
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 10,
              paddingBottom: 6,
            }}
          >
            <Text category={"s1"} style={{}}>
              Others
            </Text>
            <Text category={"s1"} style={{}}>
              {(remCal * 100).toFixed(2)} %
            </Text>
          </View>

          <Progress.Bar
            progress={remCal}
            borderWidth={0}
            height={7}
            width={325}
            animated={false}
            borderRadius={6}
            unfilledColor={"#e0e0e0"}
            color="#FE724C"
          />
        </View>
    </View>
  );
};

export default Nutrition;
