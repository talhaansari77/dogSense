import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import commonStyles, {PH15} from '../../../utils/CommonStyles';
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
import { verticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
// import CustomDivider from '../../../components/CustomDivider'
const {width, height} = Dimensions.get('window');

const CurrentMood = ({onPressMenu,showMenu,}) => {
  const navigation=useNavigation()
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
        <MyPets item={item} />
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
    <View style={{flex: 1,}}>
      <ScrollView>
        <View
          style={{ flex:1,backgroundColor: '#f8f9fa',borderTopLeftRadius:showMenu? 20:0,
          }}>
          <Spacer height={10} />
          <PH15>
            <TriHeader 
            onPressMenu={onPressMenu}
            />
          </PH15>
          <Spacer height={15} />
          <CustomDivider />

          <PH15>
            <Spacer height={10} />

            <CustomText
              label={'My Pets'}
              fontSize={15}
              color={colors.black}
              marginRight={5}
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
            <ViewMore txt="Plans" />
            <Spacer height={20} />

            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={PlansData}
              keyExtractor={item => item.id}
              renderItem={RenderPlain}
            />

            <Spacer height={20} />
            <ViewMore txt="News" />
            <Spacer height={20} />
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={NewsData}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => {
                return (
                  <>
                    <CustomImage
                      picture={item.picture}
                      viewWidth={width / 2.8}
                      viewHeight={width / 3}
                    />
                    <Spacer width={20} />
                  </>
                );
              }}
            />
          </PH15>

          {/* <CustomDivider/> */}
        </View>
      


      </ScrollView>
      <View style={{position:"absolute",width:"100%",bottom:verticalScale(0)}}>
        <BottomTabs navigation={navigation}/>


        </View>

    </View>
  );
};

export default CurrentMood;

const styles = StyleSheet.create({});
