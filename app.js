let selectedBus = 'Standard';

function selectBus(type) {
  selectedBus = type;
  updateSummary();
}

function updateSummary() {
  const j = document.getElementById('jeddah').value;
  const m = document.getElementById('makkah').value;
  const md = document.getElementById('madinah').value;

  document.getElementById('summary').innerHTML = `
    <li>📍 Jeddah Hotel: <strong>${j}</strong></li>
    <li>🕋 Makkah Hotel: <strong>${m}</strong></li>
    <li>🕌 Madinah Hotel: <strong>${md}</strong></li>
    <li>🚌 Transport: <strong>${selectedBus} Bus</strong></li>
    <li class="mt-4 text-lg font-bold">Estimated Total: SAR 9,500</li>
  `;
}

document.querySelectorAll('select').forEach(el =>
  el.addEventListener('change', updateSummary)
);

updateSummary();
