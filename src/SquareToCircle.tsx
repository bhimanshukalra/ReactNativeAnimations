import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

function SquareToCircle(): React.JSX.Element {
  const progress = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(progress, {toValue: 1, useNativeDriver: true}),
          Animated.timing(progress, {toValue: 0.5, useNativeDriver: true}),
        ]),
        Animated.sequence([
          Animated.timing(scale, {toValue: 2, useNativeDriver: true}),
          Animated.timing(scale, {toValue: 1, useNativeDriver: true}),
        ]),
      ]),
    ).start();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Animated.View
        style={[
          styles.square,
          {
            opacity: progress,
            transform: [
              {scale},
              {
                rotate: progress.interpolate({
                  inputRange: [0.5, 1],
                  outputRange: ['0deg', 90 + 45 + 'deg'],
                }),
              },
            ],
            borderRadius: Animated.multiply(progress, sideLength / 2),
          },
        ]}
      />
    </View>
  );
}

const sideLength = 100;

const styles = StyleSheet.create({
  square: {
    height: sideLength,
    width: sideLength,
    backgroundColor: 'rgba(0, 0, 255, 0.5)',
  },
});

export default SquareToCircle;
