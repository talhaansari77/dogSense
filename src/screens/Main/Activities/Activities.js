import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Spacer} from '../../../components/Spacer';
import CustomHeader from '../../../components/CustomHeader';
import {Image} from 'react-native';
import {icons} from '../../../assets/icons';
import {colors} from '../../../utils/Colors';
import CustomText from '../../../components/CustomText';
import commonStyles, {PH20} from '../../../utils/CommonStyles';
import BottomTabs from '../../../components/BottomTabs';
import {Divider} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';
const {height, width} = Dimensions.get('window');

const Activities = ({route}) => {
  const navigation = useNavigation();
  const {colorMode, colorMode2, textColor,colorMode3} = route.params;
  console.log(colorMode2);
  return (
    <>
      <View style={{flex: 1, backgroundColor: colorMode}}>
        <Spacer height={Platform.OS === 'ios' ? 40 : 40} />
        <PH20>
          <CustomHeader
            LeftSide={() => (
              <Image
                source={icons.leftArrow}
                style={{...styles.leftArrow, tintColor: textColor}}
              />
            )}
            Center={() => (
              <CustomText
                label={'Activities'}
                color={textColor}
                fontSize={14}
              />
            )}
          />
        </PH20>
        <Spacer height={20} />
        <PH20>
          <CustomText label={'Notifications'} color={textColor} fontSize={16} />
        </PH20>
        <Spacer height={15} />
        <TouchableOpacity
          activeOpacity={0.6}
          style={{...styles.emergencyAlert, backgroundColor: colorMode3}}>
          <IconContainer
            icon={icons.bxError}
            color={colors.darkCyan}
            iconSize={40}
          />
          <Spacer width={12} />
          <Details
            label1={'Emergency Alert'}
            label2={'Mobile is not working, check out th..'}
            label3={'Tap to see  '}
            color1={textColor}
            color2={colors.grey3}
            color3={colors.primary}
            size2={10}
            size3={8}
            tapToSee
          />
        </TouchableOpacity>
        <Spacer height={20} />
        <PH20>
          <CustomText
            label={'Upcoming Needs'}
            color={textColor}
            fontSize={16}
          />
        </PH20>
        <Spacer height={15} />
        <View style={{...styles.activitiesList, backgroundColor: colorMode2}}>
          {activitiesList.map((item, index) => (
            <>
              <TouchableOpacity
                activeOpacity={0.6}
                style={commonStyles.rowSpaceBetween}>
                <View style={commonStyles.row}>
                  <IconContainer
                    icon={item.icon}
                    tintColor={item.iconColor}
                    iconSize={30}
                  />
                  <Spacer width={12} />
                  <Details
                    label1={item.label1}
                    label2={item.label2}
                    label3={item.label3}
                    color1={textColor}
                    color2={textColor}
                    color3={colors.grey3}
                    space={4}
                  />
                </View>
                <Image
                  source={icons.rightCarvan}
                  style={{height: 10, width: 10}}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
              {index !== 3 ? (
                <>
                  <Spacer height={15} />
                  <Divider width={1} color={colors.grey} />
                  <Spacer height={15} />
                </>
              ) : (
                <></>
              )}
            </>
          ))}
        </View>
      </View>
      <BottomTabs navigation={navigation} selected={1} colorMode={colorMode} />
    </>
  );
};

export default Activities;

const IconContainer = ({color = colors.grey, icon, iconSize, tintColor}) => (
  <View style={{...styles.iconContainer, backgroundColor: color}}>
    <Image
      source={icon}
      style={{tintColor: tintColor, height: iconSize, width: iconSize}}
      resizeMode={'contain'}
    />
  </View>
);
const Details = ({
  label1,
  label2,
  label3,
  size1 = 12,
  size2 = 9,
  size3 = 8,
  color1,
  color2,
  color3,
  space,
  tapToSee = false,
}) => (
  <View style={{justifyContent: 'space-between', paddingVertical: 5}}>
    <CustomText
      label={label1}
      color={color1}
      fontSize={size1}
      fontWeight={'bold'}
    />
    <CustomText label={label2} color={color2} fontSize={size2} />
    {space ? <Spacer height={space} /> : <></>}
    <View style={commonStyles.row}>
      <CustomText label={label3} color={color3} fontSize={size3} />
      {tapToSee ? (
        <Image
          source={icons.rightCarvan}
          style={{height: 10, width: 10}}
          resizeMode={'contain'}
        />
      ) : (
        <></>
      )}
    </View>
  </View>
);

const activitiesList = [
  {
    icon: icons.capsule,
    iconColor: colors.primary,
    label1: 'Medication',
    label2: '12:30 PM 13 Dec.',
    label3: 'Go to clinic and take care of your dog by a doct...',
  },
  {
    icon: icons.water,
    iconColor: colors.cyan,
    label1: 'Water',
    label2: '12:45 PM Today',
    label3: 'Drink your dog a water and...',
  },
  {
    icon: icons.bone,
    iconColor: colors.brown,
    label1: 'Eating',
    label2: '01:00 PM Today',
    label3: 'Drink your dog a water and...',
  },
  {
    icon: icons.pawns,
    iconColor: colors.purple,
    label1: 'Walking',
    label2: '03:00 PM Today',
    label3: 'Go to park with your dog for walking and...',
  },
];

const styles = StyleSheet.create({
  leftArrow: {
    height: 20,
    width: 20,
  },
  emergencyAlert: {
    height: 100,
    width: '90%',
    backgroundColor: colors.grey,
    alignSelf: 'center',
    borderRadius: 20,
    padding: 16,
    // justifyContent: 'center',
    flexDirection: 'row',
  },
  activitiesList: {
    margin: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  iconContainer: {
    borderRadius: 10,
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
