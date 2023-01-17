import { View, Text, Button } from 'react-native'
import React, {useRef} from 'react';
// import YoutubePlayer, {YoutubeIframeRef} from "react-native-youtube-iframe";
import { Spacer } from '../../../../components/Spacer'
import CustomButton from '../../../../components/CustomButton'

const TipVideos = () => {
  const playerRef = useRef();
  return (
    <View>
        {/* <YoutubePlayer
        ref={playerRef}
        height={400}
        width={400}
        videoId={'AVAc1gYLZK0'}
      />

    <Button
        title="log details"
        onPress={() => {
          playerRef.current?.getCurrentTime().then(
            currentTime => console.log({currentTime})
          );

          playerRef.current?.getDuration().then(
            getDuration => console.log({getDuration})
          );
        }}
      /> */}
    </View>
  )
}

export default TipVideos