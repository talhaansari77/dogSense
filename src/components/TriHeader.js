
import React from 'react';
import CustomHeader from './CustomHeader';
import DrawerButton from './DrawerButton';
import CustomSearch from './CustomSearch';
import ProfilePic from './ProfilePic';

const TriHeader = ({onPressMenu, onChangeSearch, onPressProfile}) => {
  return (
    <CustomHeader
      LeftSide={() => <DrawerButton size={30} onPress={onPressMenu} />}
      Center={() => (
        <CustomSearch height={50} width={'70%'} onChangeText={onChangeSearch} />
      )}
      RightSide={() => (
        <ProfilePic size={30} borderWidth={0} onPressEdit={onPressProfile} />
      )}
    />
  );
};

export default TriHeader;
