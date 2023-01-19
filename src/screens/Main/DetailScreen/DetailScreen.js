import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Spacer} from '../../../components/Spacer';
import CustomHeader from '../../../components/CustomHeader';
import CustomText from '../../../components/CustomText';
import {icons} from '../../../assets/icons';
import {images} from '../../../assets/images';
import commonStyles, {PH10, PH20} from '../../../utils/CommonStyles';
import {colors} from '../../../utils/Colors';
import BottomTabs from '../../../components/BottomTabs';
import TopTabs from './Molecules/TopTabs';
import CustomButton from '../../../components/CustomButton';
import {verticalScale} from 'react-native-size-matters';

const {height, width} = Dimensions.get('window');
const loremText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam';
const DetailScreen = () => {
  const NameCom = () => (
    <View style={styles.NameCom}>
      <View style={commonStyles.rowSpaceBetween}>
        <CustomText label={'George'} fontWeight={'bold'} fontSize={18} />
        <View>
          <Image source={icons.genderIcon} style={{height: 20, width: 20}} />
        </View>
      </View>
      <Spacer height={5} />
      <View style={commonStyles.rowSpaceBetween}>
        <CustomText label={'George'} color={colors.grey3} fontSize={10} />
        <CustomText label={'2 years old'} color={colors.grey3} fontSize={10} />
      </View>
    </View>
  );
  return (
    <View style={{flex: 1}}>
      {/* <Spacer height={Platform.OS === 'ios' ? 40 : 3} /> */}
      <View style={{position: 'absolute', zIndex: 100, paddingHorizontal: 20}}>
        <Spacer height={Platform.OS === 'ios' ? 40 : 3} />
        <CustomHeader
          LeftSide={() => (
            <Image source={icons.leftArrow} style={{...styles.leftArrow}} />
          )}
        />
      </View>
      <View
        style={{
          height: height / 2,
          width: width * 1.2,
          //   position: 'absolute',
          alignSelf: 'center',
        }}>
        <Image
          resizeMode="cover"
          source={images.dog}
          style={commonStyles.img}
        />
        <NameCom />
      </View>
      <Spacer height={65} />
      <TopTabs />
      <Spacer height={15} />
      <PH20>
        <CustomText label={'George'} fontWeight={'bold'} fontSize={18} />
        <Spacer height={5} />
      </PH20>
      <ScrollView>
        <PH20>
          <CustomText label={loremText} fontSize={12} color={colors.grey3} />
        </PH20>
      </ScrollView>
      <Spacer height={16} />
      <View style={{...commonStyles.rowSpaceBetween, paddingHorizontal: 20}}>
        <TouchableOpacity activeOpacity={0.6} style={styles.healthCross}>
          <Image
            source={icons.healthCross}
            style={{height: 20, width: 20, tintColor: colors.white}}
          />
        </TouchableOpacity>
        <View style={{width: '80%'}}>
          <CustomButton title={'Learn More'} />
        </View>
      </View>
      <Spacer height={16} />
      {/* <BottomTabs /> */}
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  NameCom: {
    backgroundColor: colors.white,
    borderRadius: 20,
    height: height / 9,
    width: width / 1.2,
    zIndex: 100,
    borderWidth: 1,
    borderColor: colors.primary,
    elevation: 5,
    alignSelf: 'center',
    position: 'absolute',
    bottom: -(height / 8) / 2,
    justifyContent: 'center',
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  healthCross: {
    backgroundColor: colors.primary,
    height: verticalScale(48),
    width: verticalScale(48),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftArrow: {
    height: 20,
    width: 20,
  },
});
