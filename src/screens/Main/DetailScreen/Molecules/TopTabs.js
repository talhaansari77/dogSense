import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../../../utils/Colors';
import CustomText from '../../../../components/CustomText';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Spacer} from '../../../../components/Spacer';
import {icons} from '../../../../assets/icons';

const {height, width} = Dimensions.get('window');

export default function TopTabs({navigation, setSelected}) {
  const [indexMain, setIndexMain] = useState(0);
  const Tabs = [
    {
      name: icons.bear,
      color: colors.primary,
      size: 25,
      screen: 'SignOutScreen',
      label: 'Overview',
      onPress: i => {
        // navigation.navigate('props.screen');
        setIndexMain(i);
      },
    },
    {
      name: icons.heartRate,
      color: colors.primary,
      size: 25,
      screen: 'SignOutScreen',
      label: 'Activity',
      onPress: i => {
        // navigation.navigate('props.screen');
        setIndexMain(i);
      },
    },
    {
      name: icons.bulb,
      color: colors.primary,
      size: 25,
      screen: 'SignOutScreen',
      label: 'Health',
      onPress: i => {
        // navigation.navigate('props.screen');
        setIndexMain(i);
      },
    },
  ];

  const Tab = ({onPress, index, ...props}) => (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: index === indexMain ? 1 : 0,
        borderColor: index === indexMain ? colors.primary : colors.grey3,
        borderRadius: 100,
        backgroundColor: index === indexMain ? colors.white : colors.grey,
        // padding:20
        height: height / 20,
      }}>
      <CustomText
        label={props.label}
        color={index === indexMain ? colors.primary : colors.grey3}
        fontSize={12}
      />
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        flexDirection: 'row',
        // margin: 10,
        // marginHorizontal: 30,
        // justifyContent: 'space-between',
        backgroundColor: colors.grey,
        width: '90%',
        // paddingBottom: verticalScale(15),
        // paddingHorizontal: scale(20),
        zIndex: 10,
        alignSelf: 'center',
        borderRadius: 100,
        // position: 'absolute',
        // bottom: 0,
      }}>
      {Tabs.map((item, i) => (
        <Tab
          name={item.name}
          color={item.color}
          size={item.size}
          screen={item.screen}
          label={item.label}
          onPress={() => {
            item.onPress(i);
            setSelected(i+1);
          }}
          index={i}
        />
      ))}
    </View>
  );
}
