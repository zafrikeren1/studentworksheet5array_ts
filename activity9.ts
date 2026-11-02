console.log('Papan Klasemen Penjualan');

const namaPegawai = ['Kenzi', 'Nabeel', 'Naufal', 'Ahnaf', 'Aryan'];
const penjualan = [1200000, 1850000, 1400000, 1600000, 1750000];

let penjualanTertinggi = 0;
let penjualanTerendah = 0;

for (let i = 1; i < penjualan.length; i++){
    if (penjualan[i] > penjualan[penjualanTertinggi]){
        penjualanTertinggi = i;
    }
    if (penjualan[i] < penjualan[penjualanTerendah]){
        penjualanTerendah = i;
    }
}

console.log(`Pegawai dengan penjualan tertinggi adalah ${namaPegawai[penjualanTertinggi]} dengan penjualan sebesar Rp.${penjualan[penjualanTertinggi]}`);
console.log(`Pegawai dengan penjualan terendah adalah ${namaPegawai[penjualanTerendah]} dengan penjualan sebesar Rp.${penjualan[penjualanTerendah]}`);