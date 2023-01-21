import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import commonStyles, {PH10, PH15} from '../../../utils/CommonStyles';
import ProfilePic from '../../../components/ProfilePic';
import ProfileHeader from '../../../components/ProfileHeader';
import {colors} from '../../../utils/Colors';
import CustomText from '../../../components/CustomText';
import {Spacer} from '../../../components/Spacer';
import {images} from '../../../assets/images';
import {verticalScale} from 'react-native-size-matters';
import CustomImage from '../../../components/CustomImage';
import BottomTabs from '../../../components/BottomTabs';
const {width, height} = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation=useNavigation()
  const PetData = [
    {id: 1, picture: images.planDog},
    {id: 2, picture: images.planDog},
    {id: 3, picture: images.planDog},
  ];
  return (
    <>
      <ScrollView style={{flex: 1}}>
      <View style={{flex:1}}>
        <ProfileHeader centerText="My Profile" />
        <Spacer height={60} />
        <View style={{alignSelf: 'center', alignItems: 'center'}}>
          <CustomText fontSize={20} color={colors.black} label="Sabir Khan" />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: verticalScale(5),
            }}>
            <Image
              resizeMode="contain"
              source={images.email}
              style={{width: 20, height: 20}}
            />
            <CustomText
              fontSize={12}
              color={colors.iconGray}
              label="Sabirkhan@gmail.com"
              marginLeft={5}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: verticalScale(2),
            }}>
            <Image
              resizeMode="contain"
              source={images.phone}
              style={{width: 20, height: 20}}
            />
            <CustomText
              fontSize={12}
              color={colors.iconGray}
              label="+92 123 4567890"
              marginLeft={5}
            />
          </View>
        </View>
        <PH10>
          <Spacer height={20} />
          <CustomText
            fontSize={18}
            color={colors.black}
            label="My Pets"
            marginLeft={5}
          />
          <Spacer height={10} />

          <FlatList
            numColumns={2}
            data={PetData}
            columnWrapperStyle={{
              flex: 1,
              marginVertical: verticalScale(7),
            }}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return (
                <>
                  <CustomImage
                    picture={item.picture}
                    viewWidth={width / 2.3}
                    viewHeight={width / 2.3}
                  />
                  <Spacer width={20} />
                </>
              );
            }}
          />
        </PH10>
      </View>
    </ScrollView>
     <View style={{position:"absolute",width:"100%",bottom:verticalScale(0)}}>
        <BottomTabs navigation={navigation}/>


        </View>
    </>
  
  );
};

export default Profile;

const styles = StyleSheet.create({});
