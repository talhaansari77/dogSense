import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../utils/Colors';
import {images} from '../assets/images';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {icons} from '../assets/icons';
import commonStyles from '../utils/CommonStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProfilePic = ({
  borderWidth = 3,
  size = 100,
  editable = false,
  onPressEdit,
  image=images.profilePic,
  onPressProfile
}) => {
  const styles = StyleSheet.create({
    profileContainer: {
      width: verticalScale(size),
      height: verticalScale(size),
      // marginLeft: verticalScale(10),
      borderColor: colors.white,
      borderWidth: borderWidth,
      borderRadius: 1000,
      backgroundColor: colors.white,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    editableContainer: {
      position: 'absolute',
      bottom: 5,
      right: 5,
      height: 30,
      width: 30,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: colors.white,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <View>
      <TouchableOpacity onPress={onPressProfile} activeOpacity={0.8} style={styles.profileContainer}>
        <Image style={commonStyles.img} source={image} />
      </TouchableOpacity>
      {editable ? (
        <TouchableOpacity
          onPress={onPressEdit}
          activeOpacity={0.6}
          style={styles.editableContainer}>
          <MaterialIcons name="edit" size={14} color={colors.white} />
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
};

export default ProfilePic;
