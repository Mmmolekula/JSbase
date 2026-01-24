function getComputerChoice() {
    const choices = ["камень", "ножницы", "бумага"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Ничья!";
    }
  
    if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        return "Вы победили!";
    } else {
        return "Вы проиграли!";
    }
  }
  
  function playGame() {
    const userChoice = prompt("Выберите: камень, ножницы или бумага").toLowerCase();
  
    if (!["камень", "ножницы", "бумага"].includes(userChoice)) {
        alert("Пожалуйста, выберите камень, ножницы или бумага.");
        return;
    }
  
    const computerChoice = getComputerChoice();
  
    const result = determineWinner(userChoice, computerChoice);
  
    alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\nРезультат: ${result}`);
  }
  
 