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
} from "../multi-bar-chart/MultiBarChart.css";
import { barColorHex } from "../multi-bar-chart/colors";

interface MultiBarData {
  title: string;
  values: number[];
}

interface MultiBarChartProps {
  data: MultiBarData[];
  seriesLabels: string[]; 
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

export default function MultiBarChart({ data, seriesLabels, height = 300, hover, unit }: MultiBarChartProps) {
  const [hoveredGroupIdx, setHoveredGroupIdx] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const allValues = data.flatMap(d => d.values);
  const maxBarValue = Math.max(...allValues, 1);

  const bottomFixedHeight = 100;
  const totalChartContainerHeight = height;
  const chartBarsAndAxisHeight = totalChartContainerHeight - bottomFixedHeight;
  const numberOfTicks = 5;
  const yAxisTicks = Array.from({ length: numberOfTicks }, (_, i) => {
    const value = (maxBarValue / (numberOfTicks - 1)) * (numberOfTicks - 1 - i);
    return Math.round(value);
  });

  return (
    <div className={content} style={{ height }}>
      <div className={chartContainer}>
        <div className={yAxis}>
          {yAxisTicks.map((tick, i) => (
            <div key={i} className={yAxisTick}>
              <span>{tick}</span>
            </div>
          ))}
        </div>
        <div className={chartContent}>
          <div className={chartBars}>
            {yAxisTicks.map((tick, i) => (
              <div
                key={`grid-line-${i}`}
                className={gridLine}
                style={{ bottom: `${(i / (yAxisTicks.length - 1)) * 100}%` }}
              />
            ))}
            {data.map((group, groupIdx) => (
              <div
                key={groupIdx}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flex: 1,
                  cursor: hover ? "pointer" : undefined,
                  background: hover && hoveredGroupIdx === groupIdx ? "rgba(0,0,0,0.03)" : undefined,
                  borderRadius: 12,
                  transition: "background 0.15s",
                  padding: "0 2px"
                }}
                onMouseEnter={e => {
                  setHoveredGroupIdx(groupIdx);
                  setMousePos({ x: e.clientX, y: e.clientY });
                }}
                onMouseMove={e => setMousePos({ x: e.clientX, y: e.clientY })}
                onMouseLeave={() => {
                  setHoveredGroupIdx(null);
                  setMousePos(null);
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-end", height: "100%", gap: 2 }}>
                  {group.values.map((value, barIdx) => (
                    <div
                      key={barIdx}
                      className={barContainer}
                      style={{
                        position: "relative",
                        margin: 0,
                        padding: 0,
                        background: "none"
                      }}
                    >
                      {!hover && (
                        <span className={barLabel}>{value}</span>
                      )}
                      <div
                        className={barColorVariants[colorKeys[barIdx % colorKeys.length]]}
                        style={{
                          height: `${(value / maxBarValue) * chartBarsAndAxisHeight}px`,
                          width: 20,
                          minWidth: 6,
                          borderRadius: "8px",
                          transition: "all 0.2s ease-out",
                          margin: 0,
                        }}
                      ></div>
                    </div>
                  ))}
                  {hover && hoveredGroupIdx === groupIdx && mousePos &&
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
                        <div style={{ fontSize: 16, fontWeight: 500, color: "#666", marginBottom: 8 }}>{group.title}</div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                          {group.values.map((value, barIdx) => (
                            <div key={barIdx} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                              <div
                                style={{
                                  width: 12,
                                  height: 12,
                                  borderRadius: "100%",
                                  background: barColorHex[colorKeys[barIdx % colorKeys.length]],
                                  border: "1px solid #e5e7eb",
                                  display: "inline-block",
                                }}
                              />
                              <span style={{ color: "#888" }}>{seriesLabels[barIdx]}</span>
                              <span style={{ fontWeight: 500 }}>{value} {unit ?? "개"}</span>
                            </div>
                          ))}
                        </div>
                      </div>,
                      document.body
                    )}
                </div>
              </div>
            ))}
            <div className={bottomAxis} />
          </div>
          <div className={barLabels}>
            {data.map((group, groupIdx) => (
              <span
                key={groupIdx}
                className={barLabelItem}
                style={{ width: `${100 / data.length}%` }}
              >
                {group.title}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className={chartNote}>값은 최대값에 비례하여 표시됩니다.</div>
    </div>
  );
}
