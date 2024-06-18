// script.js

document.addEventListener('DOMContentLoaded', function() {
  const orderForm = document.getElementById('orderForm');

  orderForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const product = document.getElementById('product').value;
    const details = document.getElementById('details').value;

    const whatsappNumber = '6287840912524'; // Ganti dengan nomor WhatsApp Anda
    const message = `Halo, saya ingin memesan ${product}. \n\nNama: ${name}\nDetail: ${details}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
  });
});
