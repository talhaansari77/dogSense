import {  StyleSheet, Text, View,Dimensions,Image, ScrollView } from 'react-native'
import React,{useState} from 'react'
import commonStyles, { PH10, PH15 } from '../../../utils/CommonStyles';
import { colors } from '../../../utils/Colors';
import { images } from '../../../assets/images';
import AuthOption from '../Login/Molecules/AuthOption';
import { Spacer } from '../../../components/Spacer';
import CustomTextInput from '../../../components/CustomTextInput';
import RegisterBottom from './Molecules/RegisterBottom';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Register = ({navigation,route}) => {
  const {colorMode, colorMode2, textColor,colorMode3} = route.params;

  
  const [activeInput, setActiveInput] = useState(-1)

    const loginInputData = [
        {id: 1, placeholder: 'Name', leftIcon: images.user, borderWidth: 0.7},

        {id: 2, placeholder: 'Email', leftIcon:images.email, borderWidth: 0.7},
        {id: 3, placeholder: 'Phone Number', leftIcon: images.phone, borderWidth: 0.7},

        {
          id: 4,
          placeholder: 'Password',
          leftIcon: images.lock,
          borderWidth: 0.7,
        },
      ];
      return (
        <View style={{flex:1,backgroundColor:colors.white}}>
         
          <ScrollView style={{backgroundColor:colorMode}}>

          <PH15>
            <Spacer height={30} />
            <View
              style={{
                height: windowHeight / 5,
                width: windowWidth / 4,
                alignSelf: 'center',
                borderRadius: 10,
                overflow: 'hidden',
              }}>
              <Image
                source={images.appIcon}
                resizeMode="contain"
                style={commonStyles.img}
              />
            </View>
            <AuthOption 
            txt1={"Register"}
            txt2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}
            textColor={textColor}
            />
            <Spacer height={30} />
            {loginInputData.map((item,index) => {
              return (
                <>
                  <CustomTextInput
                  onPress={()=>setActiveInput(index)}
                    placeholder={item.placeholder}
                    placeholderTextColor={colors.grayLight}
                    leftIcon={item.leftIcon}
                    borderWidth={item.borderWidth}
                    borderColor={activeInput==index?colors.primary:colors.iconGray}
                    iconBorderColor={activeInput==index?colors.primary:colors.iconGray}
                    tintColor={activeInput==index?colors.primary:colors.iconGray}
                  />
                  <Spacer height={20} />
                </>
    
              );
            })}
            <RegisterBottom navigation={navigation}/>
            <Spacer height={30}/>
          </PH15>
        </ScrollView>

        </View>

      );
}

export default Register

const styles = StyleSheet.create({})