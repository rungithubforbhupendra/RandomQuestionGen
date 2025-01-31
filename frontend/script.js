// script.js

// Fetch questions directly from the backend
window.onload = async () => {
    // Fetch random questions from the backend
    const questionsResponse = await fetch("http://localhost:3000/api/start", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    const questionsData = await questionsResponse.json();
  
    // Check if questions are returned
    if (questionsData.length === 0) {
      alert("No questions available");
      return;
    }
  
    const questionsContainer = document.getElementById("questions-container");
  
    // Dynamically display the questions and options
    questionsData.forEach((question, index) => {
      const questionElement = document.createElement("div");
      questionElement.classList.add("question");
  
      questionElement.innerHTML = `
        <p><strong>${index + 1}. ${question.question}</strong></p>
        ${question.options.map((option, i) => `
          <label>
            <input type="radio" name="q${index}" value="${option}"> ${option}
          </label><br>
        `).join('')}
      `;
  
      questionsContainer.appendChild(questionElement);
    });
  };
  
  // Handle Test Submission
  document.getElementById("submit-test").addEventListener("click", async () => {
    const answers = [];
  
    // Collect all selected answers
    document.querySelectorAll(".question").forEach((question, index) => {
      const selectedOption = question.querySelector(`input[name="q${index}"]:checked`);
      if (selectedOption) {
        answers.push({
          questionId: index, // Question ID or any identifier
          answer: selectedOption.value,
        });
      }
    });
  
    // Send the answers to the backend for submission
    const submitResponse = await fetch("http://localhost:5000/api/submit-test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answers }),
    });
  
    const submitData = await submitResponse.json();
  
    if (submitData.success) {
      alert("Test submitted successfully!");
      // You can redirect to another page or display a success message
    } else {
      alert("Error submitting test");
    }
  });
  