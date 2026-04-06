const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () =>{
  menuList.classList.toggle("hidden");

})


let dataKas = JSON.parse(localStorage.getItem("kas")) || [];

function render() {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  let total = 0;

  dataKas.forEach((item, index) => {
    let row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.tanggal}</td>
      <td>${item.keterangan}</td>
      <td>${item.jenis}</td>
      <td>Rp ${item.jumlah}</td>
      <td>
        <button onclick="editData(${index})">Edit</button>
        <button onclick="hapusData(${index})">Hapus</button>
      </td>
    `;

    tbody.appendChild(row);

    if (item.jenis === "Masuk") {
      total += item.jumlah;
    } else {
      total -= item.jumlah;
    }
  });

  document.getElementById("total").innerText = "Total Kas: Rp " + total;
}

function tambahData() {
  const tanggal = document.getElementById("tanggal").value;
  const keterangan = document.getElementById("keterangan").value;
  const jumlah = parseInt(document.getElementById("jumlah").value);
  const jenis = document.getElementById("jenis").value;

  if (!tanggal || !keterangan || isNaN(jumlah)) {
    alert("Isi semua data dengan benar!");
    return;
  }

  dataKas.push({ tanggal, keterangan, jumlah, jenis });
  localStorage.setItem("kas", JSON.stringify(dataKas));

  document.getElementById("tanggal").value = "";
  document.getElementById("keterangan").value = "";
  document.getElementById("jumlah").value = "";

  render();
}

function hapusData(index) {
  if (confirm("Yakin hapus data?")) {
    dataKas.splice(index, 1);
    localStorage.setItem("kas", JSON.stringify(dataKas));
    render();
  }
}

function editData(index) {
  const item = dataKas[index];

  document.getElementById("tanggal").value = item.tanggal;
  document.getElementById("keterangan").value = item.keterangan;
  document.getElementById("jumlah").value = item.jumlah;
  document.getElementById("jenis").value = item.jenis;

  dataKas.splice(index, 1);
  localStorage.setItem("kas", JSON.stringify(dataKas));

  render();
}

// PENTING: panggil saat pertama kali load
render();