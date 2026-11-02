console.log('Mesin Pencari Harga Terendah');

const barang = ['Buku', 'Pensil', 'Penghapus', 'Penggaris', 'Spidol'];
const harga = [10000, 7500, 15000, 12000, 9500];

let hargaTerendah = harga[0];

for (let i = 0; i < harga.length; i++) {
    if (harga[i] < hargaTerendah){
        hargaTerendah = harga[i];
    }
}

console.log('Barang termurah: ' + barang[harga.indexOf(hargaTerendah)]);
console.log('Harga: Rp' + hargaTerendah);