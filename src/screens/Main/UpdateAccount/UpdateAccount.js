import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import CustomHeader from '../../../components/CustomHeader';
import {Spacer} from '../../../components/Spacer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import {icons} from '../../../assets/icons';
import ProfilePic from '../../../components/ProfilePic';
import CustomTextInput from '../../../components/CustomTextInput';
import InputField from '../../../components/InputField';
import {images} from '../../../assets/images';
import {verticalScale} from 'react-native-size-matters';
import CustomButton from '../../../components/CustomButton';

const {height, width} = Dimensions.get('window');

const UpdateAccount = () => {
  const loginInputData = [
    {id: 1, placeholder: 'Name', leftIcon: images.user, borderWidth: 0.7},

    {id: 2, placeholder: 'Email', leftIcon: images.email, borderWidth: 0.7},
    {
      id: 3,
      placeholder: 'Phone Number',
      leftIcon: images.phone,
      borderWidth: 0.7,
    },

    {
      id: 4,
      placeholder: 'Password',
      leftIcon: images.lock,
      borderWidth: 0.7,
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
    
      <View
        style={{
          width: '100%',
          height: 300,
          backgroundColor: colors.black,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          shadowColor: '#000',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 6,
        }}
      />

      <View
        style={{
          position: 'absolute',
          zIndex: 100,
          paddingHorizontal: 20,
          width: '100%',
        }}>
        <Spacer height={Platform.OS === 'ios' ? 40 : 3} />
        <CustomHeader
          LeftSide={() => (
            <AntDesign name="arrowleft" size={24} color={colors.white} />
          )}
          Center={() => (
            <CustomText
              label="Update Account"
              fontSize={16}
              color={colors.white}
            />
          )}
        />
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // marginTop: 140,
          top: height / 4,
          // Bottom:120,
          // backgroundColor: 'red',
          alignSelf: 'center',
          position: 'absolute',
          // width:380
        }}>
        <ProfilePic editable />
      </View>
      <Spacer height={90} />
      {loginInputData.map((item, index) => (
        <View style={{paddingHorizontal: 20}}>
          <InputField
            key={index}
            placeholder={item.placeholder}
            leftIcon={item.leftIcon}
          />
          <Spacer height={10} />
        </View>
      ))}
      <Spacer height={50} />

      <CustomButton title={'update Profile'} />
    </View>
  );
};

export default UpdateAccount;
