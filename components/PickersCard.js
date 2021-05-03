import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";

import { images, SIZES, COLORS, FONTS } from '../constants'

const PickersCard=({item})=>{
    
    return(
        <TouchableOpacity
            style={{ marginBottom: SIZES.padding * 2 }}
        >
            <View
                style={{
                    marginBottom: SIZES.padding*2
                }}
            >
                <Image
                    source={item?item.photo:images.burger_restaurant_1}
                    resizeMode="cover"
                    style={{
                        width: 130,
                        height: 150,
                        borderRadius: SIZES.radius1
                    }}
                />

                <View
                    style={{
                        position: 'absolute',
                        bottom: -10,
                        height: 40,
                        width: 120,
                        left:5,
                        backgroundColor: COLORS.primary,
                        borderRadius:SIZES.radius1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        ...styles.shadow
                    }}
                >
                    <Text style={{ ...FONTS.h3,fontWeight:'bold',color:COLORS.white, }}>{item?item.offer:'50'}% Offer</Text>
                </View>
            </View>
            <View style={{width:150}}>
                <Text style={{...FONTS.h4,fontWeight:'bold',opacity:0.8}} >{item?item.name:''}</Text>
                <Text style={{...FONTS.body3}}>{item.duration}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
})

export default PickersCard;