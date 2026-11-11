import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp-server.zomato.com/mcp",
  description: "Explore restaurants and food delivery options.",
  auth: connect({ connector: "mcp-server.zomato.com/" + process.env.VERCEL_PROJECT_ID, autoProvision: true }),
});
