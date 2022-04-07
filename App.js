import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import Login from './screens/auth/login/login';
import Signup1 from './screens/auth/signup/signup1';
import Signup2 from './screens/auth/signup/signup2';
import Signup3 from './screens/auth/signup/signup3';
import Signup4 from './screens/auth/signup/signup4';
import SignupWorker from './screens/auth/signup/signupWorker';
import SignupWorker2 from './screens/auth/signup/signupWorker2';
import { LogBox } from 'react-native';
import SignupFinal from './screens/auth/signup/signupFinal';
import MainScreen from './screens/mainscreen';
import TestScreen from './screens/testScreen';
import Gardener from './screens/crafts/gardenerScreen';
import Painter from './screens/crafts/painterScreen';
import Carpenter from './screens/crafts/carpenterScreen';
import Plumber from './screens/crafts/plumberScreen';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications


const Stack = createNativeStackNavigator();

//add this line to go to any screen
//onPress={() => navigation.navigate('Login')}
//#E96590 secondary color of illustrations

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, animation:'slide_from_right'}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} options={{animation:'slide_from_left'}}/>
        <Stack.Screen name="Signup1" component={Signup1} />
        <Stack.Screen name="Signup2" component={Signup2} />
        <Stack.Screen name="Signup3" component={Signup3} />
        <Stack.Screen name="Signup4" component={Signup4} />
        <Stack.Screen name="SignupWorker" component={SignupWorker} />
        <Stack.Screen name="SignupWorker2" component={SignupWorker2} />
        <Stack.Screen name="SignupFinal" component={SignupFinal} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="TestScreen" component={TestScreen} options={{animation:'fade'}} />
        <Stack.Screen name="GardenerScreen" component={Gardener} options={{animation:'fade'}} />
        <Stack.Screen name="PainterScreen" component={Painter} options={{animation:'fade'}} />
        <Stack.Screen name="CarpenterScreen" component={Carpenter} options={{animation:'fade'}} />
        <Stack.Screen name="PlumberScreen" component={Plumber} options={{animation:'fade'}} />
      </Stack.Navigator>
      
    </NavigationContainer>
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
