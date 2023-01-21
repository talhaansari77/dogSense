import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/Colors';
import {Spacer} from '../../../components/Spacer';
import CustomText from '../../../components/CustomText';

const Logout = () => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
      }}>
      {/* <Spacer height={50} /> */}
      <View
        style={{
          width: '94%',
          height: 300,
          backgroundColor: colors.white,
          alignSelf: 'center',
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.43,
          shadowRadius: 9.51,

          elevation: 15,
        }}>
        <View style={{width: '100%', height: 40, backgroundColor: colors.grey}}>
          <CustomText
            label="Logout"
            fontSize={15}
            alignSelf={'center'}
            justifyContent="center"
          />
        </View>
      </View>
    </View>
  );
};

export default Logout;
