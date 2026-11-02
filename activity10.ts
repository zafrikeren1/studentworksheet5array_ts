console.log('Exam Score Matrix');

const murid = ['Zafri', 'Dimas', 'Deka', 'Ray', 'Kenzi'];

const nilaiMurid = [
    [75,80,90],
    [80,90,85],
    [85,85,90],
    [90,75,85],
    [95,80,80]
];

for (let i = 0; i < nilaiMurid.length; i++){
    let totalNilai = 0;

    console.log('Murid : ' + murid[i]);

    for (let j = 0; j < nilaiMurid[i].length; j++){
        console.log('Nilai ujian ke-' + (j + 1) + ' : ' + nilaiMurid[i][j]);

        totalNilai += nilaiMurid[i][j];
    }

    const rataRataNilai = totalNilai / nilaiMurid[i].length;

    console.log('Total nilai : ' + totalNilai);
    console.log('Rata-rata nilai : ' + rataRataNilai.toFixed(2));
}