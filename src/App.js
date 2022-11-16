import { Text, View, Button } from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import { AddItem, TaskItem, List, ModalView } from "./components/index";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const [selectedTask, setSelectedTask] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [taskComplete, setTaskComplete] = useState([]);

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
    <TaskItem
      item={item}
      onHandleComplete={onHandleComplete}
      onHandleSelected={onHandleSelected}
      taskComplete={taskComplete}
    />
  );

  const onHandleSelected = (item) => {
    setModalVisible(!modalVisible);
    setSelectedTask(item);
  };

  const onHandleChange = (text) => setTask(text);

  const onHandleComplete = (item) => {
    setTaskComplete((prevCompleteTask) => [
      ...prevCompleteTask,
      { id: item.id },
    ]);
  };

  const onHandleCancel = () => {
    setModalVisible(!modalVisible);
  };

  const onHandleDetele = () => {
    setTaskList((prevTaskList) =>
      prevTaskList.filter((item) => item.id === selectedTask.id)
    );
    setModalVisible(!modalVisible);
  };

  const onHandleDeteleAll = () => {
    setTaskList([]);
  };

  return (
    <View style={styles.container}>
      <AddItem
        onHandleChange={onHandleChange}
        onHandleTask={onHandleTask}
        task={task}
      />
      <View>
        {taskList.length < 1 ? (
          <View style={styles.messageContainer}>
            <Text>There are no task to show</Text>
          </View>
        ) : (
          <>
            <List renderItem={renderItem} taskList={taskList} />
            <Button
              title="Delete All"
              color="#4E6151"
              onPress={onHandleDeteleAll}
            />
          </>
        )}
      </View>
      <ModalView
        modalVisible={modalVisible}
        onHandleCancel={onHandleCancel}
        onHandleDetele={onHandleDetele}
        selectedTask={selectedTask}
      />
    </View>
  );
}
