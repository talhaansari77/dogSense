import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from './CustomTextInput';
import {colors} from '../utils/Colors';
import {icons} from '../assets/icons';
import {images} from '../assets/images';
import { Spacer } from './Spacer';

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
  iconHeight,
  data
}) => { 
  const [focused, setFocused] = useState(false);

  // key={index}
  // placeholder={item.placeholder}
  // leftIcon={item.leftIcon}
  return (
  data.map((item, index) => ( 
    <View>
      <CustomTextInput
        onPressIn={() => setFocused(index)}
        onPress={() => setFocused(index)}
        onChangeText={onChangeText}
        height={height}
        width={width}
        iconWidth={iconWidth}
        iconHeight={iconHeight}
        value={value}
        keyboardType={keyboardType}
        placeholder={item.placeholder}
        secureTextEntry={secureTextEntry}
        leftIcon={item.leftIcon}
        borderColor={focused ===index? colors.primary : colors.grey}
        iconBorderColor={focused===index ? colors.primary : colors.grey}
        placeholderTextColor={colors.grey3}
        tintColor={focused===index ? colors.primary : colors.grey}
        borderWidth={1}
        color={colors.black}
      />
       
          <Spacer height={10} />
    </View>
    ))
  );
};

export default InputField;

const styles = StyleSheet.create({});
