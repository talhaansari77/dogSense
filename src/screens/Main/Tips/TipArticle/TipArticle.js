import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import CustomButton from '../../../../components/CustomButton';
// import ReadMore from 'react-native-read-more-text';
import {colors} from '../../../../utils/Colors';
import ReadMore from '@fawazahmed/react-native-read-more';
import CustomText from '../../../../components/CustomText';
import { Spacer } from '../../../../components/Spacer';

const TipArticle = () => {
  const article = [
    {
      id: 1,
      title: 'ALWAYS KEEP FRESH WATER AVAILABLE.',
    },
    {
      id: 2,
      title: 'FEED A QUALITY DIET AND PREVENT OBESITY.',
    },
    {
      id: 3,
      title: 'PROVIDE AMPLE OPPORTUNITIES TO EXERCISE.',
    },
    {
      id: 4,
      title: 'PROVIDE A PROTECTED AND CLEAN LIVING.',
    },
    {
      id: 5,
      title: 'PROVIDE A PROTECTED AND CLEAN LIVING.',
    },
    {
      id: 6,
      title: 'PROVIDE A PROTECTED AND CLEAN LIVING.',
    },
  ];
  return (
    <View>
      <Spacer height={20} />
      <ScrollView  >
      {article.map((item, index) => (
        <View key={index}
        style={{
          width: '95%',
          border: 'solid',
          borderWidth: 1,
          borderColor: colors.grey1,
          display: 'flex',
          justifyContent: 'center',
          alignSelf: 'center',
          paddingTop: 15,
          paddingBottom: 15,
          paddingHorizontal: 15,
          borderRadius: 10,
          marginTop:12,
        }}>
        <CustomText label={item.title} />
        <Spacer height={5} />
        <ReadMore
          numberOfLines={5}
          seeMoreStyle={{
            color: colors.primary,
          }}
          seeMoreText={'Read More'}
          style={{color:colors.grey2, fontSize:12}}
          >
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        </ReadMore>
      </View>
      ))}
      <View style={{marginBottom:70}} />
      </ScrollView>
    </View>
  );
};

export default TipArticle;
