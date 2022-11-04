function* fibo(){
    let a=0;
    let b=1;
    while(true){
        yield a;
        let temp=a;
        a=b;
        b=b+temp;
    }
}
const sequence=fibo();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);









-------------------------------
  iterator 
const favouratesMovies=[
    "hello",
    "next"
]

const iterator=favouratesMovies[Symbol.iterator]();

console.log(iterator.next());
