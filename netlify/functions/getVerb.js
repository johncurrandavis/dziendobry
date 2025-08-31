import { promises as fs } from "fs";
import path from "path";

export async function handler(event) {

  try {
    const verbName = event.queryStringParameters.name;
    if (!verbName) {
      return { statusCode: 400, body: "Missing verb name" };
    }

    const filePath = path.join(process.cwd(), "src", "verbs", `${verbName}.json`);
    const data = await fs.readFile(filePath, "utf-8");

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: data
    };
  } catch (err) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: "Verb not found" })
    };
  }

}
