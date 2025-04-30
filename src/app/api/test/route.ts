import { NeynarAPIClient } from "@neynar/nodejs-sdk";

const client = new NeynarAPIClient(process.env.NEYNAR_API_KEY!);

async function createSigner() {
  const res = await client.createSigner();
  console.log("Signer UUID:", res.signer_uuid); // Signer UUID
  console.log("Public Key:", res.signer.public_key); // Public Key
  return res.signer; // Signer object to use later
}

createSigner();
