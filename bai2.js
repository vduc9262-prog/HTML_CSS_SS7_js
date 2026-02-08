let playerIds = ["P001", "P002", "P003", "P004", "P005"];

let playerNames = ["Nguyễn Văn A", 
    "Trần Thị B", 
    "Lê Văn C", 
    "Phạm Minh D", 
    "Hoàng Anh E"];

let playerJerseyNumbers = [10, 7, 8, 9, 11];

function printTeamRoster() {
    let teamList = "Danh Sach Doi Bong \n";
    teamList += "STT  ma   ten cau thu    so ao\n";

    for (let i = 0; i < playerIds.length; i++) {
        const row = (i + 1) + " " + playerIds[i] + " " + playerNames[i] + " " + playerJerseyNumbers[i];
        teamList += row + "\n";
        console.log(row);
    }

    alert(teamList);
}

function updatePlayerNameAndJersey(playerId, newName, newJerseyNumber) {
    for (let i = 0; i < playerIds.length; i++) {
        if (playerIds[i] === playerId) {
            playerNames[i] = newName;
            playerJerseyNumbers[i] = newJerseyNumber;
            return true;
        }
    }
    return false;
}

alert("Danh sách đội bóng ban đầu:");
printTeamRoster();

const idToUpdate = prompt("Nhập mã cầu thủ muốn cập nhật:");

if (idToUpdate === null || idToUpdate.trim() === "") {
    alert("Bạn đã hủy hoặc nhập mã trống ");
} else {
    let found = false;
    
    for (let i = 0; i < playerIds.length; i++) {
        if (playerIds[i] === idToUpdate) {
            found = true;
            
            const newName = prompt("nhập tên mới cho cầu thủ  " + idToUpdate + ":");
            if (newName === null || newName.trim() === "") {
                alert("tên ko được để trống hủy cập nhật ");
                break;
            }
            
            let newJersey;
            let valid = false;
            do {
                const jerseyInput = prompt("Nhập số áo mới: ");
                newJersey = Number(jerseyInput);
                
                if (isNaN(newJersey) || newJersey < 1 || newJersey > 99 || Math.floor(newJersey) !== newJersey) {
                    alert("số áo phải là số từ 1>99");
                } else {
                    valid = true;
                }
            } while (!valid);
            
            const updateSuccess = updatePlayerNameAndJersey(idToUpdate, newName, newJersey);
            
            if (updateSuccess) {
                alert("cập nhật thành công tên mới " + newName + " số áo mới  " + newJersey);
            } else {
                alert("lỗi ko cập nhật đc r ");
            }
            
            break;
        }
    }
    
    if (!found) {
        alert("cầu thủ với mã này " + idToUpdate + " ko có ");
    }
    
    alert("danh sách đội bóng sau khi sử lý: ");
    printTeamRoster();
}