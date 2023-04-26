import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useEffect} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import MainCard from './components/MainCard';

export default function App() {
  
  
  const [currentTemperature, setCurrentTemperature] = useState('23')
  const [location, setLocation] = useState('BR, Brasília')
  
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.refreshButton}>
      <EvilIcons name="refresh" size={24} color="black" />
      </TouchableOpacity>
      <Ionicons name="ios-sunny" size={35} color="black" />
      <View style={styles.temperature}>
        <Text style={styles.temperatureText}>{currentTemperature}</Text>
        <Text style={styles.temperatureText}>ºC</Text>
      </View>

      

      <View style={styles.cardView}>
        <MainCard title={'Dia'} backgroundColor={'#ddedfa'} temperature={'19ºC'} icon={1}></MainCard>
        <MainCard title={'Tarde'} backgroundColor={ '#008081'} temperature={'30ºC'}></MainCard>
        <MainCard title={'Noite'} backgroundColor={ '#024a7f'} temperature={'22ºC'}></MainCard>
      </View>

      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5d6871',
    alignItems: 'center',
    marginTop:0
  },
  temperature:{
    alignItems:"center",
    flexDirection:'row',
    marginTop:50,
  },
  temperatureText:{
    fontSize:30,
    fontWeight:'bold',
  },
  refreshButton:{
    position:'relative',
    margin: 50,
    alignSelf: 'flex-start'
  },
  cardView:{
    flexDirection: 'row',
    alignItems:'center',
    marginTop:20
  },
  });
