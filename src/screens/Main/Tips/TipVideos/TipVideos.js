import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import {colors} from '../../../../utils/Colors';
import {Spacer} from '../../../../components/Spacer';
import {images} from '../../../../assets/images';
import CustomText from '../../../../components/CustomText';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {WebView} from 'react-native-webview';
import {Divider} from 'react-native-elements';

const TipVideos = () => {
  const videoList = [
    {
      id: 1,
      image: images.playImage01,
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
      time: '02:30',
    },
    {
      id: 2,
      image: images.playImage02,
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
      time: '02:30',
    },
    {
      id: 3,
      image: images.playImage01,
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
      time: '02:30',
    },
    {
      id: 2,
      image: images.playImage02,
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
      time: '02:30',
    },
  ];
  // AntDesign hearto
  // EvilIcons comment
  // MaterialCommunityIcons share-outline
  // Fontisto bookmark
  return (
    <View style={{backgroundColor: colors.white}}>
      {/* <WebView
        source={{uri: 'https://www.youtube.com/watch?v=GyWeDBkatlc'}}
        style={{marginTop: 20}}
      /> */}
      {/* <WebView
        style={{flex:1}}
        javaScriptEnabled={true}
        source={{uri: 'https://www.youtube.com/embed/ZZ5LpwO-An4?rel=0&autoplay=0&showinfo=0&controls=0'}}
/> */}
      <Spacer height={10} />

      <View style={{width: '100%', height: 195, backgroundColor: 'red'}}>
        <WebView
          style={{flex: 1}}
          javaScriptEnabled={true}
          source={{
            uri: 'https://www.youtube.com/watch?v=07d2dXHYb94',
          }}
        />
      </View>
      <Spacer height={10} />

      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          paddingHorizontal: 15,
          height: 40,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // backgroundColor: 'red',
            width: '50%',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <AntDesign name="hearto" size={30} />
            <Spacer width={4} />
            <CustomText label="247" color={colors.grey1} />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <EvilIcons name="comment" size={40} />
            <CustomText label="57" color={colors.grey1} />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons name="share-outline" size={35} />
            <CustomText label="33" color={colors.grey1} />
          </View>
        </View>
        <View>
          <Fontisto name="bookmark" size={28} />
        </View>
      </View>

      <Spacer height={10} />
      <Divider width={1} color={colors.grey} />
      <Spacer height={5} />
      <View style={{paddingHorizontal: 14}}>
        <CustomText label="Related Videos" fontSize="12" />
      </View>
      <ScrollView>
        {videoList.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.6}
            key={index}
            style={{
              display: 'flex',
              width: '95%',
              height: 110,
              justifyContent: 'center',
              backgroundColor: colors.white,
              alignSelf: 'center',
              borderRadius: 10,
              border: 'solid',
              borderWidth: 3,
              borderColor: colors.grey,
              paddingHorizontal: 3,
              marginTop: 10,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                // backgroundColor: colors.grey1,
                alignItems: 'center',
              }}>
              <View style={{display: 'flex', flexDirection: 'row', flex: 15}}>
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={{height: 105, width: 105}}
                />
                <View
                  style={{width: '75%', padding: 10, justifyContent: 'center'}}>
                  <CustomText label={item.name} fontSize={9} />
                  <Spacer height={7} />
                  <View
                    style={{
                      width: 60,
                      height: 25,
                      backgroundColor: colors.grey,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                    }}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <MaterialCommunityIcons
                        name="play-box-multiple-outline"
                        color={colors.grey1}
                      />
                      <Spacer width={5} />
                      <CustomText
                        label={item.time}
                        fontSize={8}
                        color={colors.grey1}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={{display: 'flex', flex: 1}}>
                <Entypo name="dots-three-vertical" size={20} />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default TipVideos;
