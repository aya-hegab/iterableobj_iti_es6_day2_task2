var obj = {
  name: "hello",
  age: 5646,
  [Symbol.iterator]: function () {
    var c = 0;
    return {
      next: function () {
        if (c < Object.entries(obj).length) {
          return {
            value: {
              key: Object.keys(obj)[c],
              value: Object.values(obj)[c++],
            },
            done: false,
          };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

for (var element of obj) {
  console.log(element);
}

// console.log("-----using generator---------");
// var obj2 = {
//   name2: "hhhsfjshfls",
//   age2: 46545646,
// };
// obj2[Symbol.iterator] = function* () {
//   var c = 0;
//   return {
//     next: function () {
//       if (c < Object.entries(obj2).length) {
//         return {
//           value: {
//             key: Object.keys(obj2)[c],
//             value: Object.values(obj2)[c++],
//           },
//           done: false,
//         };
//       } else {
//         return { value: undefined, done: true };
//       }
//     },
//   };
// };

// for (i of obj2) {
//   console.log(i);
// }
// console.log(Object.keys(obj2)[0]);
