import {View, Text} from 'react-native';
import React from 'react';
import CustomHeader from '../../../components/CustomHeader';
import {Spacer} from '../../../components/Spacer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';

const UpdateAccount = () => {
  return (
    <View>
      <View style={{width: '100%', height: 250, backgroundColor: colors.black,  position: 'relative',
    top: 0,
    left: 0, }}>
       
      </View>
      <Spacer height={45} />
        <View style={{paddingHorizontal: 15, position:"absolute"}}>
          <CustomHeader
            LeftSide={() => <AntDesign name="arrowleft" size={24} />}
            Center={() => <CustomText label="Update Account" fontSize={16} />}
          />
        </View>
    </View>
  );
};

export default UpdateAccount;
