import prisma from "../../lib/prisma";

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { content } = req.body;
  console.log(content);
  const result = await prisma.report.create({
    data: {
      content: content,
    },
  });
  res.json(result);
}
