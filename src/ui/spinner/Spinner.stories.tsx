import type { Meta, StoryObj } from "@storybook/react";
import Spinner from "./Spinner";

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  title: "Spinner",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {

};
