import type { Meta, StoryObj } from "@storybook/react";
import Textarea from "./Textarea";

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: "Textarea",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    labelAction: {
      content: "",
    },
  },
};
