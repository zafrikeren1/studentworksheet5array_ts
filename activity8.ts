console.log('Mesin Ranking Nilai Siswa');

const skorSiswa = [80, 65, 90, 72, 88, 55, 95];

console.log('Skor awal siswa: ' + skorSiswa);

for (let i = 0; i < skorSiswa.length; i++){
    for (let j = 0; j < skorSiswa.length - 1 - i; j++){
        if (skorSiswa[j] > skorSiswa[j + 1]){
            const temp = skorSiswa[j]
            skorSiswa[j] = skorSiswa[j + 1]
            skorSiswa[j + 1] = temp
        }
    }
}


console.log('Skor setelah diurutkan: ' + skorSiswa);