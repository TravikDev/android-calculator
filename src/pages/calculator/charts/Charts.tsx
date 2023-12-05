import { LineChart } from "@src/components/LineChart";
import { View } from "react-native";
import { ProfilesElementsCharts } from "../lite/solutions/LiteCharts";

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

export const Charts = () => {
  return (
    <View>
        <ProfilesElementsCharts
            title='Соотношение форм азота'
            data={data}
            filtersCount={1} />
    </View>
  )
}
