$(document).ready(function () {
    // add event listener
    $("button#addWord").click(addWord);
    $("button#generateHaiku").click(generateHaiku);

    // create 2-D global array
    let numSyllables = [
        [],
        ["is", "day", "life", "love", "fish"],
        ["worry", "mascot", "napkin", "publish", "picnic"],
        ["adequate", "attention", "banana", "document", "everything"],
        ["bureaucratic", "directory", "execution", "degenerate", "establishment"],
        ["unacceptable", "unexplainable", "overestimate", "configuration", "procrastination"],
        ["disapriciation", "incomprehensible", "antediluvian", "circumnavigation"],
        ["palatopharyngeus", "occipitofrontalis", "unconscionability"]
    ];

    // for (let row = 0; row < numSyllables.length; row++) {
    //     let aRow = numSyllables[row];
    //
    //     for (let col = 0; col < aRow.length; col++) {
    //         $("p#lineOne").text(aRow[col]);
    //     }
    // }

    function addWord() {
        // get  val() of word entered by user
        let userWord = $("input#enterWord").val();

        // count num of dashes in word and set equal to syllables
        let dashCount = 0;
        for (let i = 0; i < userWord.length; i++) {
            let letter = userWord[i];
            if (letter === "-") {
                dashCount++;
            }
        }
        let syllables = dashCount + 1;

        // if the word has more than 7 syllables, display error
        if (syllables > 7) {
            alert("Enter valid word!");
            return;
        }

        // if the word is 7 or less, add word to numSyllables
        if (syllables <= 7) {
            numSyllables.push(userWord);
        }

        // take out dashes of userWord
        userWord.replace("-", "");

    }

    function genLineOne() {
        let lineSyllables = 0;

        while (lineSyllables !== 5) {
            // generate random number between 1 - 5
            let randomRow = Math.floor(Math.random() * 5) + 1;
            let newSyllables = lineSyllables += randomRow;

            // if newSyllables is greater than 5, repeat randomRow until it becomes === 5
            while (newSyllables > 5) {
                newSyllables = lineSyllables -= randomRow;
                randomRow = Math.floor(Math.random() * 5) + 1;
                newSyllables = lineSyllables += randomRow;
                if (lineSyllables === 5)
                {
                    break;
                }

            }

            // use randomRow to pick a row
            let rowPick = numSyllables[randomRow];

            // use randomCol to pick a col
            let randomCol = Math.floor(Math.random() * rowPick.length);

            // get a random word from the array
            let chosenWord = numSyllables[randomRow][randomCol];

            $("p#lineOne").append(`${chosenWord} `);
        }
    }

    function genLineTwo() {
        let lineSyllables = 0;

        while (lineSyllables !== 7) {
            // generate random number between 1 - 5
            let randomRow = Math.floor(Math.random() * 7) + 1;
            let newSyllables = lineSyllables += randomRow;

            // if newSyllables is greater than 7, repeat randomRow until it becomes === 7
            while (newSyllables > 7) {
                newSyllables = lineSyllables -= randomRow;
                randomRow = Math.floor(Math.random() * 7) + 1;
                newSyllables = lineSyllables += randomRow;
                if (lineSyllables === 7)
                {
                    break;
                }

            }

            // use randomRow to pick a row
            let rowPick = numSyllables[randomRow];

            // use randomCol to pick a col
            let randomCol = Math.floor(Math.random() * rowPick.length);

            // get a random word from the array
            let chosenWord = numSyllables[randomRow][randomCol];

            $("p#lineTwo").append(`${chosenWord} `);
        }
    }

    function genLineThree() {
        let lineSyllables = 0;

        while (lineSyllables !== 5) {
            // generate random number between 1 - 5
            let randomRow = Math.floor(Math.random() * 5) + 1;
            let newSyllables = lineSyllables += randomRow;

            // if newSyllables is greater than 5, repeat randomRow until it becomes === 5
            while (newSyllables > 5) {
                newSyllables = lineSyllables -= randomRow;
                randomRow = Math.floor(Math.random() * 5) + 1;
                newSyllables = lineSyllables += randomRow;
                if (lineSyllables === 5)
                {
                    break;
                }

            }

            // use randomRow to pick a row
            let rowPick = numSyllables[randomRow];

            // use randomCol to pick a col
            let randomCol = Math.floor(Math.random() * rowPick.length);

            // get a random word from the array
            let chosenWord = numSyllables[randomRow][randomCol];

            $("p#lineThree").append(`${chosenWord} `);
        }

    }

    function generateHaiku() {
        genLineOne();
        genLineTwo();
        genLineThree();
    }


});