// Hangman Project
//RETURN A 'HIDDEN' VERSION OF THE SUPPLIED SECRET WORD
function getDisplay(word)
{   
    var disp='';
    for(var i=0; i < word.length; i++){ 
        disp=disp+'-';
    }
    return disp;
}

//FIND IF THE LETTER IS IN THE WORD
function isLetterInWord(word,letter){
     if (word == null){ 
    return; 
    }
    else{
    if(word.search(letter)!=-1){
        return true;
    }
    else{
        return false;
    }
    }

}

//UPDATE GAME DISPLAY IF WE'VE BEEN GIVEN A MATCHING LETTER
function getLetter(word,letter,display){
    if (word == null){ 
    return; 
    }
    else{
    while(word.search(letter)!=-1){
        var index=word.search(letter);
        display = display.substr(0, index) + letter + display.substr(index + 1);
        word = word.substr(0, index) + '-' + word.substr(index + 1);
    }
    return display;
}
}

/*  
    *RETURN 'finished' if game has finished 
    *RETURN 'lose' if game has lossed 
    *RETURN 'continue' if it is not finished
*/
function isFinished(word, display, left) {
    if(left!=0){
        if(word==display){
            return 'finished';
        }
        else{
            return 'continue';
        }
    }
    else{
        return 'lose';
    }
}