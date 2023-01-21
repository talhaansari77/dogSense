import React from 'react';
import CustomHeader from './CustomHeader';
import DrawerButton from './DrawerButton';
import CustomSearch from './CustomSearch';
import ProfilePic from './ProfilePic';
import {View} from 'react-native';
import {colors} from '../utils/Colors';
import { useSelector } from 'react-redux';

const TriHeader = ({
  onPressMenu,
  onChangeSearch,
  onPressIn,
  onPressProfile,backgroundColor
}) => {
  // const {darkMode}=useSelector((state)=>state.authReducer.settings)
  // const colorMode=darkMode?colors.darkMode:colors.grey;
  // const colorMode2=darkMode?colors.darkMode2:colors.grey;
  // const textColor=darkMode?colors.grey3:colors.black;
  return (
    <CustomHeader
      LeftSide={() => (
        <DrawerButton
          size={35}
          onPress={onPressMenu}
          backgroundColor={backgroundColor}
          iconColor={colors.grey3}
        />
      )}
      Center={() => (
        <CustomSearch
          height={50}
          width={'70%'}
          onPressIn={onPressIn}
          onChangeText={onChangeSearch}
          backgroundColor={backgroundColor}
          placeholderTextColor={colors.grey3}
          iconColor={colors.grey3}
        />
      )}
      RightSide={() => (
        <ProfilePic size={30} borderWidth={0} onPressProfile={onPressProfile} />
      )}
    />
  );
};

export default TriHeader;
