const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/blogApp', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a Blog schema
const blogSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Blog = mongoose.model('Blog', blogSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Endpoint to handle blog post submission
app.post('/post', (req, res) => {
  const newBlog = new Blog({
    title: req.body.title,
    content: req.body.content
  });

  newBlog.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send('Blog Published Successfully!');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
