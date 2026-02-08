
let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn"
];

function printTeamRoster() {
    let ketQua = "DANH SÁCH ĐỘI BÓNG\n";


    for (let i = 0; i < players.length; i++) {
        const phan = players[i].split("-");
        const ma = phan[0];
        const ten = phan[1];
        const viTri = phan[2];

        const dong = (i + 1) + "  " + ma + "  " + ten + "  " + viTri;
        ketQua += dong + "\n";
    }

    alert(ketQua);
}

function countPlayerByPosition(players) {
    let thongKe = {};

    for (let i = 0; i < players.length; i++) {
        const phan = players[i].split("-");
        const viTri = phan[2];

        if (thongKe[viTri]) {
            thongKe[viTri] += 1;
        } else {
            thongKe[viTri] = 1;
        }
    }

    let ketQua = "SỐ LƯỢNG THEO VỊ TRÍ:\n";
    for (let viTri in thongKe) {
        ketQua += viTri + ": " + thongKe[viTri] + "\n";
    }

    alert(ketQua);
    return thongKe;
}

function hasGoalkeeper() {
    for (let i = 0; i < players.length; i++) {

        const phan = players[i].split("-");

        if (phan[2] === "Thủ môn") {
            return true;
        }
    }
    return false;
}

printTeamRoster();

countPlayerByPosition(players);
