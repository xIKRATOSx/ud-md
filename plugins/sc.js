let handler = async (m, { conn, usedPrefix: _p }) => {


let buttonMessage= {
'document':{'url': 'https://i.ibb.co/cw886gK/b69bd948e975.jpg' },
'mimetype': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
'fileName': `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 𝐒𝐮𝐛 𝐌𝐲 𝐘𝐭」`,
'fileLength': 22222222222222,
'pageCount': 222,
'contextInfo':{
'forwardingScore':222,
'isForwarded':true,
'externalAdReply':{
'mediaUrl': 'http://github.com/xIKRATOSx',
'mediaType': 2,
'previewType': 2,
'title': 'x_IKRATOS_x 🇵🇰 ❤️',
'body': me,
'thumbnail': thumb2,
'sourceUrl': 'https://www.youtube.com/c/UMARMODS'}},
'caption': 'http://github.com/xIKRATOSx',
'footer': me,
'buttons':[
{'buttonId': _p + 'menu','buttonText':{'displayText':'ᴍᴇɴᴜ😈'},'type':1},
{'buttonId': _p + 'runtime','buttonText':{'displayText':'ʀᴜɴᴛɪᴍᴇ🏃‍♂️'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted: m })

}

handler.command = /^(sc)$/i

export default handler
