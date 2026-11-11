import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.ircode.app/mcp",
  description: "Identify images by scanning them and register images so they link to your site.",
  auth: connect({ connector: "api.ircode.app/" + process.env.VERCEL_PROJECT_ID, autoProvision: true }),
});
