import React from "react";
import { View, ScrollView } from "react-native";
import Post from "@/components/Post";
import { PostsProps } from "./posts";
import { styles } from "./Styles";

const Posts = ({ posts }: PostsProps) => {
  function postsByColumn(column: "right" | "left") {
    const rest = column === "left" ? 0 : 1;
    return posts
      .filter((_, index) => index % 2 === rest)
      .map((post) => <Post key={post.id} post={post} />);
  }
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.list}
    >
      <View style={styles.container}>
        <View style={styles.column}>{postsByColumn("left")}</View>
        <View style={styles.column}>{postsByColumn("right")}</View>
      </View>
    </ScrollView>
  );
};

export default Posts;
