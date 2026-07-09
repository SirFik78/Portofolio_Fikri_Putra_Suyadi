
        // Variabel untuk menyimpan tag <img> asli
        const originalImages = {};

        // Fungsi untuk mengubah gambar menjadi peta, dan sebaliknya
        function changeToMap(containerId, mapUrl) {
            const container = document.getElementById(containerId);
            
            // Simpan elemen gambar asli ke memori jika belum tersimpan
            if (!originalImages[containerId]) {
                originalImages[containerId] = container.innerHTML;
            }

            // Cek apakah saat ini sedang menampilkan peta
            if (container.classList.contains('showing-map')) {
                // Jika ya, kembalikan ke foto asli
                container.innerHTML = originalImages[containerId];
                container.classList.remove('showing-map');
            } else {
                // Jika tidak, ubah menjadi iframe peta kecil
                container.innerHTML = `
                    <div class="map-wrapper" onclick="enlargeMap('${mapUrl}')">
                        <iframe src="${mapUrl}" width="100%" height="200" style="border:0; pointer-events: none;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div class="map-overlay" title="Klik untuk perbesar peta"></div>
                    </div>
                `;
                container.classList.add('showing-map');
            }
        }

        // Fungsi untuk menampilkan peta besar di dalam Modal
        function enlargeMap(mapUrl) {
            const modal = document.getElementById('mapModal');
            const modalContent = document.getElementById('modalContent');
            modalContent.innerHTML = `<iframe src="${mapUrl}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
            modal.style.display = 'flex';
        }

        // Fungsi untuk menutup Modal
        function closeMap() {
            document.getElementById('mapModal').style.display = 'none';
            document.getElementById('modalContent').innerHTML = '';
        }

document.querySelector('a[href="#about"]').addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector("#about").scrollIntoView({
        behavior: "smooth"
    });
});