import { FILTERS } from "@/utils/filters";
import { FlatList } from "react-native-gesture-handler";
import { styles } from "./Styles";
import Filter from "../Filter";

const Filters = ({ filter, filters, onChange }: FiltersProps) => {
  return (
    <FlatList
      data={filters}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Filter
          filter={item}
          selected={item === filter}
          onPress={() => onChange(item)}
        />
      )}
      horizontal
      style={styles.list}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    />
  );
};

export default Filters;
