// 1.зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1.
// let x = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// k = 0;
// while (k < x.length) {
//     document.write(x[k])
//     k++;
// }

// 2.
//    let x =[2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//    for(let k =0 ;k< x.length;k++){
//        document.write(`<div>${x[k]}</div>`);
// }

// 3.
// let x = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// k = 0;
// while (k < x.length) {
//     if (k % 2 === 0) {
//         document.write(k);
//     }
//     k++;
// }

// // 4.
//       let x = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//       for(let k = 0; k <x.length;k++ ){
//           if(k % 2 ===0 ){
//               document.write(k);
//           }
//       }

// 5.
//      let x = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//      k = 0;
//      while (k < x.length) {if (k % 2 !== 0) {
//         document.write(k);
//     }
//     k++;
//      }


// 6.
//      let x = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//      for(let k = 0; k <x.length;k++ ){
//      if(k % 2 !==0 ){
//      document.write(k);
//   }
//    }

// 7.
//     let x = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//     for(let k = 0; k <x.length;k++ ){
//         if(x[k]%3===0){
//          x[k] ="okten";
//          document.write(`<h2>${x[k]}</h2>`);
//         }
//     }

// 8.

// let x = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = x.length - 1; i >= 0; i--) {
//     document.write(x[i]);
//     console.log(x[i]);
// }
// {+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

//1.


// let x = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//  k = x.length-1;
// while (k>=0 ) {
//     document.write(x[k]);
//     k--;
// }


// 2 .let x = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for( let k = x.length-1;k>=0;k--){
//   document.write(x[k]);
// }


// 3.
//   let x = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//   k = x.length-1;
//    while (k>=0) {
//     if (k % 2 === 0) {
//         document.write(k);
//     }
//     k--;
// }

    // 4.   //  let x = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
       // for(let k = x.length-1;k>=0; k-- ){
       //     if(k % 2 ===0 ){
       //        document.write(k);}
       // }

     // 5.
 //        let x = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
 //        k = x.length-1;
 //        while (k>=0) {
 //        if (k % 2 !== 0) {
 //         document.write(k);
 //     }
 //     k--;
 // }


// 6.
//         let x = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//         for(let k = x.length-1;k>=0; k-- ){
//         if(k % 2 !==0 ){
//         document.write(k);
//         }
//             }

// 7.

     //        let x = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
     //        for(let k = x.length-1; k>=0; k-- ){
     //        if(x[k]%3===0){
     //         x[k] ='okten';
     //        document.write(`<h2>${x[k]}</h2>`);
     //        console.log(x[k]);
     //     }
     // }