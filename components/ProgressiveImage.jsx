import React from "react";
import { View, StyleSheet, Animated } from "react-native";

function ProgressiveImage({ defaultImageSource, source, style, ...props }) {
  const defaultImageAnimated = new Animated.Value(0);
  const imageAnimated = new Animated.Value(0);

  const handleDefaultImageLoad = () => {
    Animated.timing(defaultImageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        {...props}
        source={{
          uri: "https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png",
        }}
        style={[style, { opacity: defaultImageAnimated }]}
        onLoad={handleDefaultImageLoad}
        blurRadius={1}
      />
      <Animated.Image
        {...props}
        source={{uri : source}}
        style={[style, { opacity: imageAnimated }, styles.imageOverlay]}
        onLoad={handleImageLoad}
      />
    </View>
  );
}

export default ProgressiveImage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e1e4e8",
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
