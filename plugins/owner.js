import _0x5cf0df from "node-fetch";
let handler = async (_0x5b1cf6, {
  conn: _0x3223e4
}) => {
  let _0x41e9b3 = "\n*「 معلومات عن صاحب البوت 」\n\n*instagram:\ninstagram.com/biroyel934\n\n".trim();
  _0x5b1cf6.reply(_0x41e9b3);
};
handler.help = ["owner"];
handler.tags = ["infobot"];
handler.command = /^(owner)$/i;
handler.limit = false;
export default handler;
