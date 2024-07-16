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
              url: "https://th.bing.com/th/id/OIG2.6DYzgwS1ijLpt6wLkkQm?w=1024&h=1024&rs=1&pid=ImgDetMain",
              type: proto.Message.MediaAttachmentType.IMAGE
            }
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".𝘔𝘦𝘯𝘶𝘧𝘧\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".𝘊𝘰𝘮𝘢𝘯𝘥𝘰𝘴𝘧𝘧\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".𝘒𝘪𝘤𝘬\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".𝘎𝘳𝘶𝘱𝘰\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".𝘗𝘳𝘰𝘮𝘰𝘵𝘦\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".𝘋𝘦𝘮𝘰𝘵𝘦\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".𝘓𝘪𝘯𝘬\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".𝘛𝘰𝘥𝘰𝘴\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".𝘚𝘦𝘵𝘸𝘦𝘭𝘤𝘰𝘮𝘦\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".𝘚𝘦𝘵𝘣𝘺𝘦\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".𝘕𝘰𝘵𝘪𝘧𝘺\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".Tag\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".𝘍𝘢𝘯𝘵𝘢𝘴𝘮𝘢𝘴\",\"id\":\"message\"}"
              },
              {
                "name
