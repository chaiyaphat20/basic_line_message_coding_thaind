exports.sendImage = () => {
    let msg = {
        type: 'image',
        originalContentUrl: process.env.BASE_URL + '/images/2.jpeg',  //http://localhost:4000/images/2.jpeg
        previewImageUrl: process.env.BASE_URL + '/images/1.png',
    }
    return msg
}
