import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://askgina.ai/ai/gina/mcp",
  description: "Research crypto markets, perpetuals, prediction markets, and portfolios.",
  auth: connect({ connector: "askgina.ai/" + process.env.VERCEL_PROJECT_ID, autoProvision: true }),
});
