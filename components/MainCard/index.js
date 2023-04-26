import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MainCard = (props) => {

    return(
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{props.title}</Text>
            <Ionicons name="ios-sunny" style={styles.cardIcon} size={35} color="black" />
            <Text style={styles.text}>{props.temperature}</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    card:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor: '#afafaf',
        margin:12,
        width:100,
        height:170,
    },
    cardTitle:{
        color: 'white',
        margin:15,
        fontSize:20
    },
    cardIcon:{
        color:'#fff'
    },
    temperatureText:{
        marginTop:8
    },
})

export default MainCard