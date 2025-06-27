import type { Meta, StoryObj } from "@storybook/react";
import MultiBarChart from "./MultiBarChart";

const meta: Meta<typeof MultiBarChart> = {
  title: "Chart/MultiBarChart",
  component: MultiBarChart,
};

export default meta;
type Story = StoryObj<typeof MultiBarChart>;

const multiBarData = [
  { title: "A", values: [10, 20, 30] },
  { title: "B", values: [7, 15, 25] },
  { title: "C", values: [32, 12, 18] },
  { title: "D", values: [5, 8, 13] },
  { title: "E", values: [5, 9, 11] },
  { title: "F", values: [5, 6, 7] },
];

const seriesLabels = ["시리즈1", "시리즈2", "시리즈3"];

export const 기본: Story = {
  args: {
    data: multiBarData,
    seriesLabels,
    height: 400,
    hover: true,
    unit: "개",
  },
};
