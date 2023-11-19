import * as fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    let data = await fs.promises.readdir("ContactForm");
    fs.promises.writeFile(
      `ContactForm/${data.length + 1}.json`,
      JSON.stringify(req.body)
    );
    res.status(200).json(req);
  } else {
    // Handle any other HTTP method
    res.status(200).json(["allTours"]);
    //   name, email, desc, phone
  }
}
