const Question = require('../models/Question');

const addData = async (req, res) => {
  const { question, options, answer } = req.body;
  try {
    const newQuestion = new Question({ question, options, answer });
    await newQuestion.save();
    res.status(201).json({ message: 'Question added successfully!', question: newQuestion });
  } catch (error) {
    res.status(400).json({ message: 'Error adding question: ' + error.message });
  }
};

module.exports = { addData };