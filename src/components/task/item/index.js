import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

const TaskItem= ({item, onHandleSelected, onHandleComplete, taskComplete})=>{
    return(
        <View  style={styles.viewContainer}>
            <TouchableOpacity onPress={()=>onHandleSelected(item)}>
            <View style={[styles.textContainer, { backgroundColor: item.background }]}>
            <Text style={styles.text}> {item.value}</Text>
            </View>
            </TouchableOpacity> 
            <TouchableOpacity onPress={()=>onHandleComplete(item)}>
            <View style={[styles.iconContainer, { backgroundColor: item.background}]}>
            {taskComplete.find(element=>element.id ===item.id) ? <Text > ✔️</Text>:<Text style={styles.iconText}>DONE</Text>}
            </View>
            </TouchableOpacity> 
        </View>
    )
}
export default TaskItem;