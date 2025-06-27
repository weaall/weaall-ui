import React, { useRef, useEffect, useState } from "react";
import {
  chartContainer,
  content,
  yAxis,
  yAxisTick,
  chartContent,
  chartBars,
  gridLine,
  bottomAxis,
  barLabels,
  barLabelItem,
  chartNote,
} from "../single-line-chart/SingleLineChart.css";

interface SingleLineChartData {
  title: string;
  value: number;
}

interface SingleLineChartProps {
  data: SingleLineChartData[];
  height?: number;
  unit?: string;
}

export default function SingleLineChart({
  data,
  height = 300,
  unit,
}: SingleLineChartProps) {
  const values = data.map((d) => d.value);
  const labels = data.map((d) => d.title);
  const maxValue = Math.max(...values, 1);
  const bottomFixedHeight = 100;
  const totalChartContainerHeight = height;
  const chartBarsAndAxisHeight = totalChartContainerHeight - bottomFixedHeight;
  const numberOfTicks = 5;
  const yAxisTicks = Array.from({ length: numberOfTicks }, (_, i) => {
    const value = (maxValue / (numberOfTicks - 1)) * (numberOfTicks - 1 - i);
    return Math.round(value);
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(
    null
  );
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [startIdx, setStartIdx] = useState<number | null>(null);
  const [endIdx, setEndIdx] = useState<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const cssWidth = canvas.offsetWidth || 400;
    const cssHeight = chartBarsAndAxisHeight;
    canvas.width = cssWidth * dpr;
    canvas.height = cssHeight * dpr;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.scale(dpr, dpr);

    // 선택된 구간 배경 (startIdx, endIdx)
    if (
      startIdx !== null &&
      endIdx !== null &&
      startIdx >= 0 &&
      endIdx >= 0 &&
      startIdx < values.length &&
      endIdx < values.length
    ) {
      const s = Math.min(startIdx, endIdx);
      const e = Math.max(startIdx, endIdx);
      // 기본 구간 배경
      ctx.save();
      ctx.fillStyle = "rgba(37,99,235,0.08)";
      ctx.beginPath();
      for (let i = s; i <= e; i++) {
        const x = ((i + 0.5) / labels.length) * cssWidth;
        const y = cssHeight - (values[i] / maxValue) * cssHeight;
        if (i === s) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      for (let i = e; i >= s; i--) {
        const x = ((i + 0.5) / labels.length) * cssWidth;
        ctx.lineTo(x, cssHeight);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      // hoverIdx가 구간 내에 있으면 진한 색으로 덮어씌움
      if (hoverIdx !== null && hoverIdx >= s && hoverIdx <= e) {
        ctx.save();
        ctx.fillStyle = "rgba(37,99,235,0.18)";
        ctx.beginPath();
        for (let i = s; i <= e; i++) {
          const x = ((i + 0.5) / labels.length) * cssWidth;
          const y = cssHeight - (values[i] / maxValue) * cssHeight;
          if (i === s) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        for (let i = e; i >= s; i--) {
          const x = ((i + 0.5) / labels.length) * cssWidth;
          ctx.lineTo(x, cssHeight);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    } else if (
      startIdx !== null &&
      endIdx === null &&
      hoverIdx !== null &&
      startIdx >= 0 &&
      hoverIdx >= 0 &&
      startIdx < values.length &&
      hoverIdx < values.length
    ) {
      const s = Math.min(startIdx, hoverIdx);
      const e = Math.max(startIdx, hoverIdx);
      ctx.save();
      ctx.fillStyle = "rgba(37,99,235,0.08)";
      ctx.beginPath();
      for (let i = s; i <= e; i++) {
        const x = ((i + 0.5) / labels.length) * cssWidth;
        const y = cssHeight - (values[i] / maxValue) * cssHeight;
        if (i === s) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      for (let i = e; i >= s; i--) {
        const x = ((i + 0.5) / labels.length) * cssWidth;
        ctx.lineTo(x, cssHeight);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    ctx.save();
    ctx.strokeStyle = "#2563eb";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.beginPath();
    values.forEach((v, i) => {
      const x = ((i + 0.5) / labels.length) * cssWidth;
      const y = cssHeight - (v / maxValue) * cssHeight;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.fillStyle = "#2563eb";
    values.forEach((v, i) => {
      const x = ((i + 0.5) / labels.length) * cssWidth;
      const y = cssHeight - (v / maxValue) * cssHeight;
      ctx.beginPath();
      ctx.arc(x, y, 1, 0, 2 * Math.PI);
      ctx.fill();
    });
    ctx.restore();

    // 1. 아무것도 클릭되지 않았을 때: hoverIdx가 있으면 곡선 아래 전체 회색
    if (
      startIdx === null && endIdx === null && hoverIdx !== null && hoverIdx >= 0 && hoverIdx < values.length
    ) {
      ctx.save();
      ctx.fillStyle = "rgba(180,180,180,0.18)";
      ctx.beginPath();
      // 곡선 위쪽: 0~hoverIdx
      for (let i = 0; i <= hoverIdx; i++) {
        const x = ((i + 0.5) / labels.length) * cssWidth;
        const y = cssHeight - (values[i] / maxValue) * cssHeight;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      // 곡선 아래쪽: hoverIdx~0
      for (let i = hoverIdx; i >= 0; i--) {
        const x = ((i + 0.5) / labels.length) * cssWidth;
        ctx.lineTo(x, cssHeight);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
    // 2. 두 인덱스가 모두 차있을 때: hoverIdx가 있으면 곡선 아래 전체 회색
    else if (
      startIdx !== null && endIdx !== null && hoverIdx !== null && hoverIdx >= 0 && hoverIdx < values.length
    ) {
      // 기존 선택 구간 배경
      const s = Math.min(startIdx, endIdx);
      const e = Math.max(startIdx, endIdx);
      ctx.save();
      ctx.fillStyle = "rgba(37,99,235,0.08)";
      ctx.beginPath();
      for (let i = s; i <= e; i++) {
        const x = ((i + 0.5) / labels.length) * cssWidth;
        const y = cssHeight - (values[i] / maxValue) * cssHeight;
        if (i === s) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      for (let i = e; i >= s; i--) {
        const x = ((i + 0.5) / labels.length) * cssWidth;
        ctx.lineTo(x, cssHeight);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      // hoverIdx가 있으면 곡선 아래 전체 회색으로 덮어씌움
      ctx.save();
      ctx.fillStyle = "rgba(180,180,180,0.18)";
      ctx.beginPath();
      for (let i = 0; i <= hoverIdx; i++) {
        const x = ((i + 0.5) / labels.length) * cssWidth;
        const y = cssHeight - (values[i] / maxValue) * cssHeight;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      for (let i = hoverIdx; i >= 0; i--) {
        const x = ((i + 0.5) / labels.length) * cssWidth;
        ctx.lineTo(x, cssHeight);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
    // 3. 구간 드래그 중일 때(기존 로직)
    else if (
      startIdx !== null && endIdx === null && hoverIdx !== null &&
      startIdx >= 0 && hoverIdx >= 0 &&
      startIdx < values.length && hoverIdx < values.length
    ) {
      const s = Math.min(startIdx, hoverIdx);
      const e = Math.max(startIdx, hoverIdx);
      ctx.save();
      ctx.fillStyle = "rgba(37,99,235,0.08)";
      ctx.beginPath();
      for (let i = s; i <= e; i++) {
        const x = ((i + 0.5) / labels.length) * cssWidth;
        const y = cssHeight - (values[i] / maxValue) * cssHeight;
        if (i === s) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      for (let i = e; i >= s; i--) {
        const x = ((i + 0.5) / labels.length) * cssWidth;
        ctx.lineTo(x, cssHeight);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  }, [values, labels, maxValue, height, chartBarsAndAxisHeight, hoverIdx, startIdx, endIdx]);

  // 마우스 호버 핸들러
  function handleMouseMove(e: React.MouseEvent<HTMLCanvasElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const idx = Math.floor((x / width) * labels.length);
    setHoverIdx(idx);
    setMousePos({ x: e.clientX, y: e.clientY });
  }
  function handleMouseLeave() {
    setHoverIdx(null);
    setMousePos(null);
  }
  function handleClick(e: React.MouseEvent<HTMLCanvasElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const idx = Math.floor((x / width) * labels.length);
    if (startIdx === null || (startIdx !== null && endIdx !== null)) {
      setStartIdx(idx);
      setEndIdx(null);
    } else if (startIdx !== null && endIdx === null) {
      setEndIdx(idx);
    }
  }

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
          <div className={chartBars} style={{ position: "relative" }}>
            {yAxisTicks.map((tick, i) => (
              <div
                key={`grid-line-${i}`}
                className={gridLine}
                style={{ bottom: `${(i / (yAxisTicks.length - 1)) * 100}%` }}
              />
            ))}
            <canvas
              ref={canvasRef}
              width={400}
              height={chartBarsAndAxisHeight}
              style={{
                width: "100%",
                height: chartBarsAndAxisHeight,
                position: "absolute",
                left: 0,
                bottom: 0,
                pointerEvents: "auto",
                zIndex: 1,
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
            />
            {/* 툴팁: 선택된 영역 위에 hover 시 값/합계/평균 */}
            {(hoverIdx !== null && mousePos && startIdx !== null && endIdx !== null && hoverIdx >= Math.min(startIdx, endIdx) && hoverIdx <= Math.max(startIdx, endIdx)) && (
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
                    fontSize: 16,
                    fontWeight: 500,
                    color: "#666",
                    marginBottom: 8,
                  }}
                >
                  {labels[hoverIdx]}
                </div>
                <div style={{ fontWeight: 500 }}>
                  {values[hoverIdx]} {unit ?? ""}
                </div>
                <div style={{ marginTop: 4, fontSize: 12, color: "#666" }}>
                  합계: {values.slice(Math.min(startIdx, endIdx), Math.max(startIdx, endIdx) + 1).reduce((a, b) => a + b, 0)} {unit ?? ""}
                  <br />
                  평균: {(
                    values.slice(Math.min(startIdx, endIdx), Math.max(startIdx, endIdx) + 1).reduce((a, b) => a + b, 0) /
                    (Math.abs(endIdx - startIdx) + 1)
                  ).toFixed(2)} {unit ?? ""}
                </div>
              </div>
            )}
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
