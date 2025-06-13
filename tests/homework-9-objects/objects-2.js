/*
Додай у book нову властивість isAvailable, встанови значення true.
*/

const book = {
    title: 'Khiba revut voly yak yasla povni?',
    author: 'Panas Myrnyi',
    pages: '380',
};

book.isAvailable = 'true';
console.log(book.isAvailable)

// другий способ додавання через квадратні дужки  
// book['isAvailable'] = 'true'