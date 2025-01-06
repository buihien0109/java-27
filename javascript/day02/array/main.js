console.log("Hello world");

// Khai báo array rỗng
// let arr = [];

// Khai báo array
// let number = [];

// // Gán giá trị cho các phần tử của array thông qua chỉ số
// number[0] = 1;
// number[1] = "Bùi Hiên";
// number[2] = true;
// console.log(number);

// Khai báo và khởi tạo giá trị cho array
// const myArr = [1, 2, 3, 4, true, false, "Nguyễn Văn A"];
// console.log(myArr);

// myArr[3] = 400;
// console.log(myArr);

// console.log(myArr[6]);

// for (let i = 0; i < myArr.length; i++) {
//     if (i % 2 == 0) {
//         continue;
//     }
//     console.log(myArr[i]);
// }

// ele = myArr[i]
// myArr.forEach((e, i) => {
//     if (i % 2 == 0) {
//         return;
//     }
//     console.log(e);
// });

// let numbers = [1, 2, 3, 4, 5, 6]

// In ra các giá trị của mảng
// for (const v of numbers) {
//     console.log(v);
// }

// Tính tổng các giá trị trong mảng
// let sum = 0;
// for (const value of numbers) {
//     sum += value
// }
// console.log(sum);

let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.push(10));
console.log(numbers);

console.log(numbers.pop());
console.log(numbers);

numbers.splice(2, 2, 30, 40);
console.log(numbers);

let numbers2 = numbers.slice(2, 4); // copy array
console.log(numbers2);

// numbers2[1] = 100;
// console.log(numbers);
// console.log(numbers2);

// Sort
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

// let arr = [2, 1, 5, 12, 24];
// arr.sort(compareNumeric);
// // arr.sort( (a, b) => a - b );
// console.log(arr);

// let arr = [1, 2, 3];
// console.log(arr == '1,2,3');
// console.log(arr === '1,2,3');

// console.log(arr.toString());

console.log(0 == []); // true

console.log('0' == []); // false

console.log('' == []); // true

// Bài 3: Viết function cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
const module2 = (arr) => {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        ans.push(arr[i] % 2);
    }
    return ans;
}
console.log(module2([4, 2, 5, 6, 2, 7]));

// Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]
// Bài 4: Viết function truyền vào 1 chuỗi, hãy sao chép đó chuỗi lên 10 lần (Sử dụng array để làm)
const repeatString = (str) => {
    let ans = [];
    for (let i = 0; i < 10; i++) {
        ans.push(str);
    }
    console.log(ans);
    return ans.join('-');
}
console.log(repeatString("bbb"));

// Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘aaaaaaaaaa’
// Bài 5: Viết function truyền vào 1 chuỗi, hãy sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang (Sử dụng array để làm)

// Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘a-a-a-a-a-a-a-a-a-a’
// Bài 6: Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false.

function isSymmetricString(str) {
    let reverseStr = str.split('').reverse().join('');
    console.log(reverseStr);

    return str === reverseStr;
}

console.log(isSymmetricString('abcba'));