import React from "react";
import { ScrollView, StyleSheet, View, Text, Button, Alert, Dimensions} from "react-native";
import {Card, Title} from 'react-native-paper';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

const stats = ({ navigation }) => {
    const data = [
        {
          name: "Excited",
          population: 3,
          color: "#B28DFF",
          legendFontColor: "#532d84",
          legendFontSize: 15
        },
        {
          name: "Happy",
          population: 15,
          color: "#F8DF81",
          legendFontColor: "#532d84",
          legendFontSize: 15
        },
        {
          name: "Neutral",
          population: 10,
          color: "#9BD0B9",
          legendFontColor: "#532d84",
          legendFontSize: 15
        },
        {
            name: "Sad",
            population: 2,
            color: "#6EB5FF",
            legendFontColor: "#532d84",
            legendFontSize: 15
          },
          {
            name: "Angry",
            population: 1,
            color: "#FF8FAB",
            legendFontColor: "#532d84",
            legendFontSize: 15
          },
      ];
    return (
        <View>
            <Title>Emotions Within the Month</Title>
  <PieChart
  data={data}
  width={Dimensions.get("window").width}
  height={250}
  chartConfig={{
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 0
    },
    propsForDots: {
      r: "3",
      strokeWidth: "2",
      stroke: "#ffa726"
    }
  }}
  accessor={"population"}
  backgroundColor={"transparent"}
  paddingLeft={"15"}
  center={[5, 5]}
  absolute
/>
</View>
    )
};

const styles = StyleSheet.create({
    form: {
        
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#532d84'
    }
});

export default stats;