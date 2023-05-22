import React from "react";
import { Chart, registerables } from "chart.js";
import { darkOptions, ligthOptions } from "@src/components/dataChart/Themes";
import { ChartConfiguration } from "chart.js/dist/types";
import { useTheme } from "@mui/material";

export default function DataChart(props: ChartConfiguration) {
    const { data, options } = props;
    const theme = useTheme();
    const chartRef = React.useRef<HTMLCanvasElement>(null);
    React.useEffect(() => {
        const colorOption = theme.palette.mode === "dark" ? darkOptions : ligthOptions;
        if (chartRef.current) {
            const chart = new Chart(chartRef.current, {
                ...props,
                options: {
                    ...options,
                    ...colorOption,
                },
            });
            return () => {
                chart.destroy();
            };
        }
    }, [data, theme.palette.mode]);

    return <canvas ref={chartRef} />;
}

Chart.register(...registerables);
