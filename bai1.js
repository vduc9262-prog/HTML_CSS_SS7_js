let playerID = [];

let PoiPlayyer = [];

let NeedInput = Number(prompt("có bao nhiêu cầu thủ cần nhập vào đội bóng: "));
do {
    if (isNaN(NeedInput) || NeedInput < 0){
        alert("bắt buộc phải là số nguyên dương nhé !");
    }
    break;
} while (isNaN(NeedInput) || NeedInput < 0);

let goal = ["thủ môn","hậu vệ","tiền vệ","tiền đạo"];

for(let i = 1; i <= NeedInput; i++ ){
    const id = Number(prompt("Nhập mã cầu thủ: "));

    playerID.push(id);

    let PoiChoice = prompt("Vị trí :\n 1 thủ môn \n 2 hậu vệ \n 3 tiền vệ \n 4 tiền đạo  ! ");

    let Poi = goal[PoiChoice - 1 ];

    PoiPlayyer.push(Poi);

    console.log(`${i} . ${id} - ${Poi}`);
}
let result = PoiPlayyer.filter((t) => t === "tiền vệ").length;

console.log(" số vị trí tiền vệ của các cầu thủ là: "+ result +"  ");


