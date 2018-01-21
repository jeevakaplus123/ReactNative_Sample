import React from 'react';
import { View } from 'react-native';

const Card = (props) => (
      <View style={[styles.containerStyle, props.style]} >
        {props.children}
      </View>
  );

const styles = {
  containerStyle: {
    elevation: 1
  }
};

export { Card };
