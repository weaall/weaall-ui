import type { Meta, StoryObj } from "@storybook/react";
import Chart from "./Chart";

const meta: Meta<typeof Chart> = {
  title: "Chart/Chart",
  component: Chart,
};

export default meta;
type Story = StoryObj<typeof Chart>;

const sampleFigures = [10, 7, 12, 5];

export const 기본: Story = {
  args: {
    figures: sampleFigures,
    labels: ["A", "B", "C", "D"],
    height: 300,
  },
};