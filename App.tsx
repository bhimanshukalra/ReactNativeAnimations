import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import SquareToCircle from './src/SquareToCircle';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.parent}>
      <SquareToCircle />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
