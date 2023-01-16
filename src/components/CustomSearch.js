import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import {verticalScale} from 'react-native-size-matters';
import {colors} from '../utils/Colors';
import CustomTextInput from './CustomTextInput';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CustomSearch = props => {
  return (
    <View
      style={{
        width:  props.width||'95%',
        height: props.height||verticalScale(45),
        backgroundColor: colors.grey,
        borderRadius: 30,
        alignSelf: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignSelf: 'center',
          width: '90%',
        }}>
        <AntDesign name={'search1'} size={24} color={colors.grey1} />
        <TextInput
          style={[
            {
              width: props.inputWidth || '90%',
              height: props.inputHeight || '100%',
              marginLeft: props.inputLeftMargin || 10,
              paddingRight: props.paddingRight || 10,
              paddingHorizontal: props.paddingHorizontal,
              fontFamily: props.fontFamily || 'Montserrat-regular',
              color: props.color || colors.grey1,
              fontSize: verticalScale(11),
              // textAlign: props.textAlign || "center",
              multiline: props.multiline,
              // alignSelf: props.alignItems || "center"
              //   backgroundColor: 'red',
            },
          ]}
          onChangeText={props.onChangeText}
          value={props.value}
          numberOfLines={props.numberOfLines}
          keyboardType={props.keyboardType}
          autoCapitalize="none"
          multiline={props.multiline}
          placeholder={props.placeholder || 'Search Your Pet'}
          placeholderTextColor={props.placeholderTextColor}
          secureTextEntry={props.secureTextEntry}
        />
      </View>
    </View>
  );
};

export default CustomSearch;
