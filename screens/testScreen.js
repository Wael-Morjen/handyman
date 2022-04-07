import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider,Button,extendTheme,VStack ,HStack, Heading} from "native-base";
import { AntDesign } from '@expo/vector-icons';
import Welcomepic from '../media/1.svg';
import { isLoaded, isLoading, useFonts } from 'expo-font';
import { useEffect } from 'react';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/micah';

export default function TestScreen({ navigation }) {
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
      
      

      if (!isLoaded('nexa')) {
        return <Text>LOADING</Text>;
      }
      else{ 

        let svg = createAvatar(style, {
          
          mouth:'smile',
          hairProbability:50,
          eyes:'round',
          shirtColor:'#ff00ff'
          // ... and other options
        });
  
  return (
    <NativeBaseProvider theme={theme}>
    <View style={styles.container}>
    <Text>eds</Text>
    <Button onPress={() => {alert('eds')}}>go</Button>
    
    </View>

    </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff00ff'
  },
});
