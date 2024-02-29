const { addKeyword } = require("@bot-whatsapp/bot");
const sendEmail = require("../register/sendEmail");

const flowServices = addKeyword(["servicios"])
  .addAnswer("🤖 ¿Qué tipo de servicio buscas? esta es la lista", {
    delay: 1000,
  })
  .addAnswer([
    "👉 *_Landing Page_* --> 🖥️ Diseñada para dirigir el tráfico de usuarios desde diferentes fuentes, como anuncios en línea, redes sociales o campañas de correo electrónico, y convencer a los visitantes para que realicen una acción deseada",
    "👉 *_Web_* --> 💻 Un _Sitio web_ personalizado y optimizado con SEO para ayudarte en el posicionamiento en internet de tu marca",
    "👉 *_App_* --> 📱💻 Una _Aplicacion Web_ completa y a la medida del proyecto",
    "👉 *_ChatBot_* --> 🤖 Un _Chatbot_ personalizado pueden proporcionar respuestas a preguntas frecuentes, realizar transacciones, enviar recordatorios o notificaciones, y más tareas sin intervención humana directa.",
  ])
  .addAnswer(
    "Si deseas recibir un cuestionario para que yo conocer tu idea y enviarte la cotización de tu proyecto 💵 escribe tu correo",
    {
      capture: true,
      media:
        "https://cdni.iconscout.com/illustration/premium/thumb/web-development-3454628-2918517.png",
    },
    async (ctx, { flowDynamic, endFlow }) => {
      const email = ctx.body;
      await flowDynamic("⌛...");
      sendEmail(email);
      await flowDynamic("🤖 *¡Listo!* Revisa tu correo ☑️", {
        delay: 3000,
      });
      return endFlow();
    }
  );

 module.exports = flowServices;
