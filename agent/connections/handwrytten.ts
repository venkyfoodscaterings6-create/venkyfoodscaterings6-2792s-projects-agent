import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.handwrytten.com/mcp",
  description: "Send physical notes written in pen by robots.",
  auth: connect({ connector: "mcp.handwrytten.com/" + process.env.VERCEL_PROJECT_ID, autoProvision: true }),
});
