import React from 'react';
import {FlatListSlider} from 'react-native-flatlist-slider';
import { images, COLORS } from '../constants'
import {
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    Platform,
} from 'react-native';

const Slider=()=>{
    const imageData = [
        {
            banner:images.banner1
        },
        {
            banner:images.banner2
        },
        {
            banner:images.banner3
        },
    ]

    const Preview = ({
        item,
        imageKey,
        onPress,
        active,
      }) => {
        return (
            <TouchableOpacity
                style={[styles.videoContainer]}
                onPress={() => onPress(item)}
            >
                <View style={[styles.imageContainer, styles.shadow]}>
                    <Image
                        style={[styles.videoPreview, active ? {} : {height: 155}]}
                        source={item[imageKey]}
                    />
                </View>
            </TouchableOpacity>
        );
      }

    return(
        <FlatListSlider 
          data={imageData}
          imageKey={'banner'}
          local
          timer={2000}
          width={300}
          component={<Preview />}
          indicatorActiveWidth={10}
          indicatorActiveColor={COLORS.primary}
          animation
          onPress={item => {console.log(item)}}
          contentContainerStyle={{paddingHorizontal: 16}}
        />
    )
       
}

const styles = StyleSheet.create({
    videoContainer: {
      width: 300,
      paddingVertical: 28,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 20,
    },
    videoPreview: {
      width: 300,
      height: 155,
      borderRadius: 8,
      resizeMode: 'cover',
      
    },
    imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    shadow: {
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.1,
          shadowRadius: 5,
        },
        android: {
          elevation: 5,
        },
      }),
    },
  });
  

export default Slider;