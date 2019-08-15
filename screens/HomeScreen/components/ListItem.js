import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, ImageBackground, Text } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import {imageLinks} from '../../../constants/coinIcon';
import Colors from '../../../constants/Colors';
export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}       
    }
    
    render() {
        const {coin_name, symbol, volume, cap, price_usd, percent_change_1h, percent_change_24h, percent_change_7d} = this.props
        return (
            <View>
            <LinearGradient 
                colors={[Colors.gradientThree, Colors.gradientTwo,Colors.gradientOne]} 
                start={[-1,-2,-5]}
                end={[1,3,2]}
                style={styles.container}
            >
                <View style={styles.firstItem}>
                    <Image 
                        source={{uri : imageLinks[symbol]}} 
                        style={styles.coinIcon}
                    />
                    <View>
                        <Text style={styles.coinName}>
                            {symbol}
                        </Text>
                        <Text style={styles.price}>
                            <Ionicons style={styles.price} name="md-logo-usd"/> 
                            { parseFloat(price_usd).toFixed(4) }
                        </Text>
                    </View>
                    
                </View>
                <View style={styles.secondItem}>
                    <Text style={styles.cap}>
                        Cap <Ionicons style={styles.price} name="md-logo-usd"/>{parseFloat(cap)}
                    </Text>
                    <Text style={styles.price}>
                        Vol {parseFloat(volume).toFixed(2)}
                    </Text>
                </View>
                
                <View style={styles.secondItem}>
                {(Math.sign(percent_change_1h) == 1) ?  
                <View>
                    <Ionicons style={styles.arrowUp} name="md-arrow-up"/> 
                    <Ionicons style={styles.arrowUp} name="md-arrow-up"/> 
                </View>
                :
                <View>
                    <Ionicons style={styles.arrowDown} name="md-arrow-down"/> 
                    <Ionicons style={styles.arrowDown} name="md-arrow-down"/>  
                </View>
                }
                    
                </View>
                
                <View/>
            </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'row',
        backgroundColor: 'transparent',
        marginBottom:20, 
        borderRadius:10,
        elevation:5,
        minHeight:75,
        padding:4,
        paddingRight: -10,
    }, 
    firstItem:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignSelf:'center',
        marginRight:9,
    },
    coinIcon:{
        width:50,
        height:50,
        justifyContent:'center',
        alignSelf:'center',
        resizeMode:'contain',
        marginRight:9,
    },
    secondItem:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignSelf:'center',
        marginRight:9,
    },
    coinName:{
        fontSize:18,
        color: '#ddd',
    }, 
    cap:{
        fontSize:16,
        color: '#ddd',
        fontWeight:'900', 
    }, 
    price:{
        fontSize:11,
        color: '#ddd',
    },
    arrowUp:{ 
        fontSize:23, color:Colors.WHITE
    },
    arrowDown:{ 
        fontSize:23, color:Colors.RED
    }
});