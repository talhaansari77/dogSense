import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../../../../components/CustomHeader';
import CustomText from '../../../../../components/CustomText';
import {colors} from '../../../../../utils/Colors';
import {Montserrat} from '../../../../../utils/Fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import CustomSearch from '../../../../../components/CustomSearch';
import { Spacer } from '../../../../../components/Spacer';
const SearchHeader = () => {
  return (
    <>
      <CustomHeader
        LeftSide={() => (
          <TouchableOpacity activeOpacity={0.6}>
            <Ionicons name="arrow-back-outline" size={moderateScale(30)} />
          </TouchableOpacity>
        )}
        Center={() => (
          <CustomText
            label={'Search'}
            fontSize={17}
            color={colors.black}
            marginRight={20}
            fontFamily={Montserrat.Regular}
          />
        )}
      />
      <Spacer height={20}/>

      <CustomSearch
      width={'100%'} height={verticalScale(40)}
      />
    </>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({});
