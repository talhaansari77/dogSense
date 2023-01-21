import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
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
import LinearGradient from 'react-native-linear-gradient';
import ResponsiveGrid from './Molecules/ResponsiveGrid';

const {height, width} = Dimensions.get('window');
const activitiesList = [
  {
    icon: icons.capsule,
    color1: '#00454F',
    color2: '#00333A',
    label1: 'Medication',
    time: '12:30 PM 1',
  },
  {
    icon: icons.bone,
    color1: '#BA835B',
    color2: '#5D422E',
    label1: 'Eating',
    time: '01:00 PM',
  },
  {
    icon: icons.water,
    color1: '#14d5fc',
    color2: '#0fa8c6',
    label1: 'Water',
    time: '12:45 PM',
  },
  {
    icon: icons.pawns,
    color1: '#6e5bea',
    color2: '#5243AC',
    label1: 'Walking',
    time: '03:00 PM',
  },
];

const chartsData = [
  {
    label: 'Blood Pressure',
    icon1: icons.flood,
    icon2: icons.curveLine,
    progressDelta: '135/140',
    progress: '',
    unit: 'mmHg',
    pixelHeight: 160,
    pixelWidth: 236,
    color: colors.primary,
  },
  {
    label: 'Sleep',
    icon1: icons.sleep,
    icon2: '',
    progressDelta: '7.40',
    progress: '',
    unit: 'hours',
    pixelHeight: 100,
    pixelWidth: 236,
    color: colors.lightGreen,
  },
  {
    label: 'Water',
    icon1: icons.water,
    icon2: 'null',
    progressDelta: '0.80',
    progress: '21',
    unit: '',
    pixelHeight: 160,
    pixelWidth: 236,
    color: colors.cyan,
  },
  {
    label: 'Hear Rate',
    icon1: icons.heartbeat,
    icon2: icons.audio,
    progressDelta: '109',
    progress: '',
    unit: 'bmp',
    pixelHeight: 160,
    pixelWidth: 236,
    color: colors.red,
  },
  {
    label: 'Calories',
    icon1: icons.fire,
    icon2: 'null',
    progressDelta: '1651',
    progress: '',
    unit: 'Burned',
    pixelHeight: 200,
    pixelWidth: 236,
    color: colors.darkCyan,
  },
  {
    label: 'Walk',
    icon1: icons.pawns,
    icon2: 'null',
    progressDelta: '6546',
    progress: '',
    unit: 'Steps',
    pixelHeight: 200,
    pixelWidth: 236,
    color: colors.purple,
  },
  {
    label: 'Bone Density',
    icon1: icons.bone,
    icon2: icons.audio,
    progressDelta: '2.3',
    progress: '',
    unit: 'g/sm3',
    pixelHeight: 160,
    pixelWidth: 236,
    color: colors.yellow,
  },
  {
    label: 'Weight',
    icon1: icons.balanceScale,
    icon2: 'null',
    progressDelta: '5kg',
    progress: '',
    unit: 'Normal',
    pixelHeight: 200,
    pixelWidth: 236,
    color: colors.green,
  },
];
const loremText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam';
const DetailScreen = ({route}) => {
  const [selected, setSelected] = useState(1);
  const {colorMode, colorMode2, textColor} = route.params;

  const NameCom = () => (
    <View style={{...styles.NameCom,backgroundColor:colorMode2}}>
      <View style={commonStyles.rowSpaceBetween}>
        <CustomText label={'George'} fontWeight={'bold'} fontSize={18} color={textColor} />
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
    <View style={{flex: 1,backgroundColor:colorMode}}>
      {/* <Spacer height={Platform.OS === 'ios' ? 40 : 3} /> */}
      <View style={{position: 'absolute', zIndex: 100, paddingHorizontal: 20}}>
        <Spacer height={Platform.OS === 'ios' ? 40 : 40} />
        <CustomHeader
          LeftSide={() => (
            <Image source={icons.leftArrow} style={{...styles.leftArrow}} />
          )}
        />
      </View>
      <View
        style={{
          height: height / 2,
          width: width * 1,
          //   position: 'absolute',
          alignSelf: 'center',
        }}>
        <Image
          resizeMode="cover"
          source={images.dog2}
          style={commonStyles.img}
        />
        <NameCom />
      </View>
      <Spacer height={65} />
      <TopTabs setSelected={setSelected} backgroundColor={colorMode2}  />
      <Spacer height={15} />
      {selected === 1 ? (
        <>
          <PH20>
            <CustomText label={'George'} fontWeight={'bold'} fontSize={18} color={textColor} />
            <Spacer height={5} />
          </PH20>
          <ScrollView>
            <PH20>
              <CustomText
                label={loremText}
                fontSize={12}
                color={colors.grey3}
              />
            </PH20>
          </ScrollView>
          <Spacer height={16} />
          <View
            style={{...commonStyles.rowSpaceBetween, paddingHorizontal: 20}}>
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
        </>
      ) : (
        <>
          <PH20>
            <CustomText label={'Schedule'} fontWeight={'bold'} fontSize={18} />
            <Spacer height={5} />
          </PH20>
          <ScrollView>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {/* <PH20> */}
              {activitiesList.map((item, index) => (
                <>
                  <Spacer width={20} />
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={[item.color1, item.color2]}
                    style={styles.linearGradient}>
                    <IconContainer
                      icon={item.icon}
                      // color={item.color1}
                      tintColor={colors.white}
                      iconSize={30}
                    />
                    <Spacer width={14} />
                    <Details
                      label1={'11:30 AM'}
                      label2={'Medication'}
                      // label3={'Tap to see >'}
                      size1={16}
                      size2={10}
                      space={3}
                      // size3={10}
                    />
                  </LinearGradient>
                  {index === 3 ? <Spacer width={20} /> : <></>}
                </>
              ))}
              {/* </PH20> */}
            </ScrollView>
            <Spacer height={20} />
            {/* <Spacer height={100} /> */}
            <ResponsiveGrid data={chartsData} backgroundColor={colorMode2} textColor={textColor} />
          </ScrollView>
        </>
      )}
      {/* <BottomTabs /> */}
    </View>
  );
};

export default DetailScreen;

const IconContainer = ({color, icon, iconSize, tintColor}) => (
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
  size1,
  size2,
  color1 = colors.white,
  color2 = colors.white,
  space,
}) => (
  <View style={{justifyContent: 'space-between', paddingVertical: 5}}>
    <CustomText
      label={label1}
      color={color1}
      fontSize={size1}
      fontWeight={'bold'}
    />
    {space ? <Spacer height={space} /> : <></>}
    <CustomText label={label2} color={color2} fontSize={size2} />
  </View>
);

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
  linearGradient: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    width: width / 2,
    height: verticalScale(60),
    alignItems: 'center',
    flexDirection: 'row',
  },
});
