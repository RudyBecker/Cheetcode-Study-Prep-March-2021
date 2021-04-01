function isPalindrome(str) {
    let onlyLetters = ''
    for (let i = 0; i < str.length; i++){
        let char = str[i]
        if (char.toLowerCase() !== char.toUpperCase()){
            onlyLetters += char 
        }
    }
    
    return onlyLetters.toLowerCase()===onlyLetters.split("").reverse().join("").toLowerCase()
};