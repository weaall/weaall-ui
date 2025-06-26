import {
    chartContainer,
    content,
    yAxis,
    yAxisTick,
    chartContent,
    chartBars,
    gridLine,
    barContainer,
    barLabel,
    bottomAxis,
    barLabels,
    barLabelItem,
    chartNote,
    barColorVariants,
} from "./Chart.css";

interface ChartProps {
    figures: number[];
    labels?: string[];
    height?: number;
}

export default function Chart({ figures, labels, height = 300 }: ChartProps) {
    const bottomFixedHeight = 100;
    const totalChartContainerHeight = height;
    const chartBarsAndAxisHeight = totalChartContainerHeight - bottomFixedHeight;

    const maxBarValue = Math.max(...figures, 1);
    const numberOfTicks = 5;
    const yAxisTicks = Array.from({ length: numberOfTicks }, (_, i) => {
        const value = (maxBarValue / (numberOfTicks - 1)) * (numberOfTicks - 1 - i);
        return Math.round(value);
    });

    const colorKeys = ["color1", "color2", "color3", "color4", "color5", "color6", "color7", "color8", "color9", "color10"] as const;

    return (
        <div className={content} style={{ height: height }}>
            <div className={chartContainer}>
                <div className={yAxis}>
                    {yAxisTicks.map((tick, index) => (
                        <div key={index} className={yAxisTick}>
                            <span>{tick}</span>
                        </div>
                    ))}
                </div>

                <div className={chartContent}>
                    <div className={chartBars}>
                        {yAxisTicks.map((tick, index) => (
                            <div
                                key={`grid-line-${index}`}
                                className={gridLine}
                                style={{
                                    bottom: `${(index / (yAxisTicks.length - 1)) * 100}%`,
                                }}
                            />
                        ))}
                        {figures.map((value, index) => (
                            <div key={index} className={barContainer}>
                                <span className={barLabel}>{value}</span>
                                <div
                                    className={barColorVariants[colorKeys[index % colorKeys.length]]}
                                    style={{
                                        height: `${(value / maxBarValue) * (chartBarsAndAxisHeight)}px`,
                                        width: `calc(100% / ${figures.length} - 16px)`,
                                        minWidth: "40px",
                                        borderRadius: "10px",
                                        transition: "all 0.5s ease-out",
                                        margin: "0 8px",
                                    }}
                                    title={`${labels?.[index] ?? index}: ${value}`}
                                ></div>
                            </div>
                        ))}
                        <div className={bottomAxis} />
                    </div>
                    <div className={barLabels}>
                        {(labels ?? figures.map((_, i) => `#${i + 1}`)).map((label, i) => (
                            <span key={i} className={barLabelItem}>
                                {label}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className={chartNote}>값은 최대값에 비례하여 표시됩니다.</div>
        </div>
    );
}
