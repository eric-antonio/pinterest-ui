import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
  container:{
    backgroundColor:theme.colors.gray[800]
  },
  content:{
    flex:1,
    padding:24,
    alignItems:'center'
  },
  header:{
    gap:10,
    flexDirection:'row',
  },
  close:{
    color:theme.colors.gray[600]
  },
  title:{
    flex:1,
    fontSize:18,
    marginRight:24,
    fontWeight:"400",
    textAlign:'center',
    color:theme.colors.white,
    fontFamily:theme.fontFamily.regular,
  }
})