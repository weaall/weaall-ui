import React, { useState } from "react";
import { createPortal } from "react-dom";
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
} from "./BarChart.css";
import { barColorHex } from "./colors";

interface ChartData {
  title: string;
  figures: number;
}

interface ChartProps {
  date: ChartData[];
  height?: number;
  hover?: boolean;
  unit?: string;
}

const colorKeys = [
  "color1",
  "color2",
  "color3",
  "color4",
  "color5",
  "color6",
  "color7",
  "color8",
  "color9",
  "color10",
] as const;

export default function BarChart({
  date,
  height = 300,
  hover,
  unit,
}: ChartProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(
    null
  );
  const figures = date.map((d) => d.figures);
  const labels = date.map((d) => d.title);

  const bottomFixedHeight = 100;
  const totalChartContainerHeight = height;
  const chartBarsAndAxisHeight = totalChartContainerHeight - bottomFixedHeight;

  const maxBarValue = Math.max(...figures, 1);
  const numberOfTicks = 5;
  const yAxisTicks = Array.from({ length: numberOfTicks }, (_, i) => {
    const value = (maxBarValue / (numberOfTicks - 1)) * (numberOfTicks - 1 - i);
    return Math.round(value);
  });

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
              <div
                key={index}
                className={barContainer}
                style={{ position: "relative" }}
                onMouseEnter={(e) => {
                  setHoveredIdx(index);
                  setMousePos({ x: e.clientX, y: e.clientY });
                }}
                onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
                onMouseLeave={() => {
                  setHoveredIdx(null);
                  setMousePos(null);
                }}
              >
                <span className={barLabel}>{hover ? "" : value}</span>
                <div
                  className={
                    barColorVariants[colorKeys[index % colorKeys.length]]
                  }
                  style={{
                    height: `${
                      (value / maxBarValue) * chartBarsAndAxisHeight
                    }px`,
                    width: `calc(100% / ${figures.length} - 16px)`,
                    minWidth: "40px",
                    borderRadius: "10px",
                    transition: "all 0.2s ease-out",
                    margin: "0 8px",
                  }}
                ></div>
                {hoveredIdx === index &&
                  hover &&
                  mousePos &&
                  createPortal(
                    <div
                      style={{
                        position: "fixed",
                        top: mousePos.y + 12,
                        left: mousePos.x + 12,
                        background: "#fff",
                        color: "#222",
                        border: "1px solid #e5e7eb",
                        borderRadius: 8,
                        padding: "8px 12px",
                        fontSize: 13,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                        whiteSpace: "pre-line",
                        pointerEvents: "none",
                        maxWidth: 260,
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                        zIndex: 2147483647,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <div
                          style={{
                            width: 12,
                            height: 12,
                            borderRadius: '100%',
                            background:
                              barColorHex[colorKeys[index % colorKeys.length]],
                            border: "1px solid #e5e7eb",
                            display: "inline-block",
                          }}
                        />
                        <span style={{ fontSize: 16, fontWeight: 500, color: "#666" }}>
                          {labels[index]}
                        </span>
                      </div>
                      <div>
                        {figures[index]} {unit ?? "개"}
                      </div>
                    </div>,
                    document.body
                  )}
              </div>
            ))}
            <div className={bottomAxis} />
          </div>
          <div className={barLabels}>
            {labels.map((label, i) => (
              <span
                key={i}
                className={barLabelItem}
                style={{ width: `${100 / labels.length}%` }}
              >
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
