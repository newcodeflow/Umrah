let selectedBus = 'Standard';
let hotels = {
  jeddah: null,
  makkah: null,
  madinah: null
};

function selectBus(type) {
  selectedBus = type;
  updateSummary();
}

function selectHotel(city, name, el) {
  hotels[city] = name;

  // Remove active from siblings
  el.parentElement.querySelectorAll('.hotel-card')
    .forEach(card => card.classList.remove('active'));

  el.classList.add('active');
  updateSummary();
}

function updateSummary() {
  document.getElementById('summary').innerHTML = `
    <li>📍 Jeddah Hotel: <strong>${hotels.jeddah || '-'}</strong></li>
    <li>🕋 Makkah Hotel: <strong>${hotels.makkah || '-'}</strong></li>
    <li>🕌 Madinah Hotel: <strong>${hotels.madinah || '-'}</strong></li>
    <li>🚌 Transport: <strong>${selectedBus} Bus</strong></li>
    <li class="mt-4 text-lg font-bold">Estimated Total: SAR 9,500</li>
  `;
}

updateSummary();
