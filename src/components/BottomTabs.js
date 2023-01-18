import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../utils/Colors';
import CustomText from './CustomText';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Spacer} from './Spacer';
import {icons} from '../assets/icons';

export default function BottomTabs({navigation}) {
  const [selected, setSelected] = useState(false);
  const [indexMain, setIndexMain] = useState(-1);
  const Tabs = [
    {
      name: icons.bear,
      color: colors.primary,
      size: 25,
      screen: 'SignOutScreen',
      label: 'Current Mood',
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
      label: 'Tips',
      onPress: i => {
        // navigation.navigate('props.screen');
        setIndexMain(i);
      },
    },
    {
      name: icons.user,
      color: colors.primary,
      size: 25,
      screen: 'Profile',
      label: 'Profile',
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
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          //   backgroundColor: 'red',
        }}>
        <View
          style={{
            width: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopWidth: 2,
            borderTopColor: index === indexMain ? colors.primary : colors.white,
          }}>
          <Spacer height={10} />
          <Image
            source={props.name}
            resizeMode={'contain'}
            style={{
              height: props.size,
              width: props.size,
              tintColor: index === indexMain ? colors.primary : colors.grey3,
            }}
          />
        </View>
        <Spacer height={5} />
        <CustomText
          label={props.label}
          color={index === indexMain ? colors.primary : colors.grey3}
          fontSize={8}
        />
      </View>
      {/* <FontAwesome5
        style={{marginBottom: 3, alignSelf: 'center'}}
        name={props.name}
        size={props.size}
        color={props.color}
      /> */}
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        flexDirection: 'row',
        // margin: 10,
        // marginHorizontal: 30,
        // justifyContent: 'space-between',
        backgroundColor: colors.white,
        width: '100%',
        paddingBottom: verticalScale(15),
        paddingHorizontal: scale(20),
        zIndex: 10,
        // position: 'absolute',
        // bottom: 0,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
      {Tabs.map((item, i) => (
        <Tab
          name={item.name}
          color={item.color}
          size={item.size}
          screen={item.screen}
          label={item.label}
          onPress={() => item.onPress(i)}
          index={i}
        />
      ))}
      {/* <Tab
        name="plus"
        color={colors.primary}
        size={25}
        screen={'AddDesignScreen'}
        // navigation={navigation}
        onPress={() => navigation.navigate('props.screen')}
      />
      <Tab
        name="user-alt"
        color={colors.primary}
        size={25}
        screen={'SignOutScreen'}
        onPress={() => navigation.navigate('props.screen')}
      /> */}
      {/* <Tab name="receipt" color={'#000'} size={25} text={'Order'} />
      <Tab name="user" color={'#000'} size={25} text={'Account'} /> */}
    </View>
  );
}
