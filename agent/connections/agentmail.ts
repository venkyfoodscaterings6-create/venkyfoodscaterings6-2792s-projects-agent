import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.agentmail.to/mcp",
  description: "Email inboxes for AI agents",
  auth: connect({ connector: "mcp.agentmail.to/" + process.env.VERCEL_PROJECT_ID, autoProvision: true }),
});
