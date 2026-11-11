import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.lotsofsounds.com",
  description: "Search, stream, and download royalty-free sound effects.",
  auth: connect({ connector: "api.lotsofsounds.com/" + process.env.VERCEL_PROJECT_ID, autoProvision: true }),
});
