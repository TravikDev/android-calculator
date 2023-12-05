import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { LineChart } from '../../../components/LineChart';
import { Charts } from '@src/pages/calculator/charts/Charts';
import { ProfilesElementsCharts } from '@src/pages/calculator/lite/solutions/LiteCharts';
import { NavigationProps } from '@src/types/props';
import { Button, Dimensions, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
// import { LineChart } from 'react-native-chart-kit';

function CalcLiteScreen({ navigation }: NavigationProps) {

  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
    labelsIncluded: [true, true, true, true, true, true, true, true],
    datasets: [
      {
        data: [75, 105, 115, 140, 140, 100, 80, 60],
        color: (opacity: number) => 'rgba(0, 179, 179, 1)', // Цвет первой линии
        strokeWidth: 1, // Ширина первой линии
        name: 'N',
        include: true,
        legendColor: 'rgba(0, 179, 179, 1)'
      },
      {
        data: [40, 50, 60, 80, 100, 130, 110, 90],
        color: (opacity: number) => 'rgba(0, 74, 31, 1)', // Цвет второй линии
        strokeWidth: 1, // Ширина второй линии
        name: 'P',
        include: true,
        legendColor: 'rgba(0, 74, 31, 1)'
      },
      {
        data: [80, 100, 140, 260, 300, 260, 220, 240],
        color: (opacity: number) => 'rgba(0, 150, 0, 1)', // Цвет второй линии
        strokeWidth: 1, // Ширина второй линии
        name: 'K',
        include: true,
        legendColor: 'rgba(0, 150, 0, 1)'
      },
      {
        data: [65, 95, 100, 110, 100, 75, 65, 55],
        color: (opacity: number) => 'rgba(153, 153, 153, 1)', // Цвет второй линии
        strokeWidth: 1, // Ширина второй линии
        name: 'Ca',
        include: true,
        legendColor: 'rgba(153, 153, 153, 1)'
      },
      {
        data: [45, 55, 60, 65, 55, 50, 45, 40],
        color: (opacity: number) => 'rgba(230, 200, 0, 1)', // Цвет второй линии
        strokeWidth: 1, // Ширина второй линии
        name: 'Mg',
        include: true,
        legendColor: `rgba(230, 200, 0, 1)`
      },
      {
        data: [35, 40, 45, 50, 55, 55, 60, 65],
        color: (opacity: number) => 'rgba(255, 165, 0, 1)', // Цвет второй линии
        strokeWidth: 1, // Ширина второй линии
        name: 'S',
        include: true,
        legendColor: 'rgba(255, 165, 0, 1)'
      },
    ],
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      {/* <Charts /> */}
      {/* <ProfilesElementsCharts
            title='Соотношение форм азота'
            data={data}
            filtersCount={1} /> */}
            {/* <LineChart data={data} stagesIncluded={2} /> */}
      <Text>Bezier Line Chart</Text>
      <LineChart
        data={data}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
      <Text>Lite</Text>
    </View>
  );
}

function CalcProScreen({ navigation }: NavigationProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Pro</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}


const Tab = createMaterialTopTabNavigator();

export const CalculatorTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={CalcLiteScreen} />
      <Tab.Screen name="Settings" component={CalcProScreen} />
    </Tab.Navigator>
  );
}