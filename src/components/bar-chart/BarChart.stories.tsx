import type { Meta, StoryObj } from "@storybook/react";
import BarChart from "./BarChart";

const meta: Meta<typeof BarChart> = {
  title: "Chart/Chart",
  component: BarChart,
};

export default meta;
type Story = StoryObj<typeof BarChart>;

const sampleDate = [
  { title: "A", figures: 10, detail: "A 상세 정보입니다." },
  { title: "B", figures: 7, detail: "B 상세 정보입니다." },
  { title: "C", figures: 32, detail: "C 상세 정보입니다." },
  { title: "D", figures: 5, detail: "D 상세 정보입니다." },
  { title: "E", figures: 5, detail: "E 상세 정보입니다." },
  { title: "F", figures: 5, detail: "F 상세 정보입니다." },
];

export const 기본: Story = {
  args: {
    date: sampleDate,
    height: 500,
    hover: true,
  },
};
