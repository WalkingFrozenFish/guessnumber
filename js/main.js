// Объявление переменных, получение айди элементов
var inputGuessNumber = document.getElementById("inputGuess"),
    buttonGuessSubmit = document.getElementById("buttonGuess");

// Объявление события на клик по элементу
buttonGuessSubmit.onclick = function () {
    var randomNumber = Math.floor(Math.random() * 11); // Получение случайного числа
    var result = document.getElementById("result"); // Получение айди текстового поля

    if (inputGuessNumber.value == randomNumber) {
        result.textContent = "Yes, you guessed it. It was a number " + randomNumber;
    } else if (inputGuessNumber.value > 10 || inputGuessNumber.value < 0) {
        result.textContent = "You have guessed a number that is not in the range";
    } else if (inputGuessNumber.value == "") {
        result.textContent = "You didn't enter a number, so guess the number";
    } else {
        result.textContent = "No, you didn't guess. It was a number " + randomNumber + " try again";
    }
}