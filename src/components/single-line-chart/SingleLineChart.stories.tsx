import type { Meta, StoryObj } from "@storybook/react";
import SingleLineChart from "./SingleLineChart";

const meta: Meta<typeof SingleLineChart> = {
  title: "Chart/SingleLineChart",
  component: SingleLineChart,
};

export default meta;
type Story = StoryObj<typeof SingleLineChart>;

const sampleData = Array.from({ length: 12 }, (_, i) => {
  // 24시간 예시, 시간별로 값이 다르게
  const hour = i;
  // 예시: sin 곡선 + 랜덤 노이즈로 다이나믹한 변화
  const value = Math.round(
    20 + 15 * Math.sin((hour / 12) * 2 * Math.PI) + Math.random() * 5
  );
  return { title: `${hour}시`, value };
});

export const 기본: Story = {
  args: {
    data: sampleData,
    height: 500,
  },
};
