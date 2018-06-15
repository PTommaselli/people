import React from 'react';
import { View , Text , StyleSheet } from 'react-native';
 

//functional component || stateless
const Header = (props) => (
    <View style={ style.container }>
<Text style={ style.title } >{ props.title }</Text>
    </View>
);

//styleSheet
const style = StyleSheet.create({
    container:{
        marginTop: 24,
        backgroundColor: '#e24d4d',
    
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 40,
        color: '#fff',
    }
});

export default Header;