import { Pressable, PressableProps, Text } from "react-native";
import { styles } from "./Styles";

const Filter = ({
  selected,
  filter,
  ...rest
}: PressableProps & FilterProps) => {
  return (
    <Pressable
      {...rest}
      style={[styles.pressable, selected && styles.pressableSlected]}
    >
      <Text style={styles.text}>{filter}</Text>
    </Pressable>
  );
};

export default Filter;
