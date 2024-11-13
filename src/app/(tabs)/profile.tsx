import { theme } from "@/theme";
import { Text, View, StyleSheet, Image } from "react-native";
export default function Profile() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Profile</Text>
        <Image
          source={{ uri: "https://github.com/eric-antonio.png" }}
          style={{ width: 64, height: 64 }}
        />
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
});
