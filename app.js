let step = 1;
let selectedBus = null;
let hotels = {
  jeddah: null,
  makkah: null,
  madinah: null
};

const BASE_PRICE = 6000;

const HOTEL_PRICES = {
  jeddah: { standard: 500, premium: 900 },
  makkah: { standard: 1200, premium: 2000 },
  madinah:{ standard: 800, premium: 1400 }
};

const BUS_PRICES = {
  Standard: 0,
  VIP: 800
};

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

function selectHotel(city, name, tier, el) {
  hotels[city] = { name, tier };

  el.parentElement.querySelectorAll('.hotel-card')
    .forEach(c => c.classList.remove('active'));
  el.classList.add('active');
}

function selectBus(type) {
  selectedBus = type;
}

function calculateTotal() {
  let total = BASE_PRICE;

  for (let city in hotels) {
    if (hotels[city]) {
      total += HOTEL_PRICES[city][hotels[city].tier];
    }
  }

  if (selectedBus) {
    total += BUS_PRICES[selectedBus];
  }

  return total;
}

function updateSummary() {
  const total = calculateTotal();

  document.getElementById('summary').innerHTML = `
    <li>📍 Jeddah: <strong>${hotels.jeddah?.name}</strong></li>
    <li>🕋 Makkah: <strong>${hotels.makkah?.name}</strong></li>
    <li>🕌 Madinah: <strong>${hotels.madinah?.name}</strong></li>
    <li>🚌 Transport: <strong>${selectedBus}</strong></li>
    <li class="font-bold text-xl mt-4">
      Total Per Person: SAR ${total.toLocaleString()}
    </li>
  `;
}
