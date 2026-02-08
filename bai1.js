const playerIds = [];

const playerPositions = [];

const positionNames = [, "Thủ môn", "Hậu vệ", "Tiền vệ", "Tiền đạo"];

function isIdExists(id) {
    for (let i = 0; i < playerIds.length; i++) {
        if (playerIds[i] === id) {
            return true;
        }
    }
    return false;
}


function inputPlayers(count) {
    for (let i = 0; i < count; i++) {
        alert("Nhập thông tin cầu thủ thứ " + (i + 1));

        let id;

        do {
            id = prompt("Nhập mã cầu thủ");
            if (id === null || id.trim() === "") {
                alert(" Mã không được để trống ");
                continue;
            }
            if (isIdExists(id)) {
                alert("Mã đã tồn tại . Nhập mã khác!");
            }
        } while (isIdExists(id) || id === null || id.trim() === "");


        let chosenPosition;
        do {
            chosenPosition = prompt("Chọn vị trí: 1Thủ môn - 2Hậu vệ - 3Tiền vệ  - 4Tiền đạo ");
            if (chosenPosition !== "1" && chosenPosition !== "2" && chosenPosition !== "3" && chosenPosition !== "4") {
                alert("Chỉ nhập số từ 1 đến 4");
            }
        } while (chosenPosition !== "1" && chosenPosition !== "2" && chosenPosition !== "3" && chosenPosition !== "4");


        playerIds.push(id);
        playerPositions.push(positionNames[Number(chosenPosition)]);
    }
}

function printTeamRoster() {
    let listText = "DANH SÁCH ĐỘI BÓNG\n";
   

    for (let i = 0; i < playerIds.length; i++) {
        const row = (i + 1) + " "  + playerIds[i] + " " + playerPositions[i];
        listText += row + "\n";
        
        console.log(row);
    }

    alert(listText);
}

function findPlayersByPosition(position) {
    const indices = [];
    for (let i = 0; i < playerPositions.length; i++) {
        if (playerPositions[i] === position) {
            indices.push(i);
        }
    }
    return indices;
}


let playerCount;
do {
    const inputValue = prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?");
    if (inputValue === null) {
        alert("bạn đã hủy chương trình.");

    }
    playerCount = Number(inputValue);
    if (isNaN(playerCount) || playerCount <= 0 ) {
        alert("nhập số nguyên dương");
    }
} while (isNaN(playerCount) || playerCount <= 0 );

inputPlayers(playerCount);

printTeamRoster();

const positions = ["Thủ môn", "Hậu vệ", "Tiền vệ", "Tiền đạo"];


console.log("KẾT QUẢ TÌM KIẾM THEO VỊ TRÍ");

for (let j = 0; j < positions.length; j++) {
    const pos = positions[j];
    const found = findPlayersByPosition(pos);

    let rowText = pos + ": ";
    if (found.length === 0) {
        rowText += "Không có";
    } else {
        for (let k = 0; k < found.length; k++) {
            rowText += playerIds[found[k]] + " ";
        }
    }
    ketQuaTim += rowText ; 
    
    console.log(rowText);
}