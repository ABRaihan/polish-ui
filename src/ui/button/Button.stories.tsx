import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: "Elementus",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "primary",
  },
};
export const Danger: Story = {
  args: {
    children: "Danger",
    variant: "danger",
    size: "md",
    loading: true,
  },
};
