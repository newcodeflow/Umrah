let step = 1;
let selectedBus = null;
let hotels = { jeddah:null, makkah:null, madinah:null };

function nextStep(n) {
  if (n === 2 && (!hotels.jeddah || !hotels.makkah || !hotels.madinah)) {
    alert('Please select all hotels');
    return;
  }

  if (n === 3 && !selectedBus) {
    alert('Please select transport');
    return;
  }

  document.getElementById(`step${step}`).classList.add('hidden');
  document.getElementById(`step${n}`).classList.remove('hidden');

  document.getElementById(`step${step}-ind`).classList.remove('active');
  document.getElementById(`step${n}-ind`).classList.add('active');

  step = n;
  updateSummary();
}

function selectHotel(city, name, el) {
  hotels[city] = name;
  el.parentElement.querySelectorAll('.hotel-card')
    .forEach(c => c.classList.remove('active'));
  el.classList.add('active');
}

function selectBus(type) {
  selectedBus = type;
}

function updateSummary() {
  document.getElementById('summary').innerHTML = `
    <li>📍 Jeddah: <strong>${hotels.jeddah}</strong></li>
    <li>🕋 Makkah: <strong>${hotels.makkah}</strong></li>
    <li>🕌 Madinah: <strong>${hotels.madinah}</strong></li>
    <li>🚌 Transport: <strong>${selectedBus}</strong></li>
    <li class="font-bold text-xl mt-4">Total: SAR 9,500</li>
  `;
}
