import { StreamingTextResponse, Message } from "ai";
import { AIMessage, HumanMessage } from "langchain/schema";
import { ChatOllama } from "langchain/chat_models/ollama";
import { BytesOutputParser } from "langchain/schema/output_parser";

export const runtime = "edge";

export async function POST(req) {
  const { messages } = await req.json();

  const model = new ChatOllama({
    baseUrl: "http://localhost:11434",
    model: "mistral",
  });

  const parser = new BytesOutputParser();

  const stream = await model
    .pipe(parser)
    .stream(
      messages.map((m) =>
        m.role == "user"
          ? new HumanMessage(m.content)
          : new AIMessage(m.content)
      )
    );

  return new StreamingTextResponse(stream);
}
