
let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn"
];

let PosList =["","Thủ môn", "Hậu vệ", "Tiền Vệ", "Tiền Đạo" ];

let NamePlayer;

let NumberPlayer;

let numberOfPlayers = Number(prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng: "));

console.log(`Có ${numberOfPlayers} cầu thủ trong đội`);

while (numberOfPlayers < 0 ) {
    alert("Vui lòng nhập số nguyên dương hợp lệ!");
   break;
}

for (let i = 0; i < numberOfPlayers; i++) {

    let playerIndex = i + 1;
    console.log(`cầu thủ thứ ${playerIndex}`);

    let playerCode = prompt("Nhập mã cầu thủ: ");

    let playerFullName = prompt("Nhập tên cầu thủ: ");

    while (!playerFullName) {
        alert("ko đc để trống tên cầu thủ !");
        break;
    }

    let positionChoice = prompt("chọn số: 1Thủ môn, 2 Hậu vệ, 3 Tiền vệ, 4 Tiền đạo: ");
    let selectedPosition = PosList[Number(positionChoice)];

    if (!selectedPosition) {
        alert("Vị trí không hợp lệ.");
    }
}

function printTeamRoster(){

    let Result =[];
        for (let i = 0; i < players.length ; i++){

            let chain = players[i].split("-");

            idPlayer = chain[0];
            NamePlayer = chain[1];
            Choicepos = chain[2];

            console.log(`
                Mã: ${idPlayer} \n
                Tên: ${NamePlayer} \n
                Vị trí: ${Choicepos}. `)
            
            Result.push([idPlayer, NamePlayer, Choicepos]);
        }
        return Result;
}


function countPlayerByPostion(players) {

    let roster = printTeamRoster();
   
 goalkeepers = 0;
 
    let defenders = 0;
    let midfielders = 0;
    let forwards = 0;

    for (let i = 0; i < roster.length; i++) {
        let playerInfo = roster[i];
        let position = playerInfo[2];

        if (position === "Thủ môn") {
            goalkeepers = goalkeepers + 1;
        } else if (position === "Hậu vệ") {
            defenders = defenders +1;
        } else if (position === "Tiền vệ") {
            midfielders = midfielders + 1;
        } else if (position === "Tiền đạo") {
            forwards = forwards + 1;
        }
    }

    console.log(" Thống kê vị trí ");

    console.log(`Thủ môn: ${goalkeepers}, Hậu vệ: ${defenders}, Tiền vệ: ${midfielders}, Tiền đạo: ${forwards}`);
}



function hasGoalkeeper() {
    

    if (goalkeepers > 0) {
        return true;
    } else {
        return false;
    }
}

  console.log("Danh sách đội bóng");
  printTeamRoster();
  countPlayerByPostion();
  hasGoalkeeper();



  