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

const AddDog = () => {
  const loginInputData = [
    {id: 1, placeholder: 'Name', leftIcon: icons.dogIcon, borderWidth: 0.7},

    {id: 2, placeholder: 'Breed', leftIcon: icons.dogBreed, borderWidth: 0.7},
    {
      id: 3,
      placeholder: 'Age',
      leftIcon: icons.dogAge,
      borderWidth: 0.7,
    },

    {
      id: 4,
      placeholder: 'Date Of Birth',
      leftIcon: icons.birth,
      borderWidth: 0.7,
    },
    {
      id: 5,
      placeholder: 'Gender',
      leftIcon: icons.gender,
      borderWidth: 0.7,
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <Image
        source={images.planDog}
        resizeMode={'cover'}
        blurRadius={5}
        style={{
          width: '100%',
          height: 250,
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
            <CustomText label="Add Dog" fontSize={16} color={colors.white} />
          )}
        />
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          top: height / 5,
          alignSelf: 'center',
          position: 'absolute',
        }}>
        <ProfilePic image={images.planDog} editable />
      </View>
      <Spacer height={90} />
      {/* {loginInputData.map((item, index) => ( */}
        <View style={{paddingHorizontal: 20}}>
          <InputField
            // key={index}
            // placeholder={item.placeholder}
            // leftIcon={item.leftIcon}
            height={60}
            data={loginInputData}
          />
          <Spacer height={15} />
        </View>
      {/* ))} */}
      <Spacer height={40} />

      <CustomButton title={'update Profile'} />
    </View>
  );
};

export default AddDog;
