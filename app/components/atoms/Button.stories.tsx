import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
};
export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: { children: "Primary Button", variant: "primary" },
};

export const Secondary: StoryObj<typeof Button> = {
  args: { children: "Secondary Button", variant: "secondary" },
};

export const Danger: StoryObj<typeof Button> = {
  args: { children: "Danger Button", variant: "danger" },
};
