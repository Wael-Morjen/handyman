import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider, Avatar,Button, VStack, Text, Input, ScrollView,extendTheme, Heading, HStack, Select } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { isLoaded, isLoading, useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import {supabase} from '../lib/supabase'
import Carpenter from '../media/carpenter.svg';
import Painter from '../media/painter.svg';
import Gardener from '../media/gardener.svg';
import Plumber from '../media/plumber.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function MainScreen({ navigation }) {



  const [loaded] = useFonts({
    'nexa': require('../assets/fonts/NexaBold.otf'),
    'nexaLight': require('../assets/fonts/NexaLight.otf'),
    'nexaThin': require('../assets/fonts/NexaThin.otf'),
    'nexaRegular': require('../assets/fonts/NexaRegular.otf'),
    'nexaHeavy': require('../assets/fonts/NexaHeavy.otf'),
    'nexaBook': require('../assets/fonts/NexaBook.otf'),
    'nexaBlack': require('../assets/fonts/NexaBlack.otf'),
  });

  const theme = extendTheme({

    fonts: {
      heading: 'nexaBlack',
      body: 'nexa',
      mono: 'nexaThin',

    },
  });
  const [usr, setUsr] = useState();
  const [avtr, setAvtr] = useState(" ");
  useEffect(()=>{
    const user = supabase.auth.user()
    setUsr(user);
    if (usr){
        setAvtr(usr.email[0]);
    }
  },[usr,avtr])

  let colorstab = ["green.500", "red.500", "violet.500", "pink.500","green.700", "red.700", "violet.700", "pink.700","green.200", "red.200", "violet.200", "pink.200"]

  return (
    <NativeBaseProvider theme={theme}>

      <View style={styles.container}>
      <View style={{position: 'absolute', top: '5%', alignSelf: 'flex-start', right: '5%' }}>
      <Avatar bg={colorstab[Math.floor(Math.random() * colorstab.length)]} mr="1" onStartShouldSetResponder={()=>{alert(JSON.stringify(supabase.auth.user()))}}>
        {avtr}
      </Avatar>
      </View>
      <ScrollView w={'100%'} height={'1%'} marginTop={'30%'} >
        <View style={{width:'100%', display:'flex',flexDirection:'row', height:140,left:-50,backgroundColor:'#f9b126', borderRadius:30}}  onStartShouldSetResponder={() => navigation.navigate('GardenerScreen')}>
        <Gardener height={120} style={{ marginLeft:-60, marginTop:10}} />
        <Text style={{display:'flex', alignSelf:'flex-start', top:'11%', left:-110}} color={'#151e34'} fontSize={32}>Gardener</Text>
        </View>
        
        

        <View style={{width:'100%', right:-50, display:'flex',flexDirection:'row',marginTop:30,height:140, backgroundColor:'#cbeddd', borderRadius:30}}  onStartShouldSetResponder={() => navigation.navigate('PainterScreen')}>
        <Text style={{display:'flex', alignSelf:'flex-start', top:'11.5%', left:50}} color={'#363e8d'} fontSize={32}>Painter</Text>
        <Painter height={120} style={{ marginLeft:-30, marginTop:10}}/>  
        </View>

        

        <View style={{width:'100%', display:'flex',flexDirection:'row',height:140, marginTop:30,left:-50,backgroundColor:'#f6836b', borderRadius:30}}  onStartShouldSetResponder={() => navigation.navigate('CarpenterScreen')}>
        <Carpenter height={120} style={{ marginLeft:-60, marginTop:10}}/>
        <Text style={{display:'flex', alignSelf:'flex-start',top:'11%', left:-110}} color={'#30526a'} fontSize={32}>Carpenter</Text>
        </View>
        

        <View style={{width:'100%', right:-50, display:'flex',flexDirection:'row',marginTop:30,height:140, backgroundColor:'#caeefb', borderRadius:30}}  onStartShouldSetResponder={() => navigation.navigate('PlumberScreen')}>
        <Text style={{display:'flex', alignSelf:'flex-start', top:'11.5%', left:50}} color={'#3d3361'} fontSize={32}>Plumber</Text>
        <Plumber height={120} style={{ marginLeft:-50, marginTop:20}}/>
        </View>
        
        </ScrollView>
        
        

      </View>
        
    </NativeBaseProvider>
  );
}


const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#2196F3'
},
});
