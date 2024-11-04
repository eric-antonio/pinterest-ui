import React, { useEffect, useState } from "react";
import { styles } from "./Styles";
import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/theme/colors";

type Props = {
  post: PostProps;
};

const Post = ({ post }: Props) => {
  const [aspectRatio, setAspectRatio] = useState(1);
  useEffect(() => {
    Image.getSize(post.image, (width, height) => {
      setAspectRatio(width / height);
    });
  },[]);
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: post.image }}
        style={[styles.image, { aspectRatio }]}
      />
      <View style={styles.footer}>
        <Text style={styles.title}>{post.title}</Text>
        <Feather name="more-horizontal" size={24} color={colors.white} />
      </View>
    </View>
  );
};

export default Post;
