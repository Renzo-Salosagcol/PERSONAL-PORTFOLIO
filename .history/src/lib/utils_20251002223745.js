import { cslx } from "clsx"
import { toMerge } from "tailwind-merge"

export const cn = (...inputs) => {
  return toMerge(clsx(...inputs))
}