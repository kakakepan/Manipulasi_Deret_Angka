function deretAngka(n){
    let angka = "";
    for(let i=1;i<=n;i++) {
        if(i%3 === 0 && i%5 === 0) {
            angka += "Niomic ";
        } else if(i%5 === 0) {
            angka += "Mic ";
        } else if(i%3 === 0) {
            angka += "Nio "
        } else {
            angka += i + " ";
        }
    }
    return angka;
}
console.log(deretAngka(15));