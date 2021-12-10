import React, { useRef, useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

function BarChart(props) {
  const chartBar = useRef(null);

  useEffect(() => {
    let x = am4core.create("divBar", am4charts.XYChart);

    let data = [];
    let visits = 10;

    for (let i = 1; i < 50; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
    }
    x.data = data;

    let dateAxis = x.xAxes.push(new am4charts.DateAxis());

    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());

    let series = x.series.push(new am4charts.ColumnSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.tooltipText = "{valueY.value}";
    x.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    x.scrollbarX = scrollbarX;

    chartBar.current = x;

    return () => {
      x.dispose();
    };
  }, []);

  return (
    <div id="divBar" style={{ width: "100%", height: "500px" }}></div>
  );
}
export default BarChart;