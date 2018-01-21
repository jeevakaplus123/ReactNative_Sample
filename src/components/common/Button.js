import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { BASE_COLOR_DARK } from './Colors';

const Button = ({ onPress, children, buttonStyle, textStyle, ref }) => {
  const { containerStyle, titleStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={[containerStyle, buttonStyle]} key={ref}>
      <Text style={[titleStyle, textStyle]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  titleStyle: {
      alignSelf: 'center',
      color: '#007aff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 23,
      paddingBottom: 23
  },

  containerStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: BASE_COLOR_DARK,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5
  }
};

export { Button };
