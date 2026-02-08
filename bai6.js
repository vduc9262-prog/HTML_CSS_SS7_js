
let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn"
];

function getShortestPlayerName() {

    let shortestName = players[0].split("-")[1]; 
    
    for (let i = 1; i < players.length; i++) {

        let currentName = players[i].split("-")[1];
        
        if (currentName.length < shortestName.length) {

            shortestName = currentName;
        }
    }
    
    return shortestName;
}

function countPlayersWithPositionLengthGreaterThan(length) {

    let count = 0;
    
    for (let i = 0; i < players.length; i++) {
        let position = players[i].split("-")[2];
        
        if (position.length > length) {
            count++;
        }
    }
    
    return count;
}

let shortest = getShortestPlayerName();


alert("Tên cầu thủ ngắn nhất: " + shortest);

let lengthsToCheck = [5, 6, 7, 8, 9];

console.log("\nSố lượng cầu thủ có tên vị trí dài hơn:");

for (let len of lengthsToCheck) {

    let soLuong = countPlayersWithPositionLengthGreaterThan(len);

    console.log(`Dài hơn ${len} ký tự: ${soLuong} người`);

    alert(`Vị trí dài hơn ${len} ký tự: ${soLuong} người`);
}