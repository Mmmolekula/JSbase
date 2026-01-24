 const quiz = [
    {
      question: "Где живет джин?",
      options: ["1. В доме", "2. В лампе", "3. У друзей "],
      correctAnswer: 2
    },
    {
      question: "Когда солнце опускается - это?",
      options: ["1.Закат", "2. Ночь", "3.Рассвет"],
      correctAnswer: 1
    },
    {
      question: "Какое название у мультика, где белка пыталась достать орех из льда?",
      options: ["1. Морозка", "2. Холодное сердце", "3. Ледниковый период"],
      correctAnswer: 3
    },
    {
        question: "В каком мультике была принцесса Жасмин?",
        options: ["1. Алладин", "2. Золушка", "3. Белоснежка"],
        correctAnswer: 1
      }
  ];
  
  function startQuiz() {
    let correctAnswers = 0;
  
    quiz.forEach((question, index) => {
      const questionText = `Вопрос ${index + 1}: ${question.question}\n${question.options.join("\n")}`;
  
      const userAnswer = parseInt(prompt(questionText));
  
      if (userAnswer === question.correctAnswer) {
        correctAnswers++;
      }
    });
  
    alert(`Вы ответили правильно на ${correctAnswers} из ${quiz.length} вопросов!`);
 
}