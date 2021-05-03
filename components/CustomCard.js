import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";

import { images, SIZES, COLORS, FONTS } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomCard=({item,categories,navigation,vertical})=>{

    const getCategoryNameById=(id) => {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    return(
        <TouchableOpacity style={styles.mainCont} 
            onPress={() => {
                    navigation.navigate("Restaurant", {item})
                }
            }
        >
            <View style={styles.cont}>
                <View>
                    <View
                        style={{
                            marginBottom: SIZES.padding
                        }}
                    >
                        <Image
                            source={item?item.photo:images.burger_restaurant_1}
                            resizeMode="cover"
                            style={{
                                width: vertical?140:115,
                                height: 165,
                                borderRadius: SIZES.radius1
                            }}
                        />

                        <View
                            style={{
                                position: 'absolute',
                                bottom: -10,
                                height: 40,
                                width: vertical?130:105,
                                left:5,
                                backgroundColor: COLORS.primary,
                                borderRadius:SIZES.radius1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                ...styles.shadow
                            }}
                        >
                            <Text style={{ fontSize:vertical?SIZES.h3:SIZES.h4,fontWeight:'bold',color:COLORS.white, }}>{item?item.offer:'50'}% Offer</Text>
                        </View>
                    </View>
                </View>
                <View style={{paddingHorizontal:SIZES.paddingText*3}}>
                    <Text style={{...FONTS.h4,fontWeight:'bold',opacity:0.8,paddingBottom:SIZES.paddingText1}}>{item.name}</Text>
                    <View style={{...styles.flexCont,paddingBottom:SIZES.paddingText1}}>
                        {
                            item.categories.map((categoryId,i) => {
                                return (
                                    <View
                                        style={styles.flexCont}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FONTS.body4 }}>{getCategoryNameById(categoryId)}</Text>
                                        {i+1!==item.categories.length?
                                            <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}>, </Text>
                                        :null}
                                    </View>
                                )
                            })
                        }
                    </View>
                    <Text style={{...FONTS.body4,paddingBottom:SIZES.paddingText1}}>{item.location.name}, {item.location.distance} kms</Text>
                    <View style={{...styles.flexCont,paddingBottom:SIZES.paddingText1}}>
                        <Icon 
                            name="star" 
                            size={14} 
                            style={{
                                opacity:0.6,
                                paddingRight:SIZES.paddingText,
                                paddingTop:6
                            }} 
                            color='black'
                        />
                        <Text style={{...FONTS.body5,fontWeight:'bold',color:'black',opacity:0.7,display:'flex',flexDirection:'row'}}>
                            {item.rating}
                            <View style={{position:'absolute'}}>
                                <Icon 
                                    name="circle" 
                                    size={5} 
                                    style={{
                                        opacity:0.6,
                                        paddingHorizontal:7,
                                        top:-3
                                    }} 
                                    color='black'
                                />
                            </View>
                            {item.duration}
                            <View style={{position:'absolute'}}>
                                <Icon 
                                    name="circle" 
                                    size={5} 
                                    style={{
                                        opacity:0.6,
                                        paddingHorizontal:7,
                                        top:-3
                                    }} 
                                    color='black'
                                />
                            </View>
                            {item.cost} for two
                        </Text>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            opacity:0.2,
                            borderBottomWidth: 1,
                            paddingVertical:SIZES.paddingText
                        }}
                    />
                    <View style={{...styles.flexCont,paddingTop:SIZES.padding}}>
                        <Image
                            source={images.discount}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25
                            }}
                        />
                        <Text style={{fontSize:SIZES.body4,paddingLeft:10,paddingTop:1}}>Use SWIGGYIT</Text>
                    </View>
                    
                </View>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    flexCont:{
        display:'flex',
        flexDirection:"row",
    },
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
    cont:{
        display:'flex',
        flexDirection:"row",
        paddingHorizontal:SIZES.paddingText,
        backgroundColor:COLORS.white,
        marginHorizontal:SIZES.paddingText
    },
    mainCont:{
        backgroundColor:COLORS.white,
        paddingBottom:20,
    },
})

export default CustomCard;