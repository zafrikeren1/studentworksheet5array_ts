console.log('Monitor Suhu Mingguan');

const suhu = [28, 30, 29, 31, 27, 32, 30];

let totalSuhu = 0;

for (let i = 0; i < suhu.length; i++) {
    console.log("Hari ke-" + (i + 1) + " : " + suhu[i] + "°C");

    totalSuhu += suhu[i];
}

const averageSuhu = totalSuhu / suhu.length;

console.log("Total Suhu Mingguan: " + totalSuhu + "°C");
console.log("Rata-rata Suhu Mingguan: " + averageSuhu.toFixed(2) + "°C");