import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
    viewContainer:{
        flexDirection:"row",
        justifyContent: "space-around",
        
      },
      textContainer: {
        width:275,
        marginVertical: 5,
        marginHorizontal: 5,
        padding: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
    
        elevation: 7,
      },
      iconContainer:{
          textAlign: "center",
          width:50,
          marginVertical: 5,
          padding: 10,
          marginHorizontal:5,
          borderRadius: 5,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,
      
          elevation: 7,
        },
        iconText:{
          fontSize: "14px"
    
        },
      text: {
        color: "white",
      }
}
)