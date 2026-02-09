let danhSachCauThu = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn"
];

function timTenNganNhat() {
    let tenNganNhat = danhSachCauThu[0].split("-")[1];
    
    for (let i = 1; i < danhSachCauThu.length; i++) {
        let tenHienTai = danhSachCauThu[i].split("-")[1];
        
        if (tenHienTai.length < tenNganNhat.length) {
            tenNganNhat = tenHienTai;
        }
    }
    
    return tenNganNhat;
}

function demViTriDaiHonDoDai(doDai) {
    let soLuong = 0;
    
    for (let i = 0; i < danhSachCauThu.length; i++) {
        let viTri = danhSachCauThu[i].split("-")[2];
        
        if (viTri.length > doDai) {
            soLuong++;
        }
    }
    
    return soLuong;
}

let tenNganNhat = timTenNganNhat();

alert("Tên cầu thủ ngắn nhất: " + tenNganNhat);

let cacDoDaiCanKiemTra = [5, 6, 7, 8, 9];

console.log("\nSố lượng cầu thủ có tên vị trí dài hơn:");

for (let dd of cacDoDaiCanKiemTra) {
    let ketQua = demViTriDaiHonDoDai(dd);
    
    console.log(`Dài hơn ${dd} ký tự: ${ketQua} người`);
    
    alert(`Vị trí dài hơn ${dd} ký tự: ${ketQua} người`);
}