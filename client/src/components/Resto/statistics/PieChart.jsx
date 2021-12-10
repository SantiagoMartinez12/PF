import React, { useRef, useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

function PieChartConstructor(props) {
    const chartPie = useRef(null);

    useEffect(() => {
        let x = am4core.create("chartPie", am4charts.PieChart);

        let data = [
            {
                name: "algo1",
                value: 30
            },
            {
                name: "algo2",
                value: 10
            },
            {
                name: "algo3",
                value: 5
            },
            {
                name: "algo4",
                value: 25
            },
            {
                name: "algo5",
                value: 30
            },
        ];

        x.data = data;

        let series = x.series.push(new am4charts.PieSeries());
        series.dataFields.value = "value";
        series.dataFields.category = "name";
   

        chartPie.current = x;

        return () => {
            x.dispose();
        };
    }, []);

    return (
        <div id="chartPie" style={{ width: "100%", height: "500px" }}></div>
    );
}
export default PieChartConstructor;