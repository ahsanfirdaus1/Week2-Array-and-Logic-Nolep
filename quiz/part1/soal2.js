let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {

}

function dataHandling2(input) {
    input[1] = "Roman Alamsyah Elsharawy";
    input[2] = "Provinsi " + input[2];
    input[4] = "Pria";
    input.push("SMA Internasional Metro");
    
    console.log(input);

    let tanggal = input[3];
    let tanggalSplit = tanggal.split("/");

    let bulan = tanggalSplit[1];

    switch(bulan) {
        case "01": console.log("Januari");
        break;
        case "02": console.log("Februari");
        break;
        case "03": console.log("Maret");
        break;
        case "04": console.log("April");
        break;
        case "05": console.log("Mei");
        break;
        case "06": console.log("Juni");
        break;
        case "07": console.log("Juli");
        break;
        case "08": console.log("Agustus");
        break;
        case "09": console.log("September");
        break;
        case "10": console.log("Oktober");
        break;
        case "11": console.log("November");
        break;
        case "12": console.log("Desember");
        break;
    }

    let tanggalSorted = tanggalSplit.slice();
    
    tanggalSorted.sort(function(a,b) {
        return b-a;
    });
    console.log(tanggalSorted);

    console.log(tanggalSplit.join("-"));

    console.log(input[1].slice(0,15)); // Hanya 15 Karakter untuk nama
}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */