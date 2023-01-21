import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {colors} from '../../utils/Colors';
import {icons} from '../../assets/icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProfilePic from '../../components/ProfilePic';
import {PH15} from '../../utils/CommonStyles';
import CustomText from '../../components/CustomText';
import {Spacer} from '../../components/Spacer';
import {images} from '../../assets/images';
import CurrentMood from '../../screens/Main/CurrentMood/CurrentMood';
import ReferFriend from '../../screens/Main/ReferFriend/ReferFriend';
import UpdateAccount from '../../screens/Main/UpdateAccount/UpdateAccount';
import AddDog from '../../screens/Main/AddDog.js/AddDog';
import Profile from '../../screens/Main/Profile/Profile';
import PrivacyPolicy from '../../screens/Main/PrivacyPolicy/PrivacyPolicy';
import Tips from '../../screens/Main/Tips/Tips';

const CustomDrawer = () => {
  const [showMenu, setShowMenu] = useState(false);
  const moveRight = useRef(new Animated.Value(1)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const [activeDrawer, setActiveDrawer] = useState(-1);

  const DrawerItem = [
    {id: 1, name: 'App Sync', img: icons.appSync},
    {id: 2, name: 'Refer a Friend', img: icons.refer},
    {id: 3, name: 'Update Account', img: icons.updateAct},
    {id: 4, name: 'Add Pet', img: icons.addPet},
    {id: 5, name: 'Favorite Pet', img: icons.heartdog},
    {id: 6, name: 'Dog Profile', img: icons.dogPro},
    {id: 7, name: 'Privacy & Policy', img: icons.privacyPol},
  ];
  const OpenDrawer = () => {
    Animated.timing(scale, {
      toValue: showMenu ? 1 : 0.6,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(moveRight, {
      toValue: showMenu ? 1 : 250,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setShowMenu(!showMenu);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <PH15>
        <Spacer height={30} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <ProfilePic size={70} />
          <View style={{marginLeft: 20}}>
            <CustomText fontSize={20} color={colors.black} label="Sabir Khan" />
            <CustomText fontSize={13} color={colors.black} label="Pet Lover" />
          </View>
        </View>
        <Spacer height={30} />
        <View style={{width: 200, height: '100%'}}>
          {DrawerItem.map(item => {
            return (
              <>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    OpenDrawer();
                    setActiveDrawer(item.id);
                  }}
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor:
                        activeDrawer == item.id ? colors.black : '#9FACBB',
                    }}
                    source={item.img}
                  />

                  <CustomText
                    fontSize={15}
                    color={activeDrawer == item.id ? colors.black : '#9FACBB'}
                    label={item.name}
                    marginLeft={20}
                  />
                </TouchableOpacity>
                <Spacer height={30} />
              </>
            );
          })}

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '50%',
            }}>
            <Image
              resizeMode="contain"
              style={{width: 20, height: 20, tintColor: '#9FACBB'}}
              source={icons.logoutdog}
            />

            <CustomText
              fontSize={15}
              color={'#9FACBB'}
              label={'Logout'}
              marginLeft={20}
            />
          </TouchableOpacity>
        </View>
      </PH15>

      <Animated.View
        style={{
          flex: 1,
          backgroundColor: 'white',
          position: 'absolute',
          top: 50,
          bottom: 0,
          left: 0,
          right: 0,
          //   borderRadius:40
          transform: [{scale: scale}, {translateX: moveRight}],
        }}>
        <View style={{flexDirection: 'row'}}>
          {activeDrawer == -1 ? (
            <CurrentMood showMenu={showMenu} onPressMenu={OpenDrawer} />
          ) : activeDrawer == 2 ? (
            <ReferFriend />
          ) : activeDrawer == 3 ? (
            <UpdateAccount />
          ) : activeDrawer == 4 ? (
            <AddDog />
          ) : activeDrawer == 6 ? (
            <Profile />
          ) : activeDrawer==7?(
            <PrivacyPolicy />
          ):<Tips onPressMenu={OpenDrawer}/>
          }
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
