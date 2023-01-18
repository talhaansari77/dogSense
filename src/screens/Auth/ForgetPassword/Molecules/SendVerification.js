import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { colors } from '../../../../utils/Colors'
import { icons } from '../../../../assets/icons'
import { Spacer } from '../../../../components/Spacer'
import CustomButton from '../../../../components/CustomButton'
import CustomTextInput from '../../../../components/CustomTextInput'
import AuthOption from '../../Login/Molecules/AuthOption'
import { images } from '../../../../assets/images'

const SendVerification = ({onSend}) => {
  const [inputActive, setInputActive] = useState(false)
  return (
    <View>
          <AuthOption
          txt1={'Forgot Password?'}
          txt2={"Just enter the email address you've used to sign up with us and we'll send you a reset link!"}
        />
        <Spacer height={30}/>

              <CustomTextInput
              onPress={()=>setInputActive(true)}
                placeholder={"Email"}
                placeholderTextColor={colors.grayLight}
                leftIcon={images.email}
                borderColor={inputActive?colors.primary:colors.iconGray}
                iconBorderColor={inputActive?colors.primary:colors.iconGray}

                tintColor={inputActive?colors.primary:colors.iconGray}

                borderWidth={0.7}
               
              />
              <Spacer height={20} />
        
        <Spacer height={20} />
        <CustomButton 
        onPress={onSend}
        title="Send Verification Link" />  
          </View>
  )
}

export default SendVerification

const styles = StyleSheet.create({})