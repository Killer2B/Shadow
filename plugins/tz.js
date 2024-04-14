import moment from 'moment-timezone';

const handler = async (m, {conn}) => {

  const tzEgypt = moment().tz('Africa/Cairo').format('DD/MM HH:mm');
  await conn.sendMessage(m.chat, {text: `\`\`\`
الوقت الحالي في مصر هو :


▢ Egypt     : ${tzEgypt}
  ${String.fromCharCode(8206).repeat(850)}
  ▢ instagram.com/noureddine_ouafy`}, {quoted: m});
};
handler.help = ["tz"]
handler.tags = ["infobot"]
handler.command = /^(tz)$/i
export default handler;
