function startGame1() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    function checkGuess() {
        const userGuess = prompt("Угадайте число от 1 до 100:");
         if (userGuess === null) {
            alert("Игра завершена. Вы вышли из игры.");
            return;
        }
        const guessNumber = parseInt(userGuess);
        if (isNaN(guessNumber)) {
            alert("Пожалуйста, введите число!");
            checkGuess();
            return;
        }

        attempts++;

        if (guessNumber === randomNumber) {
            alert(`Поздравляем! Вы угадали число за ${attempts} попыток.`);
        } else if (guessNumber < randomNumber) {
            alert("Загаданное число больше. Попробуйте еще раз.");
            checkGuess();
        } else {
            alert("Загаданное число меньше. Попробуйте еще раз.");
            checkGuess();
        }
    }

    checkGuess();
}