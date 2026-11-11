import { defineAgent } from "eve";

export default defineAgent({
  "model": "deepseek/deepseek-v3.1",
  "reasoning": "medium",
  "compaction": {
    "threshold": 0.7
  }
});
