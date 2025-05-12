import { Stack } from "./stack"

export type Project = {
  id: number,
  name: string
  description: string
  thumbnail: string
  url: string
  stacks: Stack[]
}