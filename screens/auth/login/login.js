import { StyleSheet, View,ToastAndroid } from 'react-native';
import { NativeBaseProvider, Button, VStack, Text, Input, extendTheme, Heading,useToast } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { isLoaded, isLoading, useFonts } from 'expo-font';
import { useState } from 'react';
import {supabase} from '../../../lib/supabase'



export default function Login({ navigation }) {

  const toast = useToast();

  const [loaded] = useFonts({
    'nexa': require('../../../assets/fonts/NexaBold.otf'),
    'nexaLight': require('../../../assets/fonts/NexaLight.otf'),
    'nexaThin': require('../../../assets/fonts/NexaThin.otf'),
    'nexaRegular': require('../../../assets/fonts/NexaRegular.otf'),
    'nexaHeavy': require('../../../assets/fonts/NexaHeavy.otf'),
    'nexaBook': require('../../../assets/fonts/NexaBook.otf'),
    'nexaBlack': require('../../../assets/fonts/NexaBlack.otf'),
  });

  const theme = extendTheme({

    fonts: {
      heading: 'nexaBlack',
      body: 'nexa',
      mono: 'nexaThin',

    },
  });

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const handleShow = () => setShow(!show);



  async function signUpWithEmail() {
    const { user, error } = await supabase.auth.signIn({
      email: email,
      password: pass,
    });
    await check();
}

async function check(){
  const temp = await supabase.auth.user();
  if (temp){
    navigation.navigate('MainScreen')
  }
  else{
    ToastAndroid.show('error logging in!', ToastAndroid.SHORT);
    
  }
  //alert(JSON.stringify(temp));
}

  if (!isLoaded('nexa')) {
    return <Text>LOADING</Text>;
  }
  else {

    return (
      <NativeBaseProvider theme={theme}>

        <View style={styles.container}>

          <VStack space={10} alignItems="center" style={{ width: '100%' }}>
            <Text fontSize={50} style={{ fontFamily: 'nexaHeavy', color: '#fff', position: 'absolute', top: -100, alignSelf: 'flex-start', left: '10%' }}>Login</Text>
            <Input onChangeText={e => setEmail(e)} value={email} leftElement={<MaterialIcons name="alternate-email" size={24} color="black" style={{ paddingLeft: 15 }} />} borderRadius={30} bgColor={'#fff'} w={"80%"} h={55} borderColor={'#000'} borderWidth={2} variant="filled" size="lg" placeholder="Your email..." />
            <Input onChangeText={e => setPass(e)} value={pass} type={show ? "text" : "password"} leftElement={<MaterialIcons name="lock" size={24} color="black" style={{ paddingLeft: 15 }} />} borderRadius={30} bgColor={'#fff'} w={"80%"} h={55} borderColor={'#000'} borderWidth={2} variant="filled" size="lg" placeholder="Your password..." InputRightElement={<MaterialIcons name={show ? 'visibility-off' : 'visibility'} size={24} style={{ paddingRight: 15 }} onPress={handleShow} color="#000" />} />
            <Button style={{ height: 55, width: '40%', backgroundColor: '#000', borderRadius: 30 }} _text={{ fontFamily: 'nexa', fontSize: '20px' }}  onPress={() => signUpWithEmail(email, pass)}>Login</Button>
          </VStack>
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
    backgroundColor: '#2196F3'
  },
});
