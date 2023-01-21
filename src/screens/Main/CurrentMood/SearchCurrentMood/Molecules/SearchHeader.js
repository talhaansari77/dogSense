import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../../../../components/CustomHeader';
import CustomText from '../../../../../components/CustomText';
import {colors} from '../../../../../utils/Colors';
import {Montserrat} from '../../../../../utils/Fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import CustomSearch from '../../../../../components/CustomSearch';
import {Spacer} from '../../../../../components/Spacer';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchHeader = ({navigation,backgroundColor, textColor}) => {
  return (
    <>
     <View>
        <CustomHeader
          LeftSide={() => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={0.6}>
              <AntDesign name="arrowleft" size={moderateScale(24)} color={colors.grey3}/>
            </TouchableOpacity>
          )}
          Center={() => <CustomText label="Search" fontSize={16} color={textColor}/>}
        />
      </View>
      <Spacer height={20} />
      <CustomSearch width={'100%'} height={verticalScale(40)} backgroundColor={backgroundColor} iconColor={textColor} placeholderTextColor={colors.grey3} />
    </>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({});
