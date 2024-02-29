const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const sendEmail = async (data) => {
  const email = data;
  // transport obj with data to send mails
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // sending email to confirm account
  const info = await transport.sendMail({
    from: "Diego Beristain Desarrollo Web",
    to: email,
    subject: "Cuestionario de Inicio",
    text: "Conociendo el alcance del proyecto y cotización",
    html: `<div style="background-color: #535b61; color: #fff; padding:10px;">
    <h1> Conociendo el alcance del proyecto y cotización</h1>
    <h3>¡Hola!</h3>
    <p>Es un placer saludarte. Estoy emocionado de tener la oportunidad de colaborar contigo en tu proyecto web. Para asegurarnos de comprender completamente tus necesidades y objetivos, me gustaría solicitarte que completes un breve cuestionario. Esto nos ayudará a definir el alcance del proyecto y a proporcionarte una cotización precisa y una fecha de entrega adecuada.</p>
    <br>
    <h4>Por favor, tómate un momento para responder las siguientes preguntas: </h4>
    <ul>
      <li>Descripción del Proyecto: Cuéntanos brevemente sobre tu proyecto web. ¿Qué tipo de servicio estás buscando? (Sitio web, landing page, chatbot de WhatsApp, aplicación web, u otros servicios combinados)</li>
      <li>Objetivos: ¿Cuáles son tus principales objetivos con este proyecto? ¿Qué esperas lograr con el sitio web o la aplicación? </li>
      <li>Idea y Requerimientos: Describe tu idea para el proyecto y menciona cualquier requerimiento específico que tengas en mente. ¿Hay características o funcionalidades particulares que necesites incluir? </li>
      <li>Contenido y Recursos: ¿Tienes el contenido (textos, imágenes, etc.) listo para ser incluido en el proyecto, o necesitas ayuda con la creación? ¿Hay recursos adicionales que necesites, como fotografías o vídeos? </li>
      <li>Diseño y Estilo: ¿Tienes alguna preferencia en cuanto al diseño o estilo del sitio web o la aplicación? ¿Hay algún sitio web o aplicación que te guste como referencia? </li>
      <li>Compatibilidad y Plazos: ¿Necesitas que el proyecto sea compatible con dispositivos móviles? ¿Hay algún plazo específico para la finalización del proyecto que debamos tener en cuenta? </li>
      <li>Presupuesto: ¿Tienes un presupuesto establecido para este proyecto? Esto nos ayudará a ajustar nuestras propuestas a tus posibilidades económicas. </li>
    </ul>
    <br>
    <p>Te agradezco de antemano por tomarte el tiempo de completar este cuestionario. Una vez que recibamos tus respuestas, estaremos en contacto contigo lo antes posible para discutir los detalles y proporcionarte una cotización personalizada.</p>
    <p> Quedo a tu disposición para cualquier pregunta o aclaración adicional que puedas necesitar. Hasta luego.</p>
    </div>`,
  });
  console.log("Message sent: %s", info.messageId);
};

module.exports = sendEmail;