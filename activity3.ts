console.log('Mesin Pencari Nilai Tertinggi');

const nilai = [78, 92, 85, 67, 90];

let nilaiTertinggi = nilai[0];

for (let i = 0; i < nilai.length; i++) {
    if (nilai[i] > nilaiTertinggi){
        nilaiTertinggi = nilai[i];
    }
}

console.log('Nilai tertinggi: '+ nilaiTertinggi);