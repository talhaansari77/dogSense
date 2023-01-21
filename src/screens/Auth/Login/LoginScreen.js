import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import React,{useState} from 'react';
import commonStyles, {PH10, PH15} from '../../../utils/CommonStyles';
import {images} from '../../../assets/images';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {Spacer} from '../../../components/Spacer';
import AuthOption from './Molecules/AuthOption';
import {icons} from '../../../assets/icons';
import CustomTextInput from '../../../components/CustomTextInput';
import {colors} from '../../../utils/Colors';
import LoginBottom from './Molecules/LoginBottom';
import InputField from '../../../components/InputField';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = ({navigation}) => {
  const [activeInput, setActiveInput] = useState(-1)
  const loginInputData = [
    {id: 1, placeholder: 'Email', leftIcon: images.email, borderWidth: 0.7},
    {
      id: 2,
      placeholder: 'Password',
      leftIcon: images.lock,
      borderWidth: 0.7,
    },
  ];
  return (
    <SafeAreaView style={{...commonStyles.container,backgroundColor:colors.white}}>
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
        txt1={"Log in"}
        txt2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}
        />
        <Spacer height={30} />
        <InputField data={loginInputData}/>
        {/* {loginInputData.map((item,index) => {
          return (
            <>
              <CustomTextInput
              onPress={()=>setActiveInput(index)}
              onPressIn={()=>setActiveInput(index)}
                placeholder={item.placeholder}
                placeholderTextColor={colors.grayLight}
                leftIcon={item.leftIcon}
                borderColor={activeInput==index?colors.primary:colors.iconGray}
                borderWidth={item.borderWidth}
                iconBorderColor={activeInput==index?colors.primary:colors.iconGray}
                tintColor={activeInput==index?colors.primary:colors.iconGray}
              />
              <Spacer height={20} />
            </>

          );
        })} */}
        <LoginBottom navigation={navigation}/>
      </PH15>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
