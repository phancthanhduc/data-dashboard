import { ChartConfiguration } from "chart.js";
export const ligthOptions: ChartConfiguration["options"] = {
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: "#d3d3d3",
            },
        },
        x: {
            grid: {
                color: "#d3d3d3",
            },
        },
    },
    plugins: {
        legend: {
            labels: {
                color: "#000000de",
            },
        },
    },
};

export const darkOptions: ChartConfiguration["options"] = {
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: "#4f4f4f",
            },
            ticks: {
                color: "#fff",
            },
        },
        x: {
            grid: {
                color: "#d3d3d3",
            },
            ticks: {
                color: "#fff",
            },
        },
    },
    plugins: {
        legend: {
            labels: {
                color: "#fff",
            },
        },
    },
};
