import { theme } from "@/theme";
import { Text, View, StyleSheet, Image } from "react-native";
export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={{ uri: "https://github.com/eric-antonio.png" }}
          style={{ width: 64, height: 64 }}
        />
        <Text style={styles.text}>eric-antonio</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.black,
  },
  text: {
    fontSize: 22,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
  },
  image: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
