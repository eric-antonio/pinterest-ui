
import Filters from "@/components/Filters";
import Posts from "@/components/Posts";
import { theme } from "@/theme";
import { FILTERS } from "@/utils/filters";
import { POSTS } from "@/utils/posts";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [filter, setFilter] = useState(FILTERS[0]);
  return (
    <SafeAreaView style={styles.container}>
      <Filters filters={FILTERS} filter={filter} onChange={setFilter} />
      <Posts posts={POSTS}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 22,
    backgroundColor: theme.colors.black,
  },
  text: {
    fontSize: 22,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
  },
});
