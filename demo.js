// tinh tổng các số trong các mảng sau :
const firstAray = [10,20,20,40,50];
let total_1 = 0;
for(let i = 0; i < firstAray.length; i++){
    total_1 += firstAray[i];
}

const setAray = [10,20,20,40,50];

let total_2 = 0;
for(let i = 0; i < setAray.length; i++){
    total_2 += setAray[i];
}
const thirdtAray = [10,20,20,40,50];

let total_3 = 0;
for(let i = 0; i < thirdtAray.length; i++){
    total_3 += thirdtAray[i];
}

console.log("tong1: ",total_1);

console.log("tong1: ",total_2);

console.log("tong1: ",total_3);

// khai báo hàm 
// Function declaration
// khi xây dựng hàm 
//cần phải scacs định các thông tin sau; 
// 1 tên hàm 
// 2 số lượng tham số và đối số 
// 3.logic xử lý 
// 4 kết quả trả về 

// tính tổng các số trong các mảng sau
const firstArray=[10,20,30,40];
const secondArray=[10,20,30,50];

// khai báo hàm
// khi xây dụng hàm cầm xdinh  các thông tin:
// 1. têm hàm
// 2. số lg tham số và đối số
// 3. logic xử lý
// 4. kết quả trả về

function sum(firstNumber, secondNumber) {
    console.log("Hàm tính tổng");
    return firstNumber+secondNumber
}

// để hàm đc thực thi thì cần phải đc gọi
sum();

// lấy kqua trả về từ hàm
const result =sum(10,20);
console.log(result);

function sumArray(array){
    let total=0;
    for(let i=0;i<array.length;i++){
        total+=array[i];
    }
    return total
}
const totalSumArray=sumArray(firstArray)
const totalSumSecondArray=sumArray(secondArray)
console.log("first:",totalSumArray);
console.log("second:",totalSumSecondArray);

