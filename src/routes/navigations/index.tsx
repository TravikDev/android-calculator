import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, View } from "react-native";
import { CalculatorTabs } from "./calculator";
// import TabViewExample from "./calculator";

const Drawer = createDrawerNavigator();



type RootStackParamList = {
  Home: undefined;
  Details?: { itemId: number };
  Notifications?: { itemId: number };
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};


function HomeScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications', { itemId: 1 })}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

export const Router = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Calculator" component={CalculatorTabs} />
        <Drawer.Screen name="Dashboard" component={NotificationsScreen} />
        <Drawer.Screen name="Gardens" component={CalculatorTabs} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}




// import { Navigate, useRoutes } from 'react-router-dom';

// import MainLayout from 'src/layouts/main';

// // import { PATH_AFTER_LOGIN } from 'src/config-global';
// import { authRoutes } from './auth';
// import { authDemoRoutes } from './auth-demo';
// import { HomePage, mainRoutes } from './main';
// import { dashboardRoutes } from './dashboard';
// import { componentsRoutes } from './components';

// ----------------------------------------------------------------------

// export default function Router() {
//   return useRoutes([
// SET INDEX PAGE WITH SKIP HOME PAGE
// {
//   path: '/',
//   element: <Navigate to={PATH_AFTER_LOGIN} replace />,
// },

// ----------------------------------------------------------------------

//     // SET INDEX PAGE WITH HOME PAGE
//     {
//       path: '/',
//       element: (
//         <MainLayout>
//           <HomePage />
//         </MainLayout>
//       ),
//     },

//     // Auth routes
//     ...authRoutes,
//     ...authDemoRoutes,

//     // Dashboard routes
//     ...dashboardRoutes,

//     // Main routes
//     ...mainRoutes,

//     // Components routes
//     ...componentsRoutes,

//     // No match 404
//     { path: '*', element: <Navigate to="/404" replace /> },
//   ]);
// }
