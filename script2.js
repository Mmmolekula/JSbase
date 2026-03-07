function playGame1() {
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateTask() {
        const operations = ['+', '-', '*', '/'];
        const operation = operations[getRandomNumber(0, operations.length - 1)];

        let num1, num2;

        if (operation === '/') {
            num2 = getRandomNumber(1, 10);
            num1 = num2 * getRandomNumber(1, 10);
        } else {
            num1 = getRandomNumber(1, 100);
            num2 = getRandomNumber(1, 100);
        }

        const task = `${num1} ${operation} ${num2}`;
        const answer = calculateAnswer(num1, operation, num2);

        return { task, answer };
    }

    function calculateAnswer(num1, operation, num2) {
        switch (operation) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return NaN;
        }
    }

    const { task, answer } = generateTask();
    const userAnswer = prompt(`Решите задачу: ${task}`);

    if (userAnswer === null || userAnswer === '') {
        alert('Игра отменена');
        return;
    }

    const userNumber = parseFloat(userAnswer);

    if (isNaN(userNumber)) {
        alert('Введите корректное число.');
    } else if (userNumber === answer) {
        alert('Верный ответ!');
    } else {
        alert(`Ошибка! Верный ответ: ${answer}`);
    }
}