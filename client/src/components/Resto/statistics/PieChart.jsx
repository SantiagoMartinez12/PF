import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

function PieChartConstructor(props) {
    const chartPie = useRef(null);

    useLayoutEffect(() => {
        let x = am4core.create(`chartPie${props.name}`, am4charts.PieChart);

        let value;
        if (props.name === 'mayorIngreso') {
            value = 'totalprecio';
        } else value = 'totalcantidad'

        let data = props.data

        x.data = data;

        let series = x.series.push(new am4charts.PieSeries());
        series.dataFields.value = value;
        series.dataFields.category = "name";

        series.slices.template.stroke = am4core.color('#4a2abb');
        series.slices.template.strokeWidth = 2;
        series.slices.template.strokeOpacity = 1;

        x.legend = new am4charts.Legend();

        chartPie.current = x;

        return () => {
            x.dispose();
        };
    }, [props]);


    return (
        <div id={`chartPie${props.name}`} style={{ width: "100%", height: "500px" }}></div>
    );
}
export default PieChartConstructor;