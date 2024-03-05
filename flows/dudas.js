const { addKeyword } = require("@bot-whatsapp/bot");
const ChatGPTClass = require("../chatGPT/chatGPT");
const Prompt = require("../chatGPT/prompt");

const ChatGPTinstance = new ChatGPTClass();

const flowDoubt = addKeyword(["dudas", "duda"]).addAnswer(
  "🤖 Preguntame lo que necestes saber respecto a las servicios en general 😁",
  {
    capture: true,
  },
  async (ctx, { flowDynamic }) => {
    await ChatGPTinstance.handleMsgChatGPT(Prompt)
    const text = ctx.body;
    const response = await ChatGPTinstance.handleMsgChatGPT(text);
    const message = response.text;
    await flowDynamic(message);
  }
);

module.exports = flowDoubt;