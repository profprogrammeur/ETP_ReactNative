import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:0,
    paddingTop:0
   
  },
  buttonStyle:{
    borderRadius:10,
    fontWeight:'bold',
    textTransform:'lowercase'
  },
  login:{
    alignItems: 'center',
    paddingTop:80
  }
});