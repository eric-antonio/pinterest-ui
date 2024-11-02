import { Pressable, PressableProps, Text } from "react-native";

const Filter = ({ selected, filter, ...rest }: PressableProps & FilterProps) => {
  return (
    <Pressable {...rest}>
      <Text>
        {filter}
      </Text>
    </Pressable>
  );
};

export default Filter;
