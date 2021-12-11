import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

function LineChart(props) {
  const chart = useRef(null);

  useLayoutEffect(() => {
    let x = am4core.create(`chartdiv${props.name}`, am4charts.XYChart);

    // x.paddingRight = 20;

    let data = props.data;

    x.data = data;

    let dateAxis = x.xAxes.push(new am4charts.DateAxis());
    // dateAxis.renderer.grid.template.location = 0;

    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.tooltip.disabled = true;
    // valueAxis.renderer.minWidth = 35;

    let series = x.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.tooltipText = "{valueY.value}";
    x.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    x.scrollbarX = scrollbarX;

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, [props]);

  useLayoutEffect(() => {
    chart.current.paddingRight = props.paddingRight;
  }, [props.paddingRight]);


  return (
    <div id={`chartdiv${props.name}`} style={{ width: "100%", height: "500px" }}></div>
  );
}
export default LineChart;