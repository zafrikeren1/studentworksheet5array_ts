console.log('mesin Pencari Nama Siswa');

const siswa = ['Zafri', 'Mario', 'Dimas', 'Ray', 'Zidan'];

let cariNama = prompt('Masukkan nama siswa yang dicari:') ?? '';

let FOUND = false;

for (let i = 0; i < siswa.length; i++) {
    if (siswa[i].toLowerCase() === cariNama?.toLowerCase()) {
        FOUND = true;
        console.log('Nama siswa ditemukan: ' + siswa[i] + ' pada index ke-' + i);
    }
}

if (!FOUND) {
    console.log('Nama siswa tidak ditemukan.');
}