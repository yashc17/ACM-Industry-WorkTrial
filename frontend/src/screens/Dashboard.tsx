import React, {useEffect, useState} from "react";
import {Text, ScrollView, ActivityIndicator, StyleSheet} from "react-native";
import axios from "axios";
import {LineChart, BarChart, PieChart} from "react-native-chart-kit";
import {CandlestickChart} from "react-native-wagmi-charts";



const API_URL = "http://127.0.0.1:8000/api"; 


// creating dashboard
const Dashboard = () => {

    // creating variables to store data
    const [candlestickData, setCandlestickData] = useState<any>(null);
    const [lineData, setLineData] = useState<any>(null);
    const [barData, setBarData] = useState<any>(null);
    const [pieData, setPieData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {

        // using axios to fetch data
        const candlestickResponse = await axios.get(`${API_URL}/candlestick-data/`); 
        const lineResponse = await axios.get(`${API_URL}/line-chart-data/`);
        const barResponse = await axios.get(`${API_URL}/bar-chart-data/`);
        const pieResponse = await axios.get(`${API_URL}/pie-chart-data/`);

        setCandlestickData(candlestickResponse.data)
        setLineData(lineResponse.data);
        setBarData(barResponse.data);
        setPieData(pieResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;


  // creating the actual dashboard
  return (
    <ScrollView style={styles.container}>
        <Text style={styles.title}>Dashboard</Text>

        
        <Text></Text>
        <Text style={{fontWeight: "bold", color: "brown", fontSize: 20}}>Candlestick Chart</Text>
        <CandlestickChart.Provider data={candlestickData.data}>
        <CandlestickChart height={220} width={350}>
            <CandlestickChart.Candles />
            <CandlestickChart.Crosshair />
        </CandlestickChart>
        <Text style={{ color: 'brown' }}>Open:</Text>
        <CandlestickChart.PriceText type="open" />
        <Text style={{ color: 'brown' }}>High:</Text>
        <CandlestickChart.PriceText type="high" />
        <Text style={{ color: 'brown' }}>Low:</Text>
        <CandlestickChart.PriceText type="low" />
        <Text style={{ color: 'brown' }}>Close:</Text>
        <CandlestickChart.PriceText type="close" />
        <Text style={{ color: 'brown' }}>Date:</Text>
        <CandlestickChart.DatetimeText />
        </CandlestickChart.Provider>



        <Text></Text>
        <Text style={{fontWeight: "bold", color: "brown", fontSize: 20}}>Line Chart</Text>
        {lineData && (
        <LineChart
            data={{
            labels: lineData.labels,
            datasets: [{ data: lineData.data }]
            }}
            width={350}
            height={220}
            yAxisLabel=""
            chartConfig={chartConfig}
            style={styles.chart}
        />
        )}
        
        <Text></Text>
        <Text style={{fontWeight: "bold", color: "brown", fontSize: 20}}>Bar Chart</Text>
        {barData && (
        <BarChart
            data={{
            labels: barData.labels,
            datasets: [{ data: barData.data }]
            }}
            width={350}
            height={220}
            chartConfig={chartConfig}
            style={styles.chart}
        />
        )}



        <Text></Text>
        <Text style={{fontWeight: "bold", color: "brown", fontSize: 20}}>Pie Chart</Text>
            {pieData && (
            <PieChart
                data={pieData.labels.map((label: string, index: number) => ({

                name: label,
                population: pieData.data[index],
                color: chartColors[index],
                }))}
                width={350}
                height={220}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
            />
            )}
        </ScrollView>
    );
};


// styling dashboard to make it look better
const chartConfig = {
  backgroundGradientFrom: "#795C34",
  backgroundGradientTo: "#9A7B4F",
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
};

const chartColors = ["#795C34", "#420D09", "#FFCE56"];

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#EDE8D0" },
  title: { fontSize: 40, fontWeight: "bold", textAlign: "center", marginBottom: 20, color: "brown" },
  chart: { marginVertical: 10, borderRadius: 10 }
});

export default Dashboard;
