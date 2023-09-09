// Membuat array dengan 100 nilai acak antara 1 hingga 50
let randomArray = [];
for (let i = 0; i < 100; i++) {
  randomArray.push(Math.floor(Math.random() * 50) + 1)
}
console.log(randomArray)
// Memisahkan nilai-nilai berdasarkan indeksnya
let arrayGanjil = []
let arrayGenap = []

for (let i = 0; i < randomArray.length; i++) {
  if (i % 2 === 0) {
    arrayGenap.push(randomArray[i]);
  } else {
    arrayGanjil.push(randomArray[i]);
  }
}
console.log(arrayGanjil)
console.log(arrayGenap)

//Function Max
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
//Max Ganjil
const maxResultGanjil = findMax(arrayGanjil);
console.log(`Nilai maksimum Ganjil adalah: ${maxResultGanjil}`)
//Max Genap
const maxResultGenap = findMax(arrayGenap);
console.log(`Nilai maksimum Genap adalah: ${maxResultGenap}`)

//Function Min
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
//Min Ganjil
const minResultGanjil = findMin(arrayGanjil);
console.log(`Nilai minimum Ganjil adalah: ${minResultGanjil}`)
//Min Genap
const minResultGenap = findMin(arrayGenap);
console.log(`Nilai minimum Genap adalah: ${minResultGenap}`)

//Function Total
function findTotal(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
//Total Ganjil
const totalResultGanjil = findTotal(arrayGanjil);
console.log(`Nilai Total Ganjil adalah: ${totalResultGanjil}`)
//Total Genap
const totalResultGenap = findTotal(arrayGenap);
console.log(`Nilai Total Genap adalah: ${totalResultGenap}`)

//Function Rata-Rata
function findAverage(arr) {
    const sum = findTotal(arr);
    return sum / arr.length;
}
//Rata-rata Ganjil
const averageResultGanjil = findAverage(arrayGanjil);
console.log(`Nilai rata-rata Ganjil adalah: ${averageResultGanjil}`)
//Rata-rata Genap
const averageResultGenap = findAverage(arrayGenap);
console.log(`Nilai rata-rata Genap adalah: ${averageResultGenap}`)

// Membandingkan hasil
//Perbandingan Min
let hasilPerbandinganMin = "";
if (minResultGenap > minResultGanjil) {
  hasilPerbandinganMin += "Min lebih besar pada array genap\n";
} else if (minResultGenap > minResultGanjil){
  hasilPerbandinganMin += "Min lebih besar pada array ganjil\n";
} else {
  hasilPerbandinganMin += "Min memiliki nilai yang sama antara genap dan ganjil\n";
} 
console.log(hasilPerbandinganMin)

//Perbandingan Max
let hasilPerbandinganMax = ""
if (maxResultGenap > maxResultGanjil) {
  hasilPerbandinganMax += "Max lebih besar pada array genap\n";
} else if (maxResultGenap > maxResultGanjil){
  hasilPerbandinganMax += "Max lebih besar pada array ganjil\n";
} else {
  hasilPerbandinganMax += "Max memiliki nilai yang sama antara genap dan ganjil\n";
} 
console.log(hasilPerbandinganMax)

//Perbandingan Total
let hasilPerbandinganTotal = ""
if (totalResultGenap > totalResultGanjil) {
  hasilPerbandinganTotal += "Total lebih besar pada array genap\n";
} else if (totalResultGanjil > totalResultGenap) {
  hasilPerbandinganTotal += "Total lebih besar pada array ganjil\n";
} else {
  hasilPerbandinganTotal += "Total memiliki nilai sama antara array genap dan ganjil\n";
}
console.log(hasilPerbandinganTotal)

//Perbandingan Rata-rata
let hasilPerbandinganAverage = ""
if (averageResultGanjil > averageResultGenap) {
  hasilPerbandinganAverage += "Rata-rata lebih besar pada array ganjil\n";
} else if (averageResultGenap > averageResultGanjil) {
  hasilPerbandinganAverage += "Rata-rata lebih besar pada array genap\n";
} else {
  hasilPerbandinganAverage += "Rata-rata memiliki nilai sama antara array genap dan ganjil\n";
}
console.log(hasilPerbandinganAverage)