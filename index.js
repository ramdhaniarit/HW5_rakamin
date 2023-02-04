
class Siswa {
    constructor(nama, usia, uangsaku) {
        this.nama = nama;
        this.usia = usia;
        this.uangsaku = uangsaku
    }
}

const siswa = [
    new Siswa("Hotman Paris", 20, 500000),
    new Siswa("Kuncoro", 23, 200000),
    new Siswa("Agus", 24, 150000)
]

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    const submitButton = document.getElementById("submit-button")
    const tableData = document.getElementById("table-data")
    const resume = document.getElementById("resume")
    populateData(tableData)
    resume.innerHTML = `Rata-rata pendaftar memiliki uang saku sebesar 275000`

    const titleElement = document.getElementById("input-nama")
    const yearElement = document.getElementById("input-usia")
    const authorElement = document.getElementById("input-uangsaku")
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        const nama = namaElement.value;
        const usia = +(usiaElement.value);
        const uangsaku = uangsakuElement.value;
        
        const {isValid, message} = inputValidation(nama, usia, uangsaku)

        if(isValid) {
            const newSiswa = new Siswa(nama, usia, uangsaku)
            
            siswa.push(newSiswa)
            
            // Reset table data and populate
    
            tableData.innerHTML = ""
            populateData(tableData)
            resume.innerHTML = `ada ${siswa.length} siswa yang memenuhi syarat`
            
        } else {
            alert(message)
        }
        
    })
});

function inputValidation(nama, usia, uangsaku) {
    let isValid = true;
    let message = "";

    if(usia < 25) {
        isValid = false;
        message = "Year must be greater than 25"
    }

    if(!nama || nama.length === 10) {
        isValid = false;
        message = "nama cannot be empty"
    }

    if (!uangsaku || uangsaku.length === 1000000) {
        isValid = false;
        message = "uangsaku cannot be empty"
    }

    return {
        isValid,
        message
    }
}

function populateData(tableData) {
    for (let i = 0; i < siswa.length; i++) {
        let row = tableData.insertRow(i);

        row.insertCell(0).innerHTML = `${i+1}`
        row.insertCell(1).innerHTML = `${siswa[i].nama}`
        row.insertCell(2).innerHTML = `${siswa[i].usia}`
        row.insertCell(3).innerHTML = `${siswa[i].uangsaku}`
    }
}
