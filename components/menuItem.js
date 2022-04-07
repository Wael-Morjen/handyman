import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider,Button,VStack ,HStack, extendTheme,Text, Avatar} from "native-base";
import { AntDesign } from '@expo/vector-icons';
import {useFonts } from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';

function MenuItem(props) {
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
    let colorstab = ["green.500", "red.500", "violet.500", "pink.500","green.700", "red.700", "violet.700", "pink.700","green.200", "red.200", "violet.200", "pink.200"]


    return ( 
    <NativeBaseProvider theme={theme}>
    <View style={{width:'100%', marginTop:10,marginBottom:20,height:150, display:'flex',justifyContent:'center',paddingLeft:15,backgroundColor:'#fff', borderRadius:15, shadowColor:'#000', elevation:10}} onStartShouldSetResponder={()=>{alert("1")}}>
      <View style={{display:'flex',flexDirection:'row'}}>
        <Avatar bg={props.avcolor} w={75} h={75}>{props.name[0]}</Avatar>
          <View  style={{marginLeft:20}}>
            <Text fontSize={24} style={{marginBottom:10}}>{props.name}</Text>
              <View style={{display:'flex', flexDirection:'row'}}>
                <MaterialIcons name="home" size={20} color="#aaa"/>
                <Text color={'#aaa'} style={{marginLeft:0}}> {props.city}     •    </Text>
                <MaterialIcons name="phone" size={20} color="#aaa"/>
                <Text color={'#aaa'} style={{marginLeft:0}}> {props.phone}</Text>
              </View>
          </View>
      </View>
    </View>
    </NativeBaseProvider>
     );
}


export default MenuItem;

