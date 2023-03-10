import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../utils/Colors';
import {images} from '../assets/images';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {icons} from '../assets/icons';
import commonStyles from '../utils/CommonStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DrawerButton = ({size = 40, onPress,backgroundColor,iconColor}) => {
  const styles = StyleSheet.create({
    drawerButtonContainer: {
      width: verticalScale(size),
      height: verticalScale(size),
      // marginLeft: verticalScale(10),
      borderColor: colors.white,
      borderRadius: 1000,
      backgroundColor: backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={styles.drawerButtonContainer}>
      <Image
        style={{
          height: size / 1.5,
          width: size / 1.5,
          tintColor: iconColor,
        }}
        source={icons.menu}
        resizeMode={'contain'}
      />
    </TouchableOpacity>
  );
};

export default DrawerButton;

const styles = StyleSheet.create({});
