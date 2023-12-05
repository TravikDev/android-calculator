import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Navigation

type RootStackParamList = {
    Home: undefined;
    Details?: { itemId: number };
    Calculator?: { itemId: number };
    Dashboard?: { itemId: number };
    Notifications?: { itemId: number };
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export type NavigationProps = {
    navigation: HomeScreenNavigationProp;
};

// 