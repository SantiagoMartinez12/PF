import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

function BarChart(props) {
  const chartBar = useRef(null);

  useLayoutEffect(() => {
    let x = am4core.create(`divBar${props.name}`, am4charts.XYChart);

    let data = props.data

    x.data = data;

    let dateAxis = x.xAxes.push(new am4charts.DateAxis());

    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());

    let series = x.series.push(new am4charts.ColumnSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "cantidad";
    series.tooltipText = "{valueY.cantidad}";
    x.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    x.scrollbarX = scrollbarX;

    x.legend = new am4charts.Legend();
    series.name = props.name;

    chartBar.current = x;

    return () => {
      x.dispose();
    };
  }, [props]);


  return (
    <div id={`divBar${props.name}`} style={{ width: "100%", height: "500px" }}></div>
  );
}
export default BarChart;