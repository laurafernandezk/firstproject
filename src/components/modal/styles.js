import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    selectedTask:{
      fontSize: 14,
      fontWeight:"bold"
    },
    modalButton:{
      flexDirection:"row",
      justifyContent:"space-between",
      width:"60%"
    }
  })
  