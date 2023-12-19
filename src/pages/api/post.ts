import prisma from "../../lib/prisma";

// POST /api/post
// Required fields in body: file
export default async function handle(req, res) {
  const content = req.body.file;
  const result = await prisma.report.create({
    data: {
      content: content,
    },
  });
  res.json(result);
}
