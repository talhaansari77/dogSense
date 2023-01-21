import React from 'react';
import CustomHeader from '../../../components/CustomHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Spacer} from '../../../components/Spacer';
import {Image, View} from 'react-native';
import CustomText from '../../../components/CustomText';
import {images} from '../../../assets/images';
import CustomButton from '../../../components/CustomButton';
import { colors } from '../../../utils/Colors';

const ReferFriend = ({navigation,route}) => {
  const {colorMode, colorMode2, textColor} = route.params;

  return (
    <View style={{backgroundColor:colorMode,flex:1}}>
      <Spacer height={45} />
      <View style={{paddingHorizontal: 15}}>
        <CustomHeader
          LeftSide={() => <AntDesign name="arrowleft" size={24} color={textColor}/>}
          Center={() => <CustomText label="Refer a Friend" fontSize={16} color={textColor} />}
        />
      </View>
      <View>
        <Spacer height={70} />
        <Image
          source={images.friend1}
          resizeMode="contain"
          style={{
            height: 200,
            width: 190,
            alignSelf: 'center',
            marginRight: 30,
          }}
        />
      </View>
      <Spacer height={70} />

      <CustomText label="Refer Your Friend" alignSelf="center" fontSize={22} color={textColor} />
      <Spacer height={10} />

      <View style={{paddingHorizontal: 20}}>
        <CustomText
          alignSelf="center"
          alignItems={'center'}
          textAlign='center'
          color={colors.grey1}
          label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ."
        />
      </View>
      <Spacer height={70} />
      
      <CustomButton title={"share Link"}  fontSize={15}/>
    </View>
  );
};

export default ReferFriend;
