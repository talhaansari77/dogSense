import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {icons} from '../../../assets/icons';
import commonStyles, {PH10, PH15} from '../../../utils/CommonStyles';
import LoginBottom from '../Login/Molecules/LoginBottom';
import CustomTextInput from '../../../components/CustomTextInput';
import AuthOption from '../Login/Molecules/AuthOption';
import {images} from '../../../assets/images';
import {Spacer} from '../../../components/Spacer';
import {colors} from '../../../utils/Colors';
import CustomButton from '../../../components/CustomButton';
import SendVerification from './Molecules/SendVerification';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ForgetPassword = ({navigation}) => {
  const [sendVerification, setSendVerification] = useState(false);
  const [activeInput, setActiveInput] = useState(-1)

  const loginInputData = [
    {
      id: 1,
      placeholder: 'New Password',
      leftIcon: images.lock,
      borderWidth: 0.7,
    },
    {
      id: 2,
      placeholder: 'Re-enter new password',
      leftIcon: images.lock,
      borderWidth: 0.7,
    },
  ];
  return (
    <SafeAreaView
      style={{...commonStyles.container, backgroundColor: colors.white}}>
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
        <Spacer height={30} />
        {!sendVerification ? (
          <SendVerification onSend={() => setSendVerification(true)} />
        ) : (
          <>
            <AuthOption
              txt1={'Forgot Password?'}
              txt2={'Enter a new password for your account to get going'}
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
                    borderColor={activeInput==index?colors.primary:colors.iconGray}
                    borderWidth={item.borderWidth}
                    iconBorderColor={activeInput==index?colors.primary:colors.iconGray}
                    tintColor={activeInput==index?colors.primary:colors.iconGray}
                  />
                  <Spacer height={20} />
                </>
              );
            })}
            <Spacer height={20} />
            <CustomButton
              onPress={() => navigation.navigate('LoginScreen')}
              title="Update Password"
            />
          </>
        )}
      </PH15>
    </SafeAreaView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({});
