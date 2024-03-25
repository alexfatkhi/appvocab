let forInput = document.getElementById("forInput");
let englishWord = [];
let bahasaWord = [];
let englishWordSementara = [];
let bahasaWordSementara = [];
let length = 5;


for (let i = 0; i < length; i++){
    let input = `<input id="inputEnglish${i}"> = <input id="inputBahasa${i}"> <br><br>`
    forInput.innerHTML += input;
    if (i == length - 1) {
        forInput.innerHTML += `<button id="submitButton"> Submit </button><br><br><br><br>`
    }    
}

let submitButton = document.getElementById(`submitButton`);

submitButton.onclick = function () {
    let englishWord = [];
    let bahasaWord = [];
    for (let i = 0; i < length; i++) {
        let inputEnglish = document.getElementById(`inputEnglish${i}`);
        let inputBahasa = document.getElementById(`inputBahasa${i}`);

        englishWord.push(inputEnglish.value);
        bahasaWord.push(inputBahasa.value);
        console.log(englishWord);
        console.log(bahasaWord);
    }

    forInput.innerHTML = ""; 



    questionAndAnswer(englishWord,bahasaWord, length);


}





function questionAndAnswer(englishWord, bahasaWord, length) {
    let jumlahPutaran = 0;
    let check = 0;
    let i = 0;
    let deletedItems;

    function askQuestion() {
        if (check === i) {
            let questionsPart = document.getElementById("questions");
            let engOrInd = Math.floor(Math.random() * 2);
            let number = Math.floor(Math.random() * englishWord.length);

            if (engOrInd === 1) {
                let question = `${englishWord[number]}`;
                let answer = `${bahasaWord[number]}`;
                questionsPart.innerHTML = `${question} = <input id="inputAnswerBahasa${i}"> <br><br>`;
                document.getElementById(`inputAnswerBahasa${i}`).focus();

                document.getElementById(`inputAnswerBahasa${i}`).addEventListener("keyup", function(event) {
                    // 13 adalah kode untuk tombol "Enter"
                    if (event.keyCode === 13) {
                      // Panggil fungsi yang ingin Anda jalankan saat tombol "Enter" ditekan
                        forSubmitting1();
                    }
                  }); 
                    
                    
                    
                function forSubmitting1 () {
                    let answernya = document.getElementById(`inputAnswerBahasa${i}`).value;
                    console.log(answer, answernya, "--------");
                    console.log(answernya === answer ? "Benar" : "Salah");
                    if (answernya === answer) {
                        deletedItems = englishWord.splice(number, 1);
                        englishWordSementara.push(deletedItems);
                        deletedItems = bahasaWord.splice(number, 1);
                        bahasaWordSementara.push(deletedItems);
                        check++;
                        i++;
                        console.log(englishWordSementara, "--")
                        console.log(englishWord, "+++++")
                        

                        if (englishWord.length == 0 && bahasaWord.length == 0) {
                            console.log("000000000000000");
                            console.log(englishWord);
                            jumlahPutaran++;
                            
                            questionsPart.innerHTML = `<p>KAMU SUDAH MENYELESAIKAN SEMUA KATA, AKAN DIULANG DALAM 3 DETIK</p><br>
                            ${jumlahPutaran} kali putaran`;
                            englishWord = englishWordSementara.flat()
                            bahasaWord = bahasaWordSementara.flat()
                            

                            console.log(englishWordSementara);
                            console.log(bahasaWordSementara);
                            console.log(englishWord, "-=-=-=-=-=-=-");
                            console.log(bahasaWord, "-=-=-=-=-=-=-=");
                            englishWordSementara = [];
                            bahasaWordSementara = [];
                            setTimeout(function () {
                                askQuestion(); // Lanjutkan ke pertanyaan berikutnya
                            }, 3000);
                        } else {
                            askQuestion();
                        }
                        
                        
                        

                        
                    } else {
                        questionsPart.innerHTML = `${question} = <input id="inputAnswerBahasa${i}" value="${answernya}"> ❌ Salah <br><br>`;
                        document.getElementById(`inputAnswerBahasa${i}`).focus();

                        document.getElementById(`inputAnswerBahasa${i}`).addEventListener("keyup", function(event) {
                            if (event.keyCode === 13) {
                                forSubmitting1();
                            }
                        });
                    }
                };

            } else {
                let question = `${bahasaWord[number]}`;
                let answer = `${englishWord[number]}`;
                questionsPart.innerHTML = `${question} = <input id="inputAnswerEnglish${i}"> <br><br>`;
                document.getElementById(`inputAnswerEnglish${i}`).focus();

                document.getElementById(`inputAnswerEnglish${i}`).addEventListener("keyup", function(event) {
                    if (event.keyCode === 13) {
                        forSubmitting2();
                    }
                  });
                       
                    
                
                function forSubmitting2 () {
                    let answernya = document.getElementById(`inputAnswerEnglish${i}`).value;
                    console.log(answer, answernya, "--------");
                    console.log(answernya === answer ? "Benar" : "Salah");
                    if (answernya === answer) {
                        deletedItems = englishWord.splice(number, 1);
                        englishWordSementara.push(deletedItems);
                        deletedItems = bahasaWord.splice(number, 1);
                        bahasaWordSementara.push(deletedItems);
                        check++;
                        i++;
                        console.log(englishWordSementara, "--")
                        console.log(englishWord, "+++++")
                        

                        if (englishWord.length == 0 && bahasaWord.length == 0) {
                            console.log("000000000000000");
                            console.log(englishWord)
                            englishWord = englishWordSementara.flat()
                            bahasaWord = bahasaWordSementara.flat()
                            jumlahPutaran++;
                            
                            questionsPart.innerHTML = `<p>KAMU SUDAH MENYELESAIKAN SEMUA KATA, AKAN DIULANG DALAM 3 DETIK</p><br>
                            ${jumlahPutaran} kali putaran`;
                            console.log(englishWordSementara);
                            console.log(bahasaWordSementara);
                            console.log(englishWord, "-=-=-=-=-=-=-");
                            console.log(bahasaWord, "-=-=-=-=-=-=-=");
                            englishWordSementara = [];
                            bahasaWordSementara = [];
                            setTimeout(function () {
                                askQuestion(); // Lanjutkan ke pertanyaan berikutnya
                            }, 3000);
                        } else {
                            askQuestion();
                        }
                        
                        

                    }
                    else {
                        questionsPart.innerHTML = `${question} = <input id="inputAnswerEnglish${i}" value="${answernya}"> ❌ Salah <br><br>`;
                        document.getElementById(`inputAnswerEnglish${i}`).focus();

                        document.getElementById(`inputAnswerEnglish${i}`).addEventListener("keyup", function(event) {
                            if (event.keyCode === 13) {
                                forSubmitting2();
                            }
                        });




                    }
                    
                };    
                
            }
        }
    }

    askQuestion(); // Panggil fungsi pertama kali
}





