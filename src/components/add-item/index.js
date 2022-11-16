import { styles } from "./styles";
import { View, TextInput, Button } from "react-native";

const AddItem = ({ task, onHandleChange, onHandleTask }) => {
  return (
    <View style={styles.inputcontainer}>
      <TextInput
        style={styles.input}
        placeholder="tarea"
        value={!task}
        onChangeText={onHandleChange}
      />
      <Button
        title="Add"
        disabled={!task}
        color="#4E6151"
        onPress={onHandleTask}
      />
    </View>
  );
};

export default AddItem;
