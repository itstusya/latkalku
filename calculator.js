let hasil = document.getElementById("hasil");
console.log(hasil);
hapusSemua();
function angka(obj) {
    console.log("angka");
    console.log(obj);
    console.log(obj.innerHTML);
    hasil.innerHTML = hasil.innerHTML + obj.innerHTML;
}
function hapusSemua() {
    hasil.innerHTML = '';
}
function perkalian() {
    hasil.innerHTML = hasil.innerHTML + "*";
}
function pengurangan() {
    hasil.innerHTML = hasil.innerHTML + "-";
}
function penjumlahan() {
    hasil.innerHTML = hasil.innerHTML + "+";
}
function pembagian() {
    hasil.innerHTML = hasil.innerHTML + "/";
}
function titik() {
    hasil.innerHTML = hasil.innerHTML + ".";
}
function samaDengan() {
    hasil.innerHTML = eval(hasil.innerHTML);
}
function hapus() {
    console.log (hasil.innerHTML.slice(1,hasil.innerHTML.length))
    hasil.innerHTML = hasil.innerHTML.slice(0, -1);
}