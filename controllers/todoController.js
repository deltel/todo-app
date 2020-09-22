const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

const mongoose = require('mongoose');

module.exports = async function (app) {
  // connect to database
  await mongoose.connect('mongodb://<user>:<password>@<db-url>');

  // create a schema
  const todoSchema = new mongoose.Schema(
    { item: String }
  );

  const Todo = mongoose.model('Todo', todoSchema);
  app.get('/todo', (req, res) => {
    Todo.find({}, function (err, data) {
      if (err) throw err;
      res.render('todo', { data: data });
    });
  });

  app.post('/todo', urlEncodedParser, (req, res) => {
    item = { item: req.body.item };
    const newTodo = Todo(item).save(function (err) {
      if (err) throw err;
      res.redirect(303, '/todo');
    });
  });

  app.delete('/todo/:item', (req, res) => {
    const item = { item: req.params.item.replace(/\-/g, " ") };
    Todo.deleteOne(item, function (err) {
      if (err) throw err;
      res.redirect(303, '/todo');
    });
  });
};