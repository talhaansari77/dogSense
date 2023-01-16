import {View, Text} from 'react-native';
import React from 'react';
import CustomTextInput from '../../../components/CustomTextInput';
import {colors} from '../../../utils/Colors';
import InputField from '../../../components/InputField';
import ProfilePic from '../../../components/ProfilePic';
import {icons} from '../../../assets/icons';
import DrawerButton from '../../../components/DrawerButton';
import CustomHeader from '../../../components/CustomHeader';
import {Spacer} from '../../../components/Spacer';

const TestScreen = () => {
  return (
    <View
      style={{flex: 1, paddingHorizontal: 50, backgroundColor: colors.black}}>
      {/* <InputField/> */}
      {/* <ProfilePic/> */}
      {/* <DrawerButton/> */}
      <Spacer height={40} />
      <CustomHeader
        LeftSide={() => <DrawerButton />}
        // Center={()=>}
        RightSide={() => <ProfilePic size={40} borderWidth={0} />}
      />
    </View>
  );
};

export default TestScreen;
