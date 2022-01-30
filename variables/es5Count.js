function count(inputString) {
    var characters = ['a', 'e', 'i', 'o', 'u'];
    var number = 0;

    for (var i = 0; i < inputString.length; i++){
        if (characters.includes(inputString[i])) {
            number++;
        }
    }
    return number;
};

var result = count('ajdefbywurjiugiawtet')
console.log(result);