
let players = [];

let positionList = ["", "Thủ môn", "Hậu vệ", "Tiền vệ", "Tiền đạo"];

let ask = Number(prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng: "));

console.log(`Có ${ask} cầu thủ trong nhóm`);


while (ask < 0) {
    alert(`Vui lòng nhập đúng số nguyên dương`);
    break; 
}


for (let i = 0; i < ask; i++) {

    let numberPlayer = i + 1;

    console.log(`Cầu thủ thứ ${numberPlayer}`);


    let playerId = prompt("Nhập mã cầu thủ: ");

    let playerName = prompt("Nhập tên cầu thủ: ");

    if (playerName === null || playerName === "") {
        alert(`Vui lòng không để trống tên cầu thủ`);
    }

    let choice = prompt("Chọn số: 1=Thủ môn, 2=Hậu vệ, 3=Tiền vệ, 4=Tiền đạo ");
    
    let chosenPosition = positionList[Number(choice)];

    if (!chosenPosition) {
        alert(`Không xác định !`);
    }

    let playerInfo = `${playerId} - ${playerName} - ${chosenPosition}`;
    players.push(playerInfo);
    console.log(`${playerInfo}`);
}

console.log("Danh sách đội bóng");
printTeamRoster();

function printTeamRoster() {
    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split(" - ");
        let id = parts[0];
        let name = parts[1];
        let position = parts[2];

        console.log(`Mã: ${id} | Tên: ${name} | Vị trí: ${position}`);
    }
}
function pushPlayer(name, position) {
    let posName = positionList[Number(position)] || "Không xác định";
    let info = `${playerId} - ${name} - ${posName}`;
    players.push(info);
}