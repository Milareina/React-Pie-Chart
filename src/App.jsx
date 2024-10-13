import { Chart } from "react-google-charts";

export function App() {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const options = {
    title: "My Daily Activities",
    pieHole: 0.4, 
    is3D: true, 
    slices: {
    2: { offset: 0.2 }, 
    },
    pieStartAngle: 100, 
    sliceVisibilityThreshold: 0.02, 
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "#233238",
        fontSize: 14,
      },
    },
    colors: ["#8AD1C2", "#9F8AD1", "#D18A99", "#BCD18A", "#D1C28A"],
  };
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}