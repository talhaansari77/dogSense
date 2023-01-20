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
  iconWidth,
  iconHeight
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <View>
      <CustomTextInput
        onPressIn={() => setFocused(true)}
        onChangeText={onChangeText}
        height={height}
        width={width}
        iconWidth={iconWidth}
        iconHeight={iconHeight}
        value={value}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        leftIcon={leftIcon}
        borderColor={focused ? colors.primary : colors.grey2}
        iconBorderColor={focused ? colors.primary : colors.grey2}
        placeholderTextColor={colors.grey2}
        tintColor={focused ? colors.primary : colors.grey2}
        borderWidth={1}
        color={colors.black}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({});
