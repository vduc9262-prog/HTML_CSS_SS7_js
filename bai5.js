
let danhSachCauThu = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn"
];


function layTatCaViTri() {
    let danhSachViTri = [];
    
    for (let i = 0; i < danhSachCauThu.length; i++) {
        let viTriHienTai = danhSachCauThu[i].split("-")[2];
        let daTonTai = false;
        
        for (let j = 0; j < danhSachViTri.length; j++) {
            if (danhSachViTri[j] === viTriHienTai) {
                daTonTai = true;
                break;
            }
        }
        
        if (!daTonTai) {
            danhSachViTri.push(viTriHienTai);
        }
    }
    
    return danhSachViTri;
}


function timCauThuTenDaiNhat() {
    let tenDaiNhat = "";
    
    for (let i = 0; i < danhSachCauThu.length; i++) {
        let tenHienTai = danhSachCauThu[i].split("-")[1];
        
        if (tenHienTai.length > tenDaiNhat.length) {
            tenDaiNhat = tenHienTai;
        }
    }
    
    return tenDaiNhat;
}


function demCauThuBatDauBangChu(letter) {
    let soLuong = 0;
    let chuTimKiem = letter.toLowerCase();
    
    for (let i = 0; i < danhSachCauThu.length; i++) {
        let ten = danhSachCauThu[i].split("-")[1];
        
        if (ten.charAt(0).toLowerCase() === chuTimKiem) {
            soLuong++;
        }
    }
    
    return soLuong;
}



let tatCaViTri = layTatCaViTri();
console.log("Các vị trí duy nhất trong đội:", tatCaViTri);

let tenDaiNhat = timCauThuTenDaiNhat();
console.log("Cầu thủ có tên dài nhất:", tenDaiNhat);

let chuCanTim = "N";
let soDem = demCauThuBatDauBangChu(chuCanTim);
console.log("Số cầu thủ có tên bắt đầu bằng chữ '" + chuCanTim + "':", soDem);