// const map = [
//                 [0, 0, 0, 0, 1, 1, 1, 0],
//                 [1, 0, 0, 0, 0, 1, 1, 0],
//                 [1, 1, 0, 0, 0, 0, 0, 0],
//                 [1, 1, 0, 0, 0, 1, 0, 0],
//                 [0, 0, 0, 1, 1, 1, 0, 0],
//                 [0, 0, 0, 0, 1, 1, 1, 0],
//                 [1, 1, 0, 0, 0, 0, 0, 0],
//                 [1, 1, 1, 0, 0, 1, 1, 1]
//             ]

// const getNumberOfIslands = (map) => {

//     const rowsSum = []

//     for(i = 0; i < map.length; i++){
//         let rowSum = 0

//         for(j = 0; j < map[i].length; j++){
//             rowSum+=map[i][j]
//         }

//         rowsSum.push(rowSum)
//     }

//     for(i = 0; i < map.length; i++){
//         let rowSum = 0

//         for(j = 0; j < map[i].length; j++){
//             rowSum+=map[i][j]
//         }

//         rowsSum.push(rowSum)
//     }

//     console.log(rowsSum)

// }


// getNumberOfIslands(map)


// const difference = (array1, array2) => {
//     newArray = new Set([...array1, ...array2])

//     for(let i = 0; i < array1.lenght; i++){
//         for(let j = 0; j < array2.lenght; j++){
//             if(array1[i] == array2[j]){
//                 console.log(newArray.indexOf(newArray.find(array1[i])))
//                 newArray = newArray.filter(array1[i])
//             }
//         }
//     }

//     return newArray
// }

// console.log(difference([1, 2, 3, 10 ,12], [1, 3, 11, 12]))

