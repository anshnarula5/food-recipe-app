import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Home from "./screens/Home/Home";
import HomeStack from "./screens/Home/HomeStack";
import { Provider } from "react-redux";
import store from "./store";
import Tabs from "./navigation/Tabs";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={"white"}
      />
      <NavigationContainer
        
        theme={{ dark: true, colors: { background: "white" } }}
      >
        <ApplicationProvider {...eva} theme={eva.light}>
          <Layout style={styles.container}>
            <Tabs />
          </Layout>
        </ApplicationProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
  },
});
