import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TaskItem = ({ task, onToggle, onDelete }) => (
  <View style={styles.taskContainer}>
    <TouchableOpacity onPress={() => onToggle(task.id)}>
      <Text style={[styles.taskText, task.completed && styles.completedText]}>
        {task.text}
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => onDelete(task.id)}>
      <Text style={styles.deleteText}>X</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  taskText: {
    fontSize: 18,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  deleteText: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default TaskItem;
