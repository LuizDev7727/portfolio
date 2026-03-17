import { Stack } from "./stack";

export type Project = {
  name: string;
  description: string;
  thumbnail: string;
  url: string;
  stacks: Stack[];
};
