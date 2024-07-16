import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;

var handler = async (m, { conn, usedPrefix }) => {
  let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ""
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "𝑴𝑬𝑵𝑼 1 - 𝑮𝑹𝑼𝑷𝑶𝑺\nhttps://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "𝙈𝙄𝙆𝘼𝙎𝘼 𝘽𝙊𝙏",
            subtitle: "",
            hasMediaAttachment: true,
            mediaAttachment: {
              url: "file:///home/container/src/Menugrupo/image.png", // Cambia la ruta a la ubicación correcta de tu imagen
              type: proto.Message.MediaAttachmentType.IMAGE
            }
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              // ... (botones existentes)
            ]
          })
        })
      }
    }
  }, {});

  await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
};

handler.command = /^(menu1|help1|ayuda1)$/i;

export default handler;
