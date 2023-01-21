import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {images} from '../../../../../assets/images';
import {Spacer} from '../../../../../components/Spacer';
import CustomText from '../../../../../components/CustomText';
import {colors} from '../../../../../utils/Colors';
import {Montserrat} from '../../../../../utils/Fonts';
import {scale, verticalScale} from 'react-native-size-matters';
import commonStyles from '../../../../../utils/CommonStyles';

const SearchDogCotainer = ({item,textColor}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={commonStyles.rowContainer}>
        <View style={{...styles.dogBox,backgroundColor:item.backgroundColor}}>
          <Image
            resizeMode="contain"
            style={{width: '80%', height: '80%'}}
            source={item.img}
          />
        </View>
        <Spacer width={20} />
        <CustomText
          label={item.name}
          fontSize={15}
          color={textColor}
          marginRight={20}
          fontFamily={Montserrat.Regular}
        />

        {/* </View> */}
      </View>
      <TouchableOpacity style={styles.check}>

      </TouchableOpacity>
    </View>
  );
};

export default SearchDogCotainer;

const styles = StyleSheet.create({
  dogBox: {
    width: scale(65),
    height: verticalScale(55),
    borderRadius: 10,
    alignItems:"center",
    justifyContent:"center"
  },
  check:{
      width:23,
      height:23,
      borderRadius:4,
      borderWidth:1,
      borderColor:"#9FACBB"

  }
});
