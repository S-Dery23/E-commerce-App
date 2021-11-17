import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const homeScreen = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container1}>

            <View style={styles.iconContainer}>
                <Ionicons name="person-circle-outline" size={30} color="#00ce00" onPress={()=> {navigation.navigate("Log in")}} />
                <Ionicons name="cart-outline" size={30} color="#00ce00" onPress={()=> {navigation.navigate("cart")}}/>
            </View>
            <ScrollView style={styles.itemsCOntainer} >
                    <View style={styles.items}>
                        
                    <View style={styles.itemImg}>
                        
                        </View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}> Basketball</Text>
                            <Image source={require('../assets/bball.png')} />
                            <View style={styles.rating}>
                                <Ionicons name="star" size={16} color="#00ce00" />
                    
                            </View>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 2,560</Text>
                                <TouchableOpacity style={styles.PurchaseBtn} onPress={()=> {navigation.navigate("Details")}}>
                                    <Text style={styles.PurchaseBtnText}>Purchase</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}>
                            
                        </View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Gamepad</Text>
                            <Image source={require('../assets/gpad.jpg')} />
                            <View style={styles.rating}>
                                <Ionicons name="star" size={15} color="#00ce00" />
                                <Ionicons name="star" size={15} color="#00ce00" />
                                <Ionicons name="star" size={15} color="#00ce00" />
                                                               
                            </View>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 3,760</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>Purchase</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}>
                        
                        </View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Curtains</Text>
                            <Image source={require('../assets/rose.jpg')} />
                            <View style={styles.rating}>
                                <Ionicons name="star" size={18} color="#00ce00" />
                            </View>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 750</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText, font='bold'}>Purchase</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}>
                        
                        </View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}> Hoodie</Text>
                            <Image source={require('../assets/hood.jpg')} />     
                            <View style={styles.rating}>
                                <Ionicons name="star" size={17} color="#00ce00" />
                            </View>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 350</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText, font='bold'}>Purchase</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}>
                        
                        </View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Sneaker</Text>
                            <Image source={require('../assets/snk.jpg')} />
                                <View style={styles.rating}>
                                <Ionicons name="star" size={16} color="#00ce00" />
                            </View>
                            <View style={styles.priceBtn}>
                                <Text  style={styles.priceText}>GHC 50.99</Text>
                                
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText, font='bold'}>Purchase</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}>
                        
                        </View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Phone</Text>
                            <Image source={require('../assets/phone.jpg')} />
                            <View style={styles.rating}>
                                <Ionicons name="star" size={16} color="#00ce00" />
                                <Ionicons name="star" size={16} color="#00ce00" />
                            </View>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 4099.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText, font='bold'}>Purchase</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}>
                        
                        </View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Hat</Text>
                            <Image source={require('../assets/hat.jpg')} />
                            <View style={styles.rating}>
                                <Ionicons name="star" size={16} color="#00ce00" />
                            </View>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 90.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText, font='bold'}>Purchase</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}>
                        
                        </View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>Rolex</Text>
                            <Image source={require('../assets/rolex.jpg')} />
                            <View style={styles.rating}>
                                <Ionicons name="star" size={16} color="#00ce00" />
                                <Ionicons name="star" size={16} color="#00ce00" />
                                <Ionicons name="star" size={16} color="#00ce00" />
        
                            </View>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 300</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText, font='bold'}>Purchase</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}>
                        
                        </View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}>HeadPhone</Text>
                            <Image source={require('../assets/head.jpg')} />
                            <View style={styles.rating}>
                                <Ionicons name="star" size={16} color="#00ce00" />
                                <Ionicons name="star" size={16} color="#00ce00" />
                            </View>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 80.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText}>Purchase</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}>
                        
                        </View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName}> AlienWare</Text>
                            <Image source={require('../assets/ware.jpg')} />
                            <View style={styles.rating}>
                                <Ionicons name="star" size={16} color="#00ce00" />
                                <Ionicons name="star" size={16} color="#00ce00" />
                            </View>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 110.00</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText, font='bold'}>Purchase</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemImg}>
                        
                        </View>
                        <View style={styles.itemInfo}>
                            <Text style={styles.productName, font='bold'}> SweatPant</Text>
                            <Image source={require('../assets/pant.jpg')} />
                            <View style={styles.rating}>
                                <Ionicons name="star" size={16} color="#00ce00" />
                               
                            </View>
                            <View style={styles.priceBtn}>
                                <Text style={styles.priceText}>GHC 280.99</Text>
                                <TouchableOpacity style={styles.PurchaseBtn}>
                                    <Text style={styles.PurchaseBtnText, font='bold'}>Purchase</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
        </ScrollView>
    

        </View>
    )
}

export default homeScreen

const styles = StyleSheet.create({
    container1:{
        flex: 1,
        backgroundColor:"#ffebcd",
        justifyContent: "center",
        alignItems: 'center',
    },
    itemsCOntainer: {
        width: '100%',
        paddingVertical:10,
        marginTop: 8,
        
    },

    items:{
        width: "90%",
        flexDirection: 'row',
        paddingHorizontal:9,
        paddingVertical: 9,
        borderRadius: 27,
        marginTop: 5,
        marginBottom: 22,
        marginLeft: 18,
        backgroundColor: "#fff"
    },

    itemsCategories:{
        width: '90%',
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: "space-around",


    },
    cat:{
        width: "14%",
        // padding: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderColor: "#00ced1",
        borderRadius: 30,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    catText:{
        fontSize: 9,
    },

    active: {
        backgroundColor: '#fff8dc',
    },
    img:{
        width: "100%",
        height: 170,
        borderRadius: 20,
        marginRight: 20,
    },
    itemImg:{
        width: "40%",
        height: 170,
        // borderColor: "#a9a9a9",
        borderRadius: 20,
        // borderWidth: .5,
        marginRight: 20,
        backgroundColor: '#2f4f4f',
    },
    itemInfo:{
        marginLeft: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    productName:{
        fontSize: 17,
        fontWeight: 'bold',
        color: "#00ced1",
    },
    priceBtn:{
        flexDirection: "column",
        alignItems: 'center',
    },
    PurchaseBtn:{
        backgroundColor: "#588b8b",
        borderRadius: 30,
        marginTop: 10,
    },
    PurchaseBtnText:{
        color: "#fff",
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    priceText:{
        color: "#00ced1",
        fontWeight: "bold",
    },
    iconContainer:{
        width: "90%",
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 50,
    },

    searchContainer:{
        width:"65%",
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 3,
        backgroundColor: "#fff",
        marginTop: 10,
    },
    searchText:{
        width: '72%',
        paddingHorizontal: 20,
    },

    titleContainer:{
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        padding: 5,
        color: '#00ced1',
    },

    rating: {
        flexDirection: 'row',
        marginLeft: -15,
    },
})
