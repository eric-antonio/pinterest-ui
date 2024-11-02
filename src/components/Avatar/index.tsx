import { Image, ImageProps } from "react-native";
import { styles } from "./Styles";

const Avatar = ({ selected, ...rest }: AvatarProps & ImageProps) => {
  return (
    <Image style={[styles.image, selected && styles.selected]} {...rest} />
  );
};
export default Avatar;
