
let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn"
];



function getAllPositions() {
    let positions = [];
    
    for (let i = 0; i < players.length; i++) {

        let parts = players[i].split("-");
        let position = parts[2];
        
        let found = false;
        
        for (let j = 0; j < positions.length; j++) {
            if (positions[j] === position) {
                found = true;
                break;
            }
        }
        
        if (!found) {
            positions.push(position);
        }
    }
    
    return positions;
}



function findPlayersWithLongestName() {
    let longestName = "";
    
    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        let name = parts[1];
        
        if (name.length > longestName.length) {
            longestName = name;
        }
    }
    
    return longestName;
}



function countPlayersStartingWithLetter(letter) {
    let count = 0;
    let lowerLetter = letter.toLowerCase();
    
    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        let name = parts[1];
        let firstChar = name.charAt(0).toLowerCase();
        
        if (firstChar === lowerLetter) {
            count++;
        }
    }
    
    return count;
}

let allPositions = getAllPositions();

console.log("tất cả vị trí duy nhất ");

console.log(allPositions);

alert("tất cả vị trí duy nhất\n" + allPositions.join(", "));

let longestName = findPlayersWithLongestName();

console.log("\ntên cầu thủ dài nhất");

console.log(longestName);

alert("tên cầu thủ dài nhất \n" + longestName);


let lettersToCheck = ["N", "T", "H", "P", "V", "L"];

console.log("\nsố lượng cầu thủ theo chữ cái đầu:");

for (let letter of lettersToCheck) {

    let count = countPlayersStartingWithLetter(letter);

    console.log(`${letter}: ${count}`);

    alert(`${letter}: ${count} cầu thủ`);
}