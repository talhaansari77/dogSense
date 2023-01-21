import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import commonStyles, {PH15} from '../../../../utils/CommonStyles';
import SearchHeader from './Molecules/SearchHeader';
import {verticalScale} from 'react-native-size-matters';
import {Spacer} from '../../../../components/Spacer';
import CustomText from '../../../../components/CustomText';
import {colors} from '../../../../utils/Colors';
import {Montserrat} from '../../../../utils/Fonts';
import SearchDogCotainer from './Molecules/SearchDogCotainer';
import {images} from '../../../../assets/images';

const SearchCurrenMood = ({navigation,route}) => {
  const {colorMode, colorMode2,colorMode3, textColor} = route.params;
  const searchData = [
    {id: 1, img: images.dog, name: 'Noble', backgroundColor: '#84E555'},
    {id: 2, img: images.dog, name: 'Matty', backgroundColor: '#D0CEFC'},
    {id: 3, img: images.dog, name: 'George', backgroundColor: '#F8C3A7'},
  ];
  return (
    <View style={{...commonStyles.IosMainPadding, backgroundColor: colorMode}}>
      <PH15>
        <Spacer height={10} />
        <SearchHeader navigation={navigation} backgroundColor={colorMode3}  />

        <Spacer height={20} />
        <CustomText
          label={'Recent Searches'}
          fontSize={12}
          color={colors.grey3}
          marginRight={20}
          fontFamily={Montserrat.Regular}
        />
        <Spacer height={20} />
        {searchData.map(item => {
          return (
            <>
              <SearchDogCotainer item={item} textColor={textColor} />
              <Spacer height={20}/>
            </>
          );
        })}
      </PH15>
    </View>
  );
};

export default SearchCurrenMood;

const styles = StyleSheet.create({});
