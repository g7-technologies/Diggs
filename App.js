
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//Screens
import MainDashboard from './Screens/MainDashboard'
import Description1 from './Screens/Description1'
import Description2 from './Screens/Description2'
import Description3 from './Screens/Description3'
import Description4 from './Screens/Description4'
import Description5 from './Screens/Description5'
import Description6 from './Screens/Description6'
import Description7 from './Screens/Description7'
import Description8 from './Screens/Description8'
import Description9 from './Screens/Description9'
import Description10 from './Screens/Description10'
import Description11 from './Screens/Description11'
import Description12 from './Screens/Description12'
import Description13 from './Screens/Description13'
import Description14 from './Screens/Description14'

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="MainDashboard" component={MainDashboard}  options={{headerShown: false}}  />   
            <Stack.Screen name="Description1" component={Description1}  options={{headerShown: false}} />
            <Stack.Screen name="Description2" component={Description2}  options={{headerShown: false}}  />
            <Stack.Screen name="Description3" component={Description3}  options={{headerShown: false}}  />
            <Stack.Screen name="Description4" component={Description4}  options={{headerShown: false}} />
            <Stack.Screen name="Description5" component={Description5}  options={{headerShown: false}}  />
            <Stack.Screen name="Description6" component={Description6}  options={{headerShown: false}}  />
            <Stack.Screen name="Description7" component={Description7}  options={{headerShown: false}}  />
            <Stack.Screen name="Description8" component={Description8}  options={{headerShown: false}}  />
            <Stack.Screen name="Description9" component={Description9}  options={{headerShown: false}}  />
            <Stack.Screen name="Description10" component={Description10}  options={{headerShown: false}}  />
            <Stack.Screen name="Description11" component={Description11}  options={{headerShown: false}} />
            <Stack.Screen name="Description12" component={Description12}  options={{headerShown: false}}  />
            <Stack.Screen name="Description13" component={Description13}  options={{headerShown: false}}  />
            <Stack.Screen name="Description14" component={Description14}  options={{headerShown: false}}  />

            
        </Stack.Navigator>
    </NavigationContainer>
  );
}