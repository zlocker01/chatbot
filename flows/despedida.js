const { addKeyword } = require("@bot-whatsapp/bot");

const flowBye = addKeyword([
  "bye",
  "adios",
  "chao",
  "hasta luego",
  "nos vemos",
]).addAnswer("🤖👋 ¡Hasta pronto! Un placer atenderte");

module.exports = flowBye;