let handler = async (m, { conn, usedPrefix: _p }) => {


let buttonMessage= {
'document':{'url': 'https://i.ibb.co/cw886gK/b69bd948e975.jpg' },
'mimetype': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
'fileName': `ใ  ๐ฏ๐๐๐๐ ๐พ๐๐๐๐ ๐๐ฎ๐ ๐๐ฒ ๐๐ญใ`,
'fileLength': 22222222222222,
'pageCount': 222,
'contextInfo':{
'forwardingScore':222,
'isForwarded':true,
'externalAdReply':{
'mediaUrl': 'http://github.com/xIKRATOSx',
'mediaType': 2,
'previewType': 2,
'title': 'x_IKRATOS_x ๐ต๐ฐ โค๏ธ',
'body': me,
'thumbnail': thumb2,
'sourceUrl': 'https://www.youtube.com/c/UMARMODS'}},
'caption': 'http://github.com/xIKRATOSx',
'footer': me,
'buttons':[
{'buttonId': _p + 'menu','buttonText':{'displayText':'แดแดษดแด๐'},'type':1},
{'buttonId': _p + 'runtime','buttonText':{'displayText':'สแดษดแดษชแดแด๐โโ๏ธ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted: m })

}

handler.command = /^(sc)$/i

export default handler
