const add = function (x,y) {
    console.log(x);
    console.log(y);
    return x + y;
} 
const r1 = add(5, 3) // у змінну записується результат виклику функції, результат це те що ставимо в return а вона повертує результат x+y
console.log('r1:', r1);

console.log(add(5,3));