let messages = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    //destructures text and time
    const { text, time } = req.body;
    messages.push({ id, text, time });
    id++;
    res.status(200).send(messages);
  },
  //returns the messages array
  read: (req, res) => {
    res.status(200).send(messages);
  },
  //this updates the text property using req.body and id using params(look at syntax)
  upDate: (req, res) => {
    const { text } = req.body;
    const updateId = req.params.id;
    const messageIndex = messages.findIndex(message => message.id == updateId);
    let message = messages[messageIndex];

    messages[messageIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };

    res.status(200).send(messages);
  },
  //deletes messages according to id
  delete: (req, res) => {
    const {id} = req.params;
    const index = messages.findIndex(message => message.id === +id);
    messages.splice(index, 1);
    res.status(200).send(messages);
  }

};

  