import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";
import Task from "./components/Task";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const deleteTodo = (index) => {
    const newTodos = [...todos];

    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const addTodo = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
    console.log(todos);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>To-Do List</Text>
      </View>

      {/* Task List */}
      <ScrollView style={styles.tasks}>
        {todos.map((text, index) => (
          <Task key={index} text={text} onDelete={() => deleteTodo(index)} />
        ))}

        {/* Task Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add a task..."
            value={todo}
            onChangeText={(text) => setTodo(text)}
          />
        </View>

        <FontAwesome5
          name="plus"
          size={24}
          color="green"
          onPress={addTodo}
          style={styles.button}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    marginTop: 20,
    marginBottomJ: 20,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: "bold",
  },
  button: {
    borderRadius: 90,
    backgroundColor: "purple",
    padding: 10,
    color: "white",
    margin: "auto",
  },
  inputContainer: {
    // justifyContent: 'center',
    alignItems: 'center'
  }
});
