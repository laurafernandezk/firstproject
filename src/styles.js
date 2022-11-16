import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#CDC9B7",
    },
    messageContainer:{
      alignItems: "center",
      marginTop: 20
    },
    modalContainer:{
      justifyContent:"center",
      alignItems:"center",
      marginTop:70,
      marginHorizontal:20,
      
      padding: 20,
      backgroundColor:"white",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
  
      elevation: 7,
    },
    modalTitle:{
      marginBottom:10,
      fontSize: 18,
      fontWeight:"bold"
    },
    modalDetailContainer:{
      paddingVertical: 20,
    },
    modalDetailText:{
      fontSize: 14,
  
    },
    modalButton:{
      flexDirection:"row",
      justifyContent:"space-between",
      width:"60%"
    }
  })