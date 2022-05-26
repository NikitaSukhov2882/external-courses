function Hangman(word) {
    let currentWord = '';
    let answer = '_'.repeat(currentWord.length);
    let wrongSymbols = [];
    let errors = 6;
    currentWord = word;

    return {
      guess(symbol) {
        let count = 0;
        for (let i = 0; i < currentWord.length; i += 1) {
          if (symbol.toLowerCase() === currentWord[i].toLowerCase()) {
            const test = answer.split('');
            test[i] = symbol.toLowerCase();
            answer = test.join('');
            count += 1;
          }
        }
        if (count === 0) {
          errors -= 1;
          wrongSymbols.push(symbol.toLowerCase());
          console.log(
            `wrong letter, errors left ${errors} | ${wrongSymbols.join(',')}`,
          );

          return this;
        }
        if (answer === currentWord) {
          console.log(`${answer} | You won!`);

          return this;
        }
        console.log(answer);

        return this;
      },
      getGuessedString() {
        console.log(answer);

        return this;
      },
      getErrorsLeft() {
        console.log(errors);

        return this;
      },

      getWrongSymbols() {
        console.log(wrongSymbols);

        return this;
      },

      getStatus() {
        console.log(`${answer} | errors left ${errors}`);

        return this;
      },

      startAgain(newWord) {
        currentWord = newWord;
        answer = '_'.repeat(currentWord.length);
        wrongSymbols = [];
        errors = 6;

        return this;
      },

    };

  }
  
  const hangman = new Hangman('webpurple');
  
  module.exports = hangman;