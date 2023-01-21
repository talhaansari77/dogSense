import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import commonStyles, {PH10, PH15} from '../../../utils/CommonStyles';
import TriHeader from '../../../components/TriHeader';
import {Spacer} from '../../../components/Spacer';
import CustomDivider from '../../../components/CustomDivider';
import {colors} from '../../../utils/Colors';
import MyPets from './Molecules/MyPets';
import {Montserrat} from '../../../utils/Fonts';
import CustomText from '../../../components/CustomText';
import {images} from '../../../assets/images';
import ViewMore from './Molecules/ViewMore';
import PlansContainer from './Molecules/PlansContainer';
import CustomImage from '../../../components/CustomImage';
import BottomTabs from '../../../components/BottomTabs';
import {verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {icons} from '../../../assets/icons';
import LinearGradient from 'react-native-linear-gradient';
// import CustomDivider from '../../../components/CustomDivider'
const {width, height} = Dimensions.get('window');

const CurrentMood = ({onPressMenu, showMenu, route}) => {
  const {colorMode, colorMode2, textColor, colorMode3} = route.params;
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
  const navigation = useNavigation();
  const PetData = [
    {
      id: 1,
      firstName: 'Nora',
      lastName: 'Labrador',
      picture: images.dog,
      backColor: '#E8F4FF',
    },
    {
      id: 2,
      firstName: 'Nora',
      lastName: 'Labrador',
      picture: images.dog,
      backColor: '#FFDBC9',
    },
  ];
  const PlansData = [
    {
      id: 1,
      date: '13 Dec',
      detail: 'Visiting a Vet place',
      picture: images.planDog,
    },
    {
      id: 1,
      date: '13 Dec',
      detail: 'Visiting a Vet place',
      picture: images.planDog,
    },
  ];
  const NewsData = [
    {id: 1, picture: images.planDog},
    {id: 2, picture: images.planDog},
    {id: 3, picture: images.planDog},
  ];

  const renderPet = ({item, index}) => {
    console.log('ImageData', item.lastName);
    return (
      <>
        <MyPets item={item} borderColor={colors.white} />
        <Spacer width={20} />
      </>
    );
  };

  const RenderPlain = ({item, index}) => {
    return (
      <>
        <PlansContainer item={item} />
        <Spacer width={20} />
      </>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: colorMode}}>
      <Spacer height={Platform.OS === 'ios' ? 40 : 40} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            backgroundColor: colorMode,
            borderTopLeftRadius: showMenu ? 20 : 0,
          }}>
          {/* <Spacer height={10} /> */}
          <PH15>
            <TriHeader
              onPressMenu={onPressMenu}
              onPressIn={() => navigation.navigate('SearchCurrenMood')}
              backgroundColor={colorMode3}
            />
          </PH15>
          <Spacer height={15} />
          <CustomDivider />

          <PH15>
            <Spacer height={10} />

            <CustomText
              label={'My Pets'}
              fontSize={15}
              color={textColor}
              marginRight={5}
              fontWeight={'bold'}
              fontFamily={Montserrat.Regular}
            />

            <Spacer height={10} />

            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={PetData}
              keyExtractor={item => item.id}
              renderItem={renderPet}
            />
            <Spacer height={20} />
            <ViewMore txt="Plans" textColor={textColor} />
            <Spacer height={20} />

            {/* <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={PlansData}
              keyExtractor={item => item.id}
              renderItem={RenderPlain}
            /> */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {/* <PH20> */}
              {activitiesList.map((item, index) => (
                <>
                  {/* <Spacer width={20} /> */}
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
                  <Spacer width={20} /> 
                </>
              ))}
              {/* </PH20> */}
            </ScrollView>

            <Spacer height={20} />
            <ViewMore txt="News" textColor={textColor} />
            <Spacer height={20} />
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={NewsData}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => {
                return (
                  <>
                    <View style={{backgroundColor:colorMode2,borderRadius:10}}>
                    <CustomImage
                      picture={item.picture}
                      viewWidth={width / 2.8}
                      viewHeight={width / 3}
                      borderColor={textColor}
                    />
                    <View style={{width:width / 2.8,padding:10,}}>
                      {/* <PH10> */}
                      <CustomText label={'Mobile is not working, check this out.Mobile is not working, check this out'} color={textColor} textAlign={'justify'} fontSize={9} fontFamily={Montserrat.Regular}/>

                      {/* </PH10> */}
                    </View>
                    </View>
                    <Spacer width={20} />
                  </>
                );
              }}
            />
          </PH15>

          {/* <CustomDivider/> */}
        </View>
      </ScrollView>
      <BottomTabs navigation={navigation} selected={0} colorMode={colorMode} />
    </View>
  );
};

export default CurrentMood;

const styles = StyleSheet.create({
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
