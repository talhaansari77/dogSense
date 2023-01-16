import { View } from "react-native";
import React from "react";
// import styled from "react-native-styled-components";

const CustomHeader = ({ LeftSide, Center, RightSide ,borderBottomWidth,borderBottomColor,paddingBottom}) => {
  return (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth:borderBottomWidth,
        borderBottomColor:borderBottomColor,
        paddingBottom:paddingBottom
        
        
      }}
    >
      {LeftSide ? <LeftSide /> : <View/>}
      {Center ? <Center /> : <View/>}
      {RightSide ? <RightSide /> : <View/>}
    </View>
  );
};

export default CustomHeader;

// const Row = styled(View, {
//   ...commonStyles.rowContainer,
//   justifyContent: "space-between",
// });
