const { addKeyword } = require("@bot-whatsapp/bot");
const ChatGPTClass = require("../chatGPT/chatGPT");

const ChatGPTinstance = new ChatGPTClass();

const flowDoubt = addKeyword(["dudas", "duda"]).addAnswer(
  "🤖 Preguntame lo que quieras 😁",
  {
    capture: true,
  },
  async (ctx, { flowDynamic }) => {
    const text = ctx.body;
    const response = await ChatGPTinstance.handleMsgChatGPT(text);
    const message = response.text;
    await flowDynamic(message);
  }
);

module.exports = flowDoubt;