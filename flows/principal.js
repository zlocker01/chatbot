const { addKeyword } = require("@bot-whatsapp/bot");
// importing flows
const flowHuman = require('./humano');
const flowServices = require('./servicios');
const flowGracias = require("./gracias");
const flowBye = require("./despedida");
const flowDoubt = require("./dudas");

const flowPrincipal = addKeyword([
  "hola",
  "hey",
  "alo",
  "buenas",
  "buenos dias",
  "buenas tardes",
  "buenas noches",
  ".",
])
  .addAnswer(
    "🤖 Hola soy el *_Chatbot_* de Diego, ¿En qué puedo ayudarte hoy?",
    {
      delay: 1000,
    }
  )
  .addAnswer(
    [
      "Escribe alguna de las siguientes palabras para obtener ayuda",
      "👉 *_servicios_* --> para ver los servicios que ofrece",
      "👉 *_humano_* --> para comunicarte directamente con él",
      // "👉 *_dudas_* --> para resolver cualquier duda que tengas",
    ],
    null,
    null,
    [flowHuman, flowServices, flowGracias, flowBye]
  );

module.exports = flowPrincipal;