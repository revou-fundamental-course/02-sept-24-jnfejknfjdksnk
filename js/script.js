//document.getElementById("result").innerText = '';


function luas_segitiga(){
    event.preventDefault();
    let alas = document.getElementById("panjang-alas").value;
    let tinggi = document.getElementById("tinggi").value;

    let hasil = 1/2 * alas * tinggi;
    //alert('luas segitiga adalah ' + hasil);
    document.getElementById("result-luas").innerText = "Hasil Perhitungan: " + hasil;
    

}

function kel_segitiga(){
    event.preventDefault();
    let s1 = parseInt(document.getElementById("kels1").value);
    let s2 = parseInt(document.getElementById("kels2").value);
    let s3 = parseInt(document.getElementById("kels3").value);

    let hasil = (s1 + s2 + s3);
    //alert('Keliling segitiga adalah ' + hasil);
    //document.getElementById("result").innerHTML = 'Hasil perhitungan: ' + hasil;
    document.getElementById("result-kel").innerText = "Hasil Perhitungan: " + hasil;
    

}