const express = require('express');
const { addData } = require('../controllers/dataAdd');

const router = express.Router();

router.post('/add', addData);

module.exports = router;











// const express = require('express');
// const Question = require('../models/Question'); // Import your Question model

// const router = express.Router();

// Add this route to view all questions in the database
// router.get('/questions', async (req, res) => {
//   try {
//     const questions = await Question.find(); // Fetch all questions
//     res.status(200).json(questions); // Send them as the response
//   } catch (error) {
//     res.status(500).json({ message: 'Error retrieving questions' });
//   }
// });

// module.exports = router;







// const express = require('express');
// const { questionController } = require('../controllers/questionController');
// const authMiddleware = require('../middleware/authMiddleware');

// const router = express.Router();

// router.get('/test',  questionController);

// module.exports = router;

// authMiddleware,