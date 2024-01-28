const model = require("../models/quote");
const Quote = model.Quote;

exports.getAll = async (req, res) => {
  const quotes = await Quote.find();
  console.log("gett");
  res.json(quotes);
};

exports.get = async (req, res) => {
  const id = req.params.id;

  try {
    const quote = await Quote.findById(id);
    res.send(quote);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

exports.create = (req, res) => {
  const quote = Quote(req.body);

  quote
    .save()
    .then((doc) => res.send(doc))
    .catch((err) => {
      res.status(400).json(err.message);
    });
};

exports.replace = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedquote = await Quote.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.json(updatedquote);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

exports.update = (req, res) => {
  const id = req.params.id;

  Quote.findOneAndUpdate({ _id: id }, req.body, { new: true })
    .then((doc) => res.json(doc))
    .catch((err) => res.json(err.message));
};

exports.deleteIt = (req, res) => {
  const id = req.params.id;

  Quote.findOneAndDelete({ _id: id })
    .then((doc) => res.json(doc))
    .catch((err) => res.json(err.message));
};

//you can use either
// 1. Async/await + try and catch
// 2. Promise -> then and catch
