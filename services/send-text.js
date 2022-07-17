exports.sendText = (event) => {
    let msg
    let msgText = event.message.text.toLowerCase().trim()
    if (msgText === 'promotion') {
        msg = { type: 'text', text: 'มีโปรโมชั่นวัคซีน ราคา 1,500 บาท' }
    } else if (msgText === '555') {
        msg = { type: 'text', text: 'HaHa!!' }
    } else if (msgText === 'love') {
        msg = {
            type: 'sticker',
            packageId: '6632',
            stickerId: '11825376',
        }
    } else {
        msg = { type: 'text', text: 'กรุณาพิมพ์ใหม่อีกครั้ง' }
    }

    return msg
}
