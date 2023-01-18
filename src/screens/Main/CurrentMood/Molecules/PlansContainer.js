import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../../../utils/Colors';
import commonStyles from '../../../../utils/CommonStyles';
import {images} from '../../../../assets/images';
import CustomText from '../../../../components/CustomText';
import {Montserrat} from '../../../../utils/Fonts';
import {Spacer} from '../../../../components/Spacer';

const {width, height} = Dimensions.get('window');

const PlansContainer = ({item}) => {
  return (
    <View style={styles.mainContainer}>
      <Image style={commonStyles.img} source={item.picture} />

      <View style={styles.checkDate}>
        <View>
          <Spacer height={2} />

          <CustomText
            label={item.date}
            fontSize={13}
            color={colors.black}
            fontFamily={Montserrat.Regular}
          />
          <Spacer height={5} />
          <CustomText
            label={item.detail}
            fontSize={9}
            color={colors.grayLight}
            fontFamily={Montserrat.Regular}
          />
        </View>
        <View style={styles.calanderCircle}>
          <View style={styles.calanderInner}></View>
        </View>
      </View>
    </View>
  );
};

export default PlansContainer;

const styles = StyleSheet.create({
  mainContainer: {
    width: width / 1.7,
    height: height / 6,
    borderRadius: scale(20),
    borderWidth: 1.8,
    overflow: 'hidden',
    borderColor: colors.white,
    // padding:10
  },
  checkDate: {
    width: '33%',
    height: '70%',
    backgroundColor: colors.white,
    borderRadius: 10,
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EBF0F2',
  },
  calanderCircle: {
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: 'gray',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -10,
  },
  calanderInner: {
    width: 15,
    height: 15,
    borderRadius: 100,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
  },
});
