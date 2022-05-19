import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { useState, useEffect } from "react";

export default function App() {
  const [image, setImage] = useState(" ");

  const getCat = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setImage(data[0].url);
        console.log("yes iam the image", image);
      });
  };

  useEffect(() => {
    getCat();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Button onPress={getCat} title="New Cat" color="#841584" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: "80%",
    height: "60%",
    marginBottom: 20,
  },
});
