import {View, Text, useWindowDimensions} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Spacer} from '../../../components/Spacer';
import TipVideos from './TipVideos/TipVideos';
import TipArticle from './TipArticle/TipArticle';
import TriHeader from '../../../components/TriHeader';
import {colors} from '../../../utils/Colors';
import {Divider} from 'react-native-elements';
import BottomTabs from '../../../components/BottomTabs';

const FirstRoute = () => <TipVideos />;

const SecondRoute = () => <TipArticle />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const Tips = ({navigation}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Videos'},
    {key: 'second', title: 'Articles'},
  ]);

  _renderTabBar = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={{
          backgroundColor: colors.primary,
          width: '16%',
          marginLeft: 75,
          height: 4,
          borderRadius: 1,
        }}
        style={{backgroundColor: colors.white}}
        renderLabel={this._renderLabel}
        labelStyle={{
          color: 'black',
          textTransform: 'none',
          fontSize: 16,
        }}
        activeColor={colors.primary}
      />
    );
  };
  return (
    <View style={{flex:1, backgroundColor:colors.white}}>
      <Spacer height={50} />
      <View style={{width: 'auto', paddingHorizontal: 10, backgroundColor:colors.white}}>
        <TriHeader />
      </View>
      <Spacer height={20} />
      <Divider width={1.5} color={colors.grey} />

      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={_renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width, backgroundColor: colors.white}}
        style={{backgroundColor: colors.white}}
      />
      <BottomTabs navigation={navigation} selected={2}/>
    </View>
  );
};

export default Tips;
