var axios = require('axios');

function uploadMedia(data) {
  var config = {
    method: 'post',
    url: `https://your-webapp-hostname:your-webapp-port/${process.env.UPLOAD_VERSION}/media`,
    headers: {
      'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`,
      'Content-Type': 'application/pdf'
    },
    data: Buffer.from(allpdf.pdf)
  };

  return axios(config)
}

// function getTextMessageInput(recipient, text) {
//   return JSON.stringify({
//     "messaging_product": "whatsapp",
//     "preview_url": false,
//     "recipient_type": "individual",
//     "to": recipient,
//     "type": "template",
//     "template": {
// 		"name": "hello_world",
// 		"language": {
// 			"code": "en_US"
// 		}
//     }
//   });
// }

module.exports = {
  uploadMedia: uploadMedia,
  // getTextMessageInput: getTextMessageInput
};