import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome';
import PickersCard from '../components/PickersCard'
import Slider from '../components/Slider'
import CustomCard from '../components/CustomCard'

const Home = ({ navigation }) => {

    const categoryData = [
        {
            id: 1,
            name: "Rice",
            icon: icons.rice_bowl,
        },
        {
            id: 2,
            name: "Noodles",
            icon: icons.noodle,
        },
        {
            id: 3,
            name: "Hot Dogs",
            icon: icons.hotdog,
        },
        {
            id: 4,
            name: "Salads",
            icon: icons.salad,
        },
        {
            id: 5,
            name: "Burgers",
            icon: icons.hamburger,
        },
        {
            id: 6,
            name: "Pizza",
            icon: icons.pizza,
        },
        {
            id: 7,
            name: "Snacks",
            icon: icons.fries,
        },
        {
            id: 8,
            name: "Sushi",
            icon: icons.sushi,
        },
        {
            id: 9,
            name: "Desserts",
            icon: icons.donut,
        },
        {
            id: 10,
            name: "Drinks",
            icon: icons.drink,
        },
    ]

    const affordable = 1
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "Cholan Mess",
            rating: 4.8,
            categories: [5, 7],
            priceRating: affordable,
            photo: images.burger_restaurant_1,
            duration: "20 mins",
            offer:50,
            location: {
                name:'vengal',
                distance:2.3
            },
            courier: {
                avatar: images.avatar_1,
                name: "Amy"
            },
            cost:180,
            menu: [
                {
                    menuId: 1,
                    name: "Crispy Chicken Burger",
                    photo: images.crispy_chicken_burger,
                    description: "Burger with crispy chicken, cheese and lettuce",
                    calories: 200,
                    price: 10
                },
                {
                    menuId: 2,
                    name: "Crispy Chicken Burger with Honey Mustard",
                    photo: images.honey_mustard_chicken_burger,
                    description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 3,
                    name: "Crispy Baked French Fries",
                    photo: images.baked_fries,
                    description: "Crispy Baked French Fries",
                    calories: 194,
                    price: 8
                }
            ]
        },
        {
            id: 2,
            name: "Hawaiian",
            rating: 4.8,
            categories: [2, 4, 6],
            priceRating: expensive,
            photo: images.pizza_restaurant,
            duration: "25 mins",
            offer:10,
            cost:250,
            location: {
                name:'vengal',
                distance:1.3
            },
            courier: {
                avatar: images.avatar_2,
                name: "Jackson"
            },
            menu: [
                {
                    menuId: 4,
                    name: "Hawaiian Pizza",
                    photo: images.hawaiian_pizza,
                    description: "Canadian bacon, homemade pizza crust, pizza sauce",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 5,
                    name: "Tomato & Basil Pizza",
                    photo: images.pizza,
                    description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
                    calories: 250,
                    price: 20
                },
                {
                    menuId: 6,
                    name: "Tomato Pasta",
                    photo: images.tomato_pasta,
                    description: "Pasta with fresh tomatoes",
                    calories: 100,
                    price: 10
                },
                {
                    menuId: 7,
                    name: "Mediterranean Chopped Salad ",
                    photo: images.salad,
                    description: "Finely chopped lettuce, tomatoes, cucumbers",
                    calories: 100,
                    price: 10
                }
            ]
        },
        {
            id: 3,
            name: "Chicago Style",
            rating: 4.8,
            categories: [3],
            offer:30,
            cost:350,
            priceRating: expensive,
            photo: images.hot_dog_restaurant,
            duration: "28 mins",
            location: {
                name:'vengal',
                distance:2.9
            },
            courier: {
                avatar: images.avatar_3,
                name: "James"
            },
            menu: [
                {
                    menuId: 8,
                    name: "Chicago Style Hot Dog",
                    photo: images.chicago_hot_dog,
                    description: "Fresh tomatoes, all beef hot dogs",
                    calories: 100,
                    price: 20
                }
            ]
        },
        {
            id: 4,
            name: "Sushi sets",
            rating: 4.8,
            categories: [8],
            priceRating: expensive,
            photo: images.japanese_restaurant,
            duration: "32 mins",
            offer:20,
            cost:100,
            location: {
                name:'vengal',
                distance:2.1
            },
            courier: {
                avatar: images.avatar_4,
                name: "Ahmad"
            },
            menu: [
                {
                    menuId: 9,
                    name: "Sushi sets",
                    photo: images.sushi,
                    description: "Fresh salmon, sushi rice, fresh juicy avocado",
                    calories: 100,
                    price: 50
                }
            ]
        },
        {
            id: 5,
            name: "Kolo Mee",
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.noodle_shop,
            duration: "40 mins",
            offer:25,
            cost:180,
            location: {
                name:'vengal',
                distance:3.5
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Kolo Mee",
                    photo: images.kolo_mee,
                    description: "Noodles with char siu",
                    calories: 200,
                    price: 5
                },
                {
                    menuId: 11,
                    name: "Sarawak Laksa",
                    photo: images.sarawak_laksa,
                    description: "Vermicelli noodles, cooked prawns",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 12,
                    name: "Nasi Lemak",
                    photo: images.nasi_lemak,
                    description: "A traditional Malay rice dish",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 13,
                    name: "Nasi Briyani with Mutton",
                    photo: images.nasi_briyani_mutton,
                    description: "A traditional Indian rice dish with mutton",
                    calories: 300,
                    price: 8
                },

            ]
        },
        {

            id: 6,
            name: "Teh C Peng",
            rating: 4.9,
            categories: [9, 10],
            offer:10,
            cost:260,
            priceRating: affordable,
            photo: images.kek_lapis_shop,
            duration: "45 mins",
            location: {
                name:'vengal',
                distance:4.3
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 12,
                    name: "Teh C Peng",
                    photo: images.teh_c_peng,
                    description: "Three Layer Teh C Peng",
                    calories: 100,
                    price: 2
                },
                {
                    menuId: 13,
                    name: "ABC Ice Kacang",
                    photo: images.ice_kacang,
                    description: "Shaved Ice with red beans",
                    calories: 100,
                    price: 3
                },
                {
                    menuId: 14,
                    name: "Kek Lapis",
                    photo: images.kek_lapis,
                    description: "Layer cakes",
                    calories: 300,
                    price: 20
                }
            ]
        }
    ]

    const renderData=[{id:1}]

    const [categories, setCategories] = React.useState(categoryData)
    const [restaurants, setRestaurants] = React.useState(restaurantData)

    const RenderHeader =() =>{
        return (
            <View style={{ flexDirection: 'row', height: 70,backgroundColor:COLORS.white,paddingTop:10 }}>
                <TouchableOpacity
                    style={{
                        width: '73%',
                        paddingLeft: SIZES.padding,
                        justifyContent: 'center',
                        display:'flex'
                    }}
                >
                    <View style={{display:'flex',flexDirection:'row'}}>
                        <Image
                            source={icons.pin}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                        <Text style={{fontSize:SIZES.h2,paddingLeft:10,fontWeight:'bold'}}>Home</Text>
                    </View>
                    <Text style={{
                            paddingTop:5,
                            ...FONTS.body3,
                            paddingLeft:10,
                            paddingBottom:10
                        }}>5, opposite to sri sai towers</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center',
                        display:'flex',
                        flexDirection:'row'
                    }}
                >
                    <View>
                        <Image
                            source={images.discount1}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>
                    <Text style={{fontSize:SIZES.h2,paddingLeft:10,fontWeight:'bold'}}>Offers</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const TopPost=()=>{
        return(
            <View style={styles.mainCont}>
                <View style={styles.cont}>
                    <View style={{width:'58%',paddingLeft:SIZES.padding}}>
                        <Text style={{...FONTS.h1,fontWeight:'bold',opacity:0.8}}>Big Brands Great Discounts</Text>
                        <Text style={{...FONTS.h3,paddingTop:SIZES.padding}}>Up to <Text style={{...FONTS.h2,opacity:0.8,fontWeight:'bold'}}>60% OFF</Text> on the best of brands & more!</Text>
                    </View>
                    <Image
                        source={icons.drink}
                        resizeMode="contain"
                        style={{
                            width: 200,
                            height: 100
                        }}
                    />
                </View>
                <TouchableOpacity>
                    <Text style={styles.button}>ORDER NOW!</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const TopPicksUser=()=>{

        const renderItem = ({ item }) => {
            return (
                <PickersCard item={item}/>
            )
        }

        return(
            <View style={styles.mainCont}>
                <View
                    style={{
                        paddingRight: SIZES.padding * 2,
                        display:'flex',
                        flexDirection:'row',
                        paddingLeft:SIZES.padding*2
                    }}
                >
                    <View>
                        <Icon 
                            name="thumbs-o-up" 
                            size={25} 
                            style={{
                                paddingTop:SIZES.padding2,
                                paddingLeft:10
                            }} 
                            color='black'
                        />
                    </View>
                    <Text style={{fontSize:SIZES.h1,paddingLeft:SIZES.padding2,fontWeight:'bold'}}>Top Picks For You</Text>
                </View>
                <FlatList
                    data={restaurants}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2,paddingHorizontal:SIZES.padding * 2 }}
                />
            </View>
        )
    }

    const RenderMainCategories=()=> {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        borderRadius: SIZES.radius1,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                    }}
                >
                    <View
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 50,
                                height: 50
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: COLORS.black,
                            ...FONTS.h4
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: SIZES.padding * 2,backgroundColor:COLORS.white }}>
                <Text style={{ ...FONTS.h2,fontWeight:'bold' }}>Popular cuisines around you</Text>

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    const ViewAllRestaurans=()=>{
        return(
            <View style={styles.mainCont}>
                <View style={{
                    width:'90%',
                    height:180,
                    backgroundColor:COLORS.primary,
                    alignSelf:'center',
                    borderRadius:10,
                }}>
                    <View style={{paddingLeft:SIZES.padding*2,paddingTop:SIZES.padding*3}}>
                        <Text style={{color:COLORS.white,...FONTS.h1,fontWeight:'bold',opacity:0.8}}>Restaurants</Text>
                        <Text style={{...FONTS.h3,color:COLORS.white,paddingTop:SIZES.padding}}>No-contact delivery available</Text>
                    </View>
                    <TouchableOpacity style={{display:'flex',flexDirection:'row',paddingTop:5,position:'absolute',bottom:0,width:'100%',height:40,backgroundColor:COLORS.darkOrange,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                        <Text style={{color:COLORS.white,paddingLeft:SIZES.padding*2,fontSize:SIZES.h3}}>View All</Text>
                        <Icon name="arrow-right" size={20} style={{paddingTop:5,paddingLeft:20,fontSize:16,fontWeight:'normal'}} color="#ffffff" />
                    </TouchableOpacity>
                    <Image
                        source={icons.drink}
                        resizeMode="contain"
                        style={{
                            position:'absolute',
                            width: 100,
                            height: 160,
                            top:0,
                            right:0
                        }}
                    />
                </View>
            </View>
        )
    }

    const RenderRestaurantList=()=> {
        const renderItem = ({ item }) => (
            <CustomCard item={item} categories={categories} navigation={navigation}/>
        )

        return (
            <View style={{paddingBottom:SIZES.padding2*5,backgroundColor:COLORS.white}}>
                <View style={{paddingHorizontal:SIZES.padding*2,backgroundColor:COLORS.white,paddingBottom:SIZES.padding}}>
                    <Text style={{...FONTS.h2,fontWeight:'bold'}}>All Restaurants Nearby</Text>
                    <Text style={{...FONTS.h4,paddingTop:SIZES.paddingText}}>Discover unique tastes near you</Text>
                </View>
                <FlatList
                    data={restaurants}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{
                        paddingHorizontal: SIZES.padding * 2,
                        paddingBottom: 30
                    }}
                />
                <TouchableOpacity style={{marginHorizontal:SIZES.padding*2,height:50,borderRadius:SIZES.radius1,paddingHorizontal:SIZES.padding,backgroundColor:COLORS.primary}}>
                    <Text style={{fontSize:SIZES.h2,fontWeight:'bold',color:COLORS.white,textAlign:'center',paddingVertical:SIZES.padding}}>See all restaurants</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const Footer=()=>{
        return(
            <View style={{backgroundColor:COLORS.lightGray4,paddingVertical:SIZES.padding2*5,paddingHorizontal:SIZES.padding*2}}>
                
                    <Image
                        source={images.bowl}
                        resizeMode="contain"
                        style={{
                            position:'absolute',
                            width: 100,
                            height: 150,
                            top:'30%',
                            alignSelf:'center',
                            
                        }}
                    />
                
                <Text style={styles.footerText}>LIVE</Text>
                <Text style={styles.footerText}>FOR</Text>
                <Text style={styles.footerText}>FOOD</Text>
                <Text style={{paddingLeft:SIZES.paddingText,paddingTop:SIZES.padding*4,color:'black',opacity:0.6,fontSize:SIZES.body3}}>MADE BY FOOD LOVERS</Text>
                <Text style={{paddingLeft:SIZES.paddingText,paddingBottom:SIZES.padding*4,color:'black',opacity:0.6,fontSize:SIZES.body3}}>SWIGGY HO, BANGALORE</Text>
            </View>
        )
    }

    const RenderFreeDelivery=()=> {
        const renderItem = ({ item }) => (
            <View>
                <CustomCard item={item} categories={categories} navigation={navigation}/>
                <CustomCard item={item} categories={categories} navigation={navigation}/>
            </View>
        )

        return (
            <View style={{backgroundColor:COLORS.white}}>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                    <View>
                        <View
                            style={{
                                display:'flex',
                                flexDirection:'row'
                            }}
                        >
                            <Image
                                source={images.discount}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    marginTop:4,
                                    marginRight:SIZES.padding
                                }}
                            />
                            <Text style={{...FONTS.h2,fontWeight:'bold'}}>Free Delivery</Text>
                        </View>
                        <Text style={{...FONTS.h4,paddingTop:SIZES.paddingText}}>Delicious Tastes, Delivered Free</Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={{
                                display:'flex',
                                flexDirection:'row'
                            }}
                        >
                            <Text style={{...FONTS.h4,fontWeight:'bold',paddingTop:7}}>SEE ALL</Text>
                            <Icon 
                                name="chevron-circle-right" 
                                size={25} 
                                style={{
                                    paddingTop:SIZES.paddingText,
                                    paddingLeft:SIZES.paddingText*3
                                }} 
                                color={COLORS.primary}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    data={restaurants}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <RenderHeader />
            <FlatList
                data={renderData}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={()=>
                    <View style={{width:'100%'}}>
                        <TopPost />
                        <ViewAllRestaurans />
                        <TopPicksUser />
                        <Slider />
                        <RenderMainCategories />
                        <RenderFreeDelivery />
                        <RenderRestaurantList />
                        <Footer />
                    </View>
                }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    footerText:{
        fontSize:80,
        fontWeight:'bold',
        color:'black',
        opacity:0.3,
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    cont:{
        display:'flex',
        flexDirection:"row",
        padding:SIZES.padding,
        backgroundColor:COLORS.white
    },
    mainCont:{
        backgroundColor:COLORS.white,
        paddingBottom:20
    },
    button:{
        width:160,
        height:40,
        borderRadius:10,
        color:COLORS.primary,
        borderColor:COLORS.darkgray,
        borderWidth:1,
        marginLeft:SIZES.padding*2,
        fontSize:SIZES.h2,
        alignItems:'center',
        justifyContent:'center',
        paddingTop:4,
        textAlign:'center',
        fontWeight:'bold'
    }
})

export default Home