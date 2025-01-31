const Question = require('../models/Question');
const getRandomQuestions = async () => {
  const allQuestions = await Question.find();
  if (allQuestions.length < 3) {
    throw new Error('Not enough questions in the database');
  }
  const randomQuestions = [];
  while (randomQuestions.length < 3) {
    const randomIndex = Math.floor(Math.random() * allQuestions.length);
    if (!randomQuestions.includes(allQuestions[randomIndex])) {
      randomQuestions.push(allQuestions[randomIndex]);
    }
  }
  return randomQuestions;
};
const questionController = async (req, res) => {
  try {
    const randomQuestions = await getRandomQuestions();
    res.json(randomQuestions);
  } catch (error) {
    console.error('Error retriev questions:', error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { questionController };










