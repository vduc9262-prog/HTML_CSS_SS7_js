let playerIds = ["P001", "P002", "P003", "P004", "P005"];

let playerNames = ["Nguyễn Văn A", 
    "Trần Thị B", 
    "Lê Văn C", 
    "Phạm Minh D", 
    "Hoàng Anh E"];

let playerJerseyNumbers = [10, 7, 8, 9, 11];

let question = prompt("Nhập mã cần cập nhật: ");

if (!playerIds.includes(question)){
    alert("ko hợp lệ nhập lại ");
}else {
    console.log("hợp lệ r đấy cập nhật nào ! ");
    let NameNew = prompt(" tên mới cho cầu thủ: ");
    let JerseyNew = Number(prompt(" số áo mới : "));
    
    if (JerseyNew >= 1 && JerseyNew <= 99 ){
        let wonderfull = updatePlayerNameAndJersey(question , NameNew, JerseyNew);
    
    if (wonderfull){
        alert("cập nhật thành công !");
        printTeamRoster();
    }
    
  } else {
     alert("cập nhật thất bại ! nhập lại do số áo sai ")
  }


}


function printTeamRoster(){

    console.log("Danh sách đội bóng");

    for(let i = 0; i <  playerIds.length; i++ ){

        console.log(`${i+1} \n 
            ID: ${playerIds[i]} \n  
            Tên: ${playerNames[i]} \n 
            Số áo: ${playerJerseyNumbers[i]}`);
    }
};


function updatePlayerNameAndJersey(playerId, UpdateTen, UpdateSoAo){

    let folder = playerIds.indexOf(playerId);

    if(folder !== -1) {

    playerNames[folder] = UpdateTen;

    playerJerseyNumbers[folder] = UpdateSoAo;

    return true;

    }else {

        return false;
    }
}