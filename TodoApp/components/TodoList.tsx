import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Todos} from '../App';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todos[];
  onToggle: Function;
  onRemove: Function;
}

const TodoList = ({todos, onToggle, onRemove}: TodoListProps) => {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={styles.list}
      data={todos}
      renderItem={({item}) => (
        <TodoItem
          id={item.id}
          text={item.text}
          done={item.done}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  list: {
    flex: 1,
  },
});

export default TodoList;
