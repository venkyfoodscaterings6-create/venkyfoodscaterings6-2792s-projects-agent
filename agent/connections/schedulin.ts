import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.schedulin.app/mcp",
  description: "Schedule, publish, and analyze social media posts across networks.",
  auth: connect({ connector: "mcp.schedulin.app/" + process.env.VERCEL_PROJECT_ID, autoProvision: true }),
});
