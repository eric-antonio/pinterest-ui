import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
    },
    title:{
        fontSize:18,
        paddingTop:10,
        color:colors.white,
        fontFamily:fontFamily.bold,
    },
    image:{
   
        borderRadius:22,
    },
    footer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:10,
    },
});