// math.js

function tambah(a, b) {
    if (a === null || b === null ) {
        throw new Error('Masukkan angka')
    } 
    return a + b;
}

function kali(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        throw new Error('Masukkan angka')
    }
    return a * b;
}

function kurang(a, b) {
    return a - b;
}

function bagi(a, b) {
    if (b === 0) {
        throw new Error('Tidak bisa membagi dengan nol');
    }
    return a / b;
}

module.exports = {
    tambah,
    kali,
    kurang,
    bagi
};
