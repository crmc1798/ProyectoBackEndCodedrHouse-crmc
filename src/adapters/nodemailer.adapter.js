const { emailUser } = require('../config/email.config')
const transport = require('../utils/email.util')

class NodemailerAdapter {
  async sendNotification(newUserInfo, notifyForNewUser) {
    try {
      const mailOptions = {
        from: emailUser,
        to: newUserInfo.email,
        subject: notifyForNewUser.subject,
        html: notifyForNewUser.message,
      }
      await transport.sendMail(mailOptions)
      return 'Email enviado'
    }
    catch (error) {
      console.error(`something went wrong ${error}`)
    }
  }
}

module.exports = NodemailerAdapter
