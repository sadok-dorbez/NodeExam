const chat = require("../modele/chat");
const getMessages = (req, res, next) => {
  chat.find((err, messages) => {
    if (err) {
      console.log("error:", err);
    } else {
      res.json({ title:"les listes des messages", messages });
    }
  });
};

const saveMessage = (req, res, next) => {
    new chat({
      username: req.body.username,
      message: req.body.message,
      sendDate: req.body.sendDate,
    }).save((err, newMessage) => {
      if (err) console.log("un message d'erreur " + err);
      else {
        res.render("chat");
      }
    });
  };



module.exports = {
    getMessages,
    saveMessage,
}