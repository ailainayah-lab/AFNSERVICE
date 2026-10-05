/* =========================
   NOMOR WHATSAPP
========================= */

const nomorWA1 = "6285289370347";
const nomorWA2 = "6285255078883";

let pesanWhatsApp = "";



/* =========================
   PILIH LAYANAN
========================= */

const serviceCards =
    document.querySelectorAll(".service-card");

const kerusakanSelect =
    document.getElementById("kerusakan");

const customDamageBox =
    document.getElementById("customDamageBox");

const customDamage =
    document.getElementById("customDamage");


serviceCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const damage =
            card.getAttribute("data-damage");


        if (damage) {

            kerusakanSelect.value = damage;

            customDamageBox.style.display = "none";


            document
                .getElementById("konsultasi")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }

    });

});



/* =========================
   KERUSAKAN LAINNYA
========================= */

const otherDamage =
    document.getElementById("otherDamage");


otherDamage.addEventListener("click", function() {

    kerusakanSelect.value = "Lainnya";

    customDamageBox.style.display = "block";


    document
        .getElementById("konsultasi")
        .scrollIntoView({
            behavior: "smooth"
        });

});



/* =========================
   SELECT KERUSAKAN
========================= */

kerusakanSelect.addEventListener(
    "change",
    function() {

        if (this.value === "Lainnya") {

            customDamageBox.style.display = "block";

        } else {

            customDamageBox.style.display = "none";

            customDamage.value = "";

        }

    }
);



/* =========================
   FORM KONSULTASI
========================= */

const serviceForm =
    document.getElementById("serviceForm");


serviceForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const nama =
            document.getElementById("nama").value;

        const nomor =
            document.getElementById("nomor").value;

        const tipe =
            document.getElementById("tipe").value;

        let kerusakan =
            document.getElementById("kerusakan").value;

        const deskripsi =
            document.getElementById("deskripsi").value;

        const datang =
            document.getElementById("datang").value;


        /* =========================
           KERUSAKAN LAINNYA
        ========================= */

        if (
            kerusakan === "Lainnya" &&
            customDamage.value.trim() !== ""
        ) {

            kerusakan =
                "Lainnya - " +
                customDamage.value;

        }


        /* =========================
           PESAN WHATSAPP
        ========================= */

        pesanWhatsApp =
            "Halo AFN SERVICE 👋" +
            "\n\n" +

            "Saya ingin konsultasi service HP." +
            "\n\n" +

            "Nama: " +
            nama +

            "\nNomor WhatsApp: " +
            nomor +

            "\nMerek/Tipe HP: " +
            tipe +

            "\nKerusakan: " +
            kerusakan +

            "\nDeskripsi: " +
            deskripsi +

            "\nRencana datang: " +
            datang +

            "\nEstimasi pengerjaan: " +
            "5–7 hari, tergantung ketersediaan stock barang." +

            "\n\nTerima kasih.";


        /* =========================
           TAMPILKAN PILIHAN WA
        ========================= */

        document
            .getElementById("whatsappChoice")
            .style.display = "block";


        document
            .getElementById("whatsappChoice")
            .scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

    }
);



/* =========================
   WHATSAPP 1
========================= */

document
    .getElementById("wa1")
    .addEventListener(
        "click",
        function() {

            const url =
                "https://wa.me/" +
                nomorWA1 +
                "?text=" +
                encodeURIComponent(
                    pesanWhatsApp
                );

            window.open(
                url,
                "_blank"
            );

        }
    );



/* =========================
   WHATSAPP 2
========================= */

document
    .getElementById("wa2")
    .addEventListener(
        "click",
        function() {

            const url =
                "https://wa.me/" +
                nomorWA2 +
                "?text=" +
                encodeURIComponent(
                    pesanWhatsApp
                );

            window.open(
                url,
                "_blank"
            );

        }
    );



/* =========================
   STATUS JAM BUKA
========================= */

function updateOpeningStatus() {

    const now =
        new Date();


    const waktuWITA =
        new Intl.DateTimeFormat(
            "id-ID",
            {
                timeZone: "Asia/Makassar",

                hour: "2-digit",

                minute: "2-digit",

                hour12: false
            }
        ).format(now);


    const jam =
        parseInt(
            waktuWITA.split(":")[0]
        );


    const badge =
        document.querySelector(
            ".open-badge"
        );


    if (!badge) return;


    if (jam >= 8 && jam < 21) {

        badge.innerHTML =
            "🟢 Sedang Buka • 08.00–21.00 WITA";

    } else {

        badge.innerHTML =
            "🔴 Sedang Tutup • Buka 08.00–21.00 WITA";

    }

}


updateOpeningStatus();



/* =========================
   NAVBAR SHADOW
========================= */

window.addEventListener(
    "scroll",
    function() {

        const navbar =
            document.querySelector(
                ".navbar"
            );


        if (window.scrollY > 20) {

            navbar.style.boxShadow =
                "0 5px 20px rgba(0,0,0,0.06)";

        } else {

            navbar.style.boxShadow =
                "none";

        }

    }
);