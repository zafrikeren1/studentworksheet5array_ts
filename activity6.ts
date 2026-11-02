console.log('Mesin Penilai Siswa');

const nilaiSiswa = [80, 65, 90, 72, 88, 55, 95];

let siswaLulus = 0;

for (let i = 0; i < nilaiSiswa.length; i++){
    if (nilaiSiswa[i] >= 75){
        siswaLulus++
    }
}

console.log('Jumlah siswa yang lulus: ' + siswaLulus + " dari " + nilaiSiswa.length);