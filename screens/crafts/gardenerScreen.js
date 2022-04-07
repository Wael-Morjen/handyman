import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider,Text,Button,VStack ,HStack, ScrollView,extendTheme,Heading} from "native-base";
import { AntDesign } from '@expo/vector-icons';
import { supabase } from '../../lib/supabase';
import { isLoaded, isLoading, useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import MenuItem from '../../components/menuItem';
export default function Gardener({ navigation }) {
    const [loaded] = useFonts({
        'nexa': require('../../assets/fonts/NexaBold.otf'),
        'nexaLight': require('../../assets/fonts/NexaLight.otf'),
        'nexaThin': require('../../assets/fonts/NexaThin.otf'),
        'nexaRegular': require('../../assets/fonts/NexaRegular.otf'),
        'nexaHeavy': require('../../assets/fonts/NexaHeavy.otf'),
        'nexaBook': require('../../assets/fonts/NexaBook.otf'),
        'nexaBlack': require('../../assets/fonts/NexaBlack.otf'),
      });

      const [rows, setRows] = useState();

      const theme = extendTheme({

        fonts: {
          heading: 'nexaBlack',
          body: 'nexa',
          mono: 'nexaThin',
    
        },
      });
      
      async function loadData(){
        const { data, error } = await supabase
          .from('users')
          .select()
          .match({job: 'gardener'});
          //alert("data:"+JSON.stringify(data));
          setRows(data);
        }
  
        useEffect(()=>{
          loadData();
        })
        let wsk=[]

        if (rows){
          rows.map(worker => {
            wsk.push(<MenuItem name={worker.name} city={worker.city} phone={worker.phone} avcolor="#64470f"/>)
          })
        }


      if (!isLoaded('nexa')) {
        return <Text>LOADING</Text>;
      }
      else{ 
  
  return (
    <NativeBaseProvider theme={theme}>
    <View style={styles.container}>
    <Text fontSize={50} style={{fontFamily: 'nexaHeavy', color: '#64470f',position:'absolute', top:70,left:20}}>Gardeners</Text>
    <ScrollView w={'100%'} marginTop={'40%'} height={'100%'}>
    <View style={{display:'flex',height:'100%',width:'100%',top:'0%',paddingHorizontal:20}}>
    {wsk}
    
    </View>
    </ScrollView>
    </View>

    </NativeBaseProvider>
  );
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9b126'
  },
});
