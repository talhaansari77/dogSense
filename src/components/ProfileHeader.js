import {StyleSheet, Text, View, Dimensions, Platform,Image} from 'react-native';
import React from 'react';
import ProfilePic from './ProfilePic';
import CustomHeader from './CustomHeader';
import CustomText from './CustomText';
import {colors} from '../utils/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Spacer} from './Spacer';
import { moderateScale } from 'react-native-size-matters';
import commonStyles from '../utils/CommonStyles';
import { images } from '../assets/images';

const {width, height} = Dimensions.get('window');

const ProfileHeader = ({centerText}) => {
  return (
    <>
      <View
        style={{
          width: '100%',
          height:height/3,
          backgroundColor: colors.grayLight,
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
      >
      <Image 
      blurRadius={2}
      style={commonStyles.img} source={images.profilePic}/>

      <View
        style={{
          position: 'absolute',
          zIndex: 100,
          paddingHorizontal: 20,
          width: '100%',
        }}>
        <Spacer height={Platform.OS === 'ios' ? 60 : 10} />
        <CustomHeader
        //   LeftSide={() => (
        //     <AntDesign name="arrowleft" size={moderateScale(25)} color={colors.white} />
        //   )}
          Center={() => (
            <CustomText
              label={centerText}
              fontSize={16}
              color={colors.white}
            />
          )}
          RightSide={() => (
            <AntDesign name="setting" size={moderateScale(25)} color={colors.white} />
          )}
        />
         <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // marginTop: 140,
          bottom:0,
          top:220,
          // Bottom:120,
          // backgroundColor: 'red',
          alignSelf: 'center',
          position: 'absolute',
          // width:380
        }}>
        <ProfilePic  />
      </View>
      </View>
      </View>
     
    </>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({});
