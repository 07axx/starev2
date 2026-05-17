export default function handler(req, res) {
  if (!global.runs) global.runs = [];

  if (req.method === "GET") {
    return res.json(global.runs);
  }

  if (req.method === "POST") {
    const run = req.body;
    run.status = "pending";
    global.runs.push(run);

    return res.json({ ok: true });
  }
}
