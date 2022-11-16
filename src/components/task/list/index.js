import { FlatList } from "react-native";

const List =({taskList, renderItem})=>{
    return(
        <FlatList
            data={taskList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
    )
}

export default List