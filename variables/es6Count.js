const count = (inputString) => {
    const characters = ['a', 'e', 'i', 'o', 'u'];
    let number = 0;

    for (let i = 0; i < inputString.length; i++){
        if (characters.includes(inputString[i])) {
            number++;
        }
    }
    return number;
};

const result = count('ajdefbywurjiugiawtet')
console.log(result);