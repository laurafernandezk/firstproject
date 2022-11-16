import {Text, View, Button, Modal } from "react-native";
import {styles} from "./styles"

const ModalView=({modalVisible, selectedTask, onHandleCancel, onHandleDetele})=>{
    return(

    <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedTask?.value}</Text>
        <View style={styles.modalDetailContainer}>
          <Text style={styles.modalDetailText}>Are you sure to delete this task?</Text>
        </View>
        <View style={styles.modalButton}>
          <Button title="Cancel" color="#4E6151" onPress={onHandleCancel}/>
          <Button title="Delete" color="#4E6151" onPress={onHandleDetele}/>
        </View>
        </View>
    </Modal>
    )
}

export default ModalView