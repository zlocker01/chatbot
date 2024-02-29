const { addKeyword } = require("@bot-whatsapp/bot");

const flowHuman = addKeyword(['humano']).addAnswer('📞 Puedes llamarlo directamente o comunicarte con el atraves de whatsapp con el telefono \n +522461271229')

module.exports = flowHuman;