const services = require('./handle-message')
exports.handleEvent = (event) => {
    switch (event.type) {
        case 'message':
            const { type } = event.message
            switch (type) {
                case 'text':
                    services.handleMessage(event)
                    break
                case 'sticker':
                    console.log('sticker message')
                    break
                default:
                    throw new Error(
                        'Unknown message type' + JSON.stringify(type)
                    )
            }
            break
        case 'postback':
            console.log('postback')
        default:
            throw new Error('Unknown event' + JSON.stringify(event))
    }
}

// if (event.type !== 'message' || event.message.type !== 'text') {
//     // ignore non-text-message event
//     return Promise.resolve(null)
//   }

//   // create a echoing text message
//   const echo = { type: 'text', text: event.message.text }

//   // use reply API
//   return config.client.replyMessage(event.replyToken, echo)
