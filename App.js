import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Modal,
  TouchableOpacity
} from "react-native";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const [selectedTask, setSelectedTask]=useState(null);
  const [modalVisible, setModalVisible]= useState(false);
  const [taskComplete, setTaskComplete]= useState([])
  
  const onHandleTask = () => {
    setTaskList((prevTaskList) => [
      ...prevTaskList,
      {
        id: Math.trunc(Math.random() * 100000).toString(),
        value: task,
        background: getRandomBackgroundColor(),
      },
    ]);
    setTask("");
  };
  const getRandomBackgroundColor = () => {
    const colors = [
      "#94E8B4",
      "#68A582",
      "#639972",
      "#5E8C61",
      "#567759",
      "#4E6151",
      "#83D3AC",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const renderItem = ({ item }) => (
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
  );

  const onHandleSelected=(item)=>{
    setModalVisible(!modalVisible)
    setSelectedTask(item)
  }

  const onHandleComplete=(item)=>{
    setTaskComplete(prevCompleteTask=>[
      ...prevCompleteTask,
    {id:item.id}])
  }
   
  const onHandleCancel=()=>{
    setModalVisible(!modalVisible)

  }

  const onHandleDetele =()=>{
    setTaskList(prevTaskList=> prevTaskList.filter(item=>item.id ===selectedTask.id))
    setModalVisible(!modalVisible)

  }

  const onHandleDeteleAll =()=>{
    setTaskList([])
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.input}
          placeholder="tarea"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <Button
          title="Add"
          disabled={!task}
          color="#4E6151"
          onPress={onHandleTask}
        />
      </View>
      <View>
        {taskList.length < 1 ? (
          <View style={styles.messageContainer}>
            <Text>There are no task to show</Text>
          </View>
        ) : (
          <>
          <FlatList
            data={taskList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <Button title="Delete All" color="#4E6151" onPress={onHandleDeteleAll}/>
          </>
        )}
      </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CDC9B7",
  },
  inputcontainer: {
    marginHorizontal: 20,
    marginTop: 100,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#4E6151",
    paddingTop: 10,
    width: "80%",
  },
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
  messageContainer:{
    alignItems: "center",
    marginTop: 20



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
  selectedTask:{
    fontSize: 14,
    fontWeight:"bold"
  },
  modalButton:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:"60%"
  }
});
