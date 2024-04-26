// "Use strict";

// const q = document.getElementById('q');
// const w = document.getElementById('w');
// const e = document.getElementById('e');
// const r = document.getElementById('r');
// const t = document.getElementById('t');
// const y = document.getElementById('y');
// const u = document.getElementById('u');
// const i = document.getElementById('i');
// const o = document.getElementById('o');
// const p = document.getElementById('p');
// const a = document.getElementById('a');
// const s = document.getElementById('s');
// const d = document.getElementById('d');
// const f = document.getElementById('f');
// const g = document.getElementById('g');
// const h = document.getElementById('h');
// const j = document.getElementById('j');
// const k = document.getElementById('k');
// const l = document.getElementById('l');
// const z = document.getElementById('z');
// const x = document.getElementById('x');
// const c = document.getElementById('c');
// const v = document.getElementById('v');
// const b = document.getElementById('b');
// const n = document.getElementById('n');
// const m = document.getElementById('m');
// const tarea = document.getElementById('tarea');


// document.getElementById("first").addEventListener('click', function(){
//     let newText = "1";
//     document.getElementById("tarea").value += newText;
// })
// document.getElementById("second").addEventListener('click', function(){
//     newText = "2";
//     document.getElementById("tarea").value += newText;
// })
// document.getElementById("third").addEventListener('click', function(){
//     newText = "3";
//     document.getElementById("tarea").value += newText;
// })
// document.getElementById("fourth").addEventListener('click', function(){
//     newText = "4";
//     document.getElementById("tarea").value += newText;
// })
// document.getElementById("five").addEventListener('click', function(){
//     newText = "5";
//     document.getElementById("tarea").value += newText;
// })
// document.getElementById("six").addEventListener('click', function(){
//     newText = "6";
//     document.getElementById("tarea").value += newText;
// })
// document.getElementById("seven").addEventListener('click', function(){
//     newText = "7";
//     document.getElementById("tarea").value += newText;
// })
// document.getElementById("eight").addEventListener('click', function(){
//     newText = "8";
//     document.getElementById("tarea").value += newText;
// })
// document.getElementById("nine").addEventListener('click', function(){
//     newText = "9";
//     document.getElementById("tarea").value += newText;
// })
// document.getElementById("zero").addEventListener('click', function(){
//     newText = "0";
//     document.getElementById("tarea").value += newText;
// })
// document.getElementById("Reverse").addEventListener('click', function(){
//     newText--;
//     document.getElementById("tarea").value -= newText;
// })

// // var alphaBet = "q";

// document.getElementById('capsLock').addEventListener('click', function(){
//     // for q
//     // alphaBet = 'q'
//     document.getElementById('q').textContent = 'q'.toUpperCase();
//     document.getElementById('q').addEventListener('click', function(){
//         document.getElementById('tarea').value += 'q'.toUpperCase();
//     });
//     // for w
//     // alphaBet = 'w';
//     document.getElementById('w').textContent = 'w'.toUpperCase();
//     document.getElementById('w').addEventListener('click', function(){
//         document.getElementById('tarea').value += 'w'.toUpperCase();
//     });
//     // for e
//     // alphaBet = 'e';
//     document.getElementById('e').textContent = 'e'.toUpperCase();
//     document.getElementById('e').addEventListener('click', function(){
//         document.getElementById('tarea').value += 'e'.toUpperCase();
//     });
//     // for r
//     // alphaBet = 'r';
//     document.getElementById('r').textContent = 'r'.toUpperCase();
//     document.getElementById('r').addEventListener('click', function(){
//         document.getElementById('tarea').value += 'r'.toUpperCase();
//     });
//     // for t
//     // alphaBet = 't';
//     document.getElementById('t').textContent = 't'.toUpperCase();
//     document.getElementById('t').addEventListener('click', function(){
//         document.getElementById('tarea').value += 't'.toUpperCase();
//     });
//     // for y
//     // alphaBet = 'y';
//     document.getElementById('y').textContent = 'y'.toUpperCase();
//     document.getElementById('y').addEventListener('click', function(){
//         document.getElementById('tarea').value += 'y'.toUpperCase();
//     });
//     // for u
//     // alphaBet = 'u';
//     document.getElementById('u').textContent = 'u'.toUpperCase();
//     document.getElementById('u').addEventListener('click', function(){
//         document.getElementById('tarea').value += 'u'.toUpperCase();
//     });
//     // for i
//     // alphaBet = 'i';
//     document.getElementById('i').textContent = 'i'.toUpperCase();
//     document.getElementById('i').addEventListener('click', function(){
//         document.getElementById('tarea').value += 'i'.toUpperCase();
//     });
//     // for o
//     // alphaBet = 'o';
//     document.getElementById('o').textContent = 'o'.toUpperCase();
//     document.getElementById('o').addEventListener('click', function(){
//         document.getElementById('tarea').value += 'o'.toUpperCase();
//     });
//     // for p
//     // alphaBet = 'p';
//     document.getElementById('p').textContent = 'p'.toUpperCase();
//     document.getElementById('p').addEventListener('click', function(){
//         document.getElementById('tarea').value += 'p'.toUpperCase();
//     });
//     // for a
//     // alphaBet = 'a';
//     document.getElementById('a').textContent = 'a'.toUpperCase();
//     document.getElementById('a').addEventListener('click',function(){
//         document.getElementById('tarea').value += 'a'.toUpperCase();
//     });
//     // for s
//     alphaBet = 's';
//     document.getElementById('s').textContent = 's'.toUpperCase();
//     document.getElementById('s').addEventListener('click', function(){
//         document.getElementById('tarea').value += 's'.toUpperCase();
//     });
//     // for d
//     // alphaBet = 'd';
//     document.getElementById('d').textContent = 'd'.toUpperCase();
//     document.getElementById('d').addEventListener('click', function(){
//         document.getElementById('tarea').value += 'd'.toUpperCase();
//     });
//     // for f
//     // alphaBet = 'f';
//     document.getElementById('f').textContent = 'f'.toUpperCase();
//     document.getElementById('f').addEventListener('click', function(){
//         document.getElementById('tarea').value += 'f'.toUpperCase();
//     });
//     // for g
//     // alphaBet = 'g';
//     document.getElementById('g').textContent = 'g'.toUpperCase();
//     document.getElementById('g').addEventListener('click', function(){
//         document.getElementById('tarea').value += 'g'.toUpperCase();
//     });
//     // for h
//     // alphaBet = 'h';
//     document.getElementById('h').textContent = 'h'.toUpperCase();
//     document.getElementById('h').addEventListener('click', function(){
//         document.getElementById('tarea').value += 'h'.toUpperCase();
//     });
//     // for j
//     // alphaBet = 'j';
//     document.getElementById('j').textContent = 'j'.toUpperCase();
//     document.getElementById('j').addEventListener('click', function(){
//         document.getElementById('tarea').value += 'j'.toUpperCase();
//     });
//     // for k
//     // alphaBet = 'k';
//     document.getElementById('k').textContent = 'k'.toUpperCase();
//     document.getElementById('k').addEventListener('click', function(){
//         document.getElementById('tarea').value += 'k'.toUpperCase();
//     });
//     // for l
//     // alphaBet = 'l';
//     document.getElementById('l').textContent = 'l'.toUpperCase();
//     document.getElementById('l').addEventListener('click', function(){
//         document.getElementById('tarea').value += 'l'.toUpperCase();
//     });
//     // for z
//     // alphaBet = 'z';
//     document.getElementById('z').textContent = 'z'.toUpperCase();
//     document.getElementById('z').addEventListener('click', function(){
//         document.getElementById('tarea').value += 'z'.toUpperCase();
//     });
//     // for x
//     // alphaBet = 'x';
//     document.getElementById('x').textContent = 'x'.toUpperCase();
//     document.getElementById('x').addEventListener('click', function(){
//         document.getElementById('tarea').value += 'x'.toUpperCase();
//     });
//     // for c
//     // alphaBet = 'c';
//     document.getElementById('c').textContent = 'c'.toUpperCase();
//     document.getElementById('c').addEventListener('click', function(){
//         document.getElementById('tarea').value += 'c'.toUpperCase();
//     });
//     // for v
//     // alphaBet = 'v';
//     document.getElementById('v').textContent = 'v'.toUpperCase();
//     document.getElementById('v').addEventListener('click', function(){
//         document.getElementById('tarea').value += 'v'.toUpperCase();
//     });
//     // for b
//     // alphaBet = 'b';
//     document.getElementById('b').textContent = 'b'.toUpperCase();
//     document.getElementById('b').addEventListener('click', function(){
//         document.getElementById('tarea').value += 'b'.toUpperCase();
//     });
//     // for n
//     // alphaBet = 'n';
//     document.getElementById('n').textContent = 'n'.toUpperCase();
//     document.getElementById('n').addEventListener('click', function(){
//         document.getElementById('tarea').value += 'n'.toUpperCase();
//     });
//     // for m
//     // alphaBet = 'm';
//     document.getElementById('m').textContent = 'm'.toUpperCase();
//     document.getElementById('m').addEventListener('click', function(){
//         document.getElementById('tarea').value += 'm'.toUpperCase();
//     });
// });

// // const numbers = [1,2,3,4,5,6,7,8,9,'a','b','c','d'];

// // numbers.forEach(function(number){
// //     document.getElementsByName('span').addEventListener('click', function(){
// //         document.getElementById('textarea').value = number;
// //     })
// // })

const buttons = document.querySelectorAll('.btn');
const textarea = document.querySelector('.textArea');

const delete_btn = document.querySelector('.reverse');
const capslock_btn = document.querySelector('capslock');
const newline_btn = document.querySelector('.newline');

const comma_btn = document.querySelector('.comma');
const fullstop_btn = document.querySelector('.fullstop');
const questionMark_btn = document.querySelector('.questionMark');

const space_btn = document.querySelector('.spaceBar');

let chars = [];

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        textarea.value += btn.innerText
        chars = textarea.value.split('');
        // console.log(chars);
    });
});

delete_btn.addEventListener('click', () => {
    chars.pop();
    textarea.value = chars.join('');
});

space_btn.addEventListener('click', () => {
    chars.push(' ');
    textarea.value = chars.join('');
});

capslock_btn.addEventListener('click', () => {
    buttons.forEach(btn => {
        btn.classList.toggle('upper');
    })
})