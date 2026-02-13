function reverseText(text) {
    return text.split("").reverse().join("");
  }
  
  function playReverseGame() {
    const userInput = prompt("Введите текст:");
  
    if (userInput) {
      const reversedText = reverseText(userInput);
  
      alert(`Перевернутый текст: ${reversedText}`);
    } else {
      alert("Вы не ввели текст!");
    }  
}