// Menangani interaksi menu hamburger untuk tampilan mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    // Toggle class 'active' untuk menampilkan/menyembunyikan menu
    navLinks.classList.toggle('active');
});

// Menangani klik pada tombol kontak
const contactBtn = document.getElementById('contactBtn');

contactBtn.addEventListener('click', () => {
    alert('Terima kasih sudah tertarik! Anda bisa menghubungi saya via email di: contoh@email.com');
});
