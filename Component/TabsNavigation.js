import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './SplashScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        style: {
          borderRadius: 15,
          height: 90,
        },
        tabBarIcon: ({ color }) => {
          let iconName;
          let label;

          switch (route.name) {
            case 'Barcode':
              iconName = '';
              iconName = 'qrcode';
              label = 'Barcode';
              break;
           
          }

          return (
            <View style={{ alignItems: 'center', top: 5 }}>
              <Icon name={iconName} color={color} size={23} />
              <Text style={{ color: color }}>{label}</Text>
            </View>
          );
        },
        tabBarStyle: {
          borderTopStartRadius: 15,
          borderTopEndRadius: 15,
          backgroundColor: '#ffff', position: 'absolute'
        },
      })}>

      <Tab.Screen name="Barcode" component={SplashScreen} options={{ tabBarActiveTintColor: 'black', tabBarLabel: 'home', tabBarLabelPosition: 'below-icon',headerShown:true, headerTitleAlign: 'center', }} />
    </Tab.Navigator>

  )
}

export default TabNavigation;