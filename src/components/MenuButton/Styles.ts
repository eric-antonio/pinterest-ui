import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
    container:{
        alignItems:'center',
    },
    text:{ 
        fontSize:18,
        marginTop:10,
        color:theme.colors.white,
    },
    icon:{
        padding:24,
        borderRadius:22,
        backgroundColor:theme.colors.gray[700],
    }
});