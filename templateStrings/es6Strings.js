const getMessage = () => {
    const year = new Date().getFullYear();
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;

    return `Today's date is: ${month}/${date}/${year}`;
};

const message = getMessage();
console.log(message);



// const getMessage = () => {
//     return `Today's date is: ${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`;
// };

// const message = getMessage();
// console.log(message);