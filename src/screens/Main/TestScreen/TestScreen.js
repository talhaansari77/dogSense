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
import CustomSearch from '../../../components/CustomSearch';
import TriHeader from '../../../components/TriHeader';

const TestScreen = () => {
  return (
    <View
      style={{flex: 1, paddingHorizontal: 10, backgroundColor: colors.black}}>
      <Spacer height={40} />
      {/* <CustomHeader
        LeftSide={() => <DrawerButton size={30} />}
        Center={()=><CustomSearch height={50} width={"70%"}/>}
        RightSide={() => <ProfilePic size={30} borderWidth={0} />}
      /> */}
      <TriHeader/>
    </View>
  );
};

export default TestScreen;
