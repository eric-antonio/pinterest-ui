import { View, Text } from "react-native";
import { ForwardedRef, forwardRef } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./Styles";
import MenuButton from "../MenuButton";

const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={[0.01, "30%"]}
      handleComponent={() => null}
      backgroundStyle={styles.container}
    >
      <BottomSheetView style={styles.content}>
        <View style={styles.header}>
          <FontAwesome
            name="close"
            size={24}
            onPress={onClose}
            style={styles.close}
          />
          <Text style={styles.title}>Comece a criar agora</Text>
        </View>
        <View style={styles.options}>
          <MenuButton title="Pin" icon="home" />
          <MenuButton title="Colagem" icon="copy" />
          <MenuButton title="Pasta" icon="folder" />
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
});

export default Menu;
