import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { StatusBar } from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {StyleSheet} from "react-native";
import Home from "./screens/Home";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        hidden={false}
      />
      <NavigationContainer theme={{dark : true}} >
        <Layout style = {styles.container}>
          <Home />
       </Layout>
      </NavigationContainer>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1
  }
})