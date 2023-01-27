import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface DateHeadProps {
  date: Date;
}

function DateHead({date}: DateHeadProps) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formatted = `${year}년 ${month}월 ${day}일`;
  const {top} = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.statusBarPlaceholder, {height: top}]} />
      <StatusBar backgroundColor={'#26a69a'} barStyle="light-content" />
      <View style={styles.Block}>
        <Text style={styles.dataText}>{formatted}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: '#26a69a',
  },
  Block: {
    backgroundColor: '#26a69a',
    padding: 16,
  },
  dataText: {
    fontSize: 24,
    color: 'white',
  },
});

export default DateHead;
