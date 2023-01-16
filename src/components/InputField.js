import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from './CustomTextInput';
import {colors} from '../utils/Colors';
import {icons} from '../assets/icons';
import {images} from '../assets/images';

const InputField = ({
  placeholder = 'placeholder',
  onChangeText,
  value,
  keyboardType,
  secureTextEntry,
  leftIcon = icons.facebook,
  height,
  width,
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <View>
      <CustomTextInput
        onPressIn={() => setFocused(true)}
        onChangeText={onChangeText}
        height={height}
        width={width}
        value={value}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        leftIcon={leftIcon}
        borderColor={focused ? colors.primary : colors.grey}
        iconBorderColor={focused ? colors.primary : colors.grey}
        placeholderTextColor={colors.grey}
        tintColor={focused ? colors.primary : colors.grey}
        borderWidth={1}
        color={colors.black}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({});
