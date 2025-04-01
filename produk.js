document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Loaded");

    const params = new URLSearchParams(window.location.search);
    const provider = params.get("provider") || "AXIS";
    console.log("Provider:", provider);

    // Data Produk Pulsa & Paket Data
    const products = {
        "AXIS": {
            pulsa: [
                { name: "Pulsa AXIS 5.000", description: "Pulsa reguler", price: "Rp 7.000", provider: "AXIS" },
                { name: "Pulsa AXIS 10.000", description: "Pulsa reguler", price: "Rp 12.000", provider: "AXIS" },
                { name: "Pulsa AXIS 15.000", description: "Pulsa reguler", price: "Rp 17.000", provider: "AXIS" },
                { name: "Pulsa AXIS 20.000", description: "Pulsa reguler", price: "Rp 22.000", provider: "AXIS" },
                { name: "Pulsa AXIS 25.000", description: "Pulsa reguler", price: "Rp 27.000", provider: "AXIS" }
            ],
            paketData: [
                { name: "AXIS 2,5GB 5 Hari", description: "Kuota 24 jam", price: "Rp 13.000", provider: "AXIS" },
                { name: "AXIS 2GB 3 Hari", description: "Kuota 24 jam", price: "Rp 9.000", provider: "AXIS" },
                { name: "AXIS 1,5GB 3 Hari", description: "Kuota 24 jam", price: "Rp 8.500", provider: "AXIS" },
                { name: "AXIS 4GB 5 Hari", description: "Kuota 24 jam", price: "Rp 16.000", provider: "AXIS" },
                { name: "AXIS 7,5GB 3 Hari", description: "Kuota 24 jam", price: "Rp 23.000", provider: "AXIS" },
                { name: "AXIS Warnet 1,5GB", description: "Kuota 2 jam", price: "Rp 2.000", provider: "AXIS" },
                { name: "AXIS Warnet 3GB", description: "Kuota 3 jam", price: "Rp 4.000", provider: "AXIS" }
            ]
        },
        "INDOSAT": {
            pulsa: [
                { name: "Pulsa INDOSAT 5.000", description: "Pulsa reguler", price: "Rp 7.000", provider: "INDOSAT" },
                { name: "Pulsa INDOSAT 10.000", description: "Pulsa reguler", price: "Rp 12.000", provider: "INDOSAT" }
            ],
            paketData: [
                { name: "INDOSAT Paket Data 2GB", description: "Berlaku 30 Hari", price: "Rp 25.000", provider: "INDOSAT" },
                { name: "INDOSAT Paket Data 3GB", description: "Berlaku 30 Hari", price: "Rp 35.000", provider: "INDOSAT" }
            ]
        },
        "SMARTFREN": {
            pulsa: [
                { name: "Pulsa Smartfren 5.000", description: "Pulsa reguler", price: "Rp 6.500", provider: "SMARTFREN" },
                { name: "Pulsa Smartfren 10.000", description: "Pulsa reguler", price: "Rp 12.000", provider: "SMARTFREN" }
            ],
            paketData: [
                { name: "Smartfren 2GB 7 Hari", description: "Berlaku 7 Hari", price: "Rp 12.000", provider: "SMARTFREN" },
                { name: "Smartfren 10GB 30 Hari", description: "Berlaku 30 Hari", price: "Rp 45.000", provider: "SMARTFREN" }
            ]
        },
        "TELKOMSEL": {
            pulsa: [
                { name: "Pulsa Telkomsel 5.000", description: "Pulsa reguler", price: "Rp 7.000", provider: "TELKOMSEL" },
                { name: "Pulsa Telkomsel 10.000", description: "Pulsa reguler", price: "Rp 12.000", provider: "TELKOMSEL" },
                { name: "Pulsa Telkomsel 15.000", description: "Pulsa reguler", price: "Rp 17.000", provider: "TELKOMSEL" }
            ],
            paketData: [
                { name: "Telkomsel 2,5GB 5 Hari", description: "1GB Nasional + 1,5GB Lokal", price: "Rp 13.000", provider: "TELKOMSEL" },
                { name: "Telkomsel 3GB 5 Hari", description: "0,5GB Nasional + 2,5GB Lokal", price: "Rp 14.000", provider: "TELKOMSEL" },
                { name: "Telkomsel 2GB 3 Hari", description: "0,5GB Nasional + 1,5GB Lokal", price: "Rp 11.000", provider: "TELKOMSEL" },
                { name: "Telkomsel 1,5GB 3 Hari", description: "0,5GB Nasional + 1GB Lokal", price: "Rp 8.000", provider: "TELKOMSEL" },
                { name: "Telkomsel 2,5GB 5 Hari", description: "1GB Nasional + 1,5GB Lokal", price: "Rp 13.000", provider: "TELKOMSEL" }
            ]
        },
        "THREE": {
            pulsa: [
                { name: "Pulsa Tri 5.000", description: "Pulsa reguler", price: "Rp 7.000", provider: "THREE" },
                { name: "Pulsa Tri 10.000", description: "Pulsa reguler", price: "Rp 12.000", provider: "THREE" },
                { name: "Pulsa Tri 15.000", description: "Pulsa reguler", price: "Rp 17.000", provider: "THREE" },
                { name: "Pulsa Tri 20.000", description: "Pulsa reguler", price: "Rp 22.000", provider: "THREE" }
            ],
            paketData: [
                { name: "Tri 3GB 3 Hari", description: "Kuota reguler", price: "Rp 11.000", provider: "THREE" },
                { name: "Tri 4GB 3 Hari", description: "3GB reguler + 1GB Lokal", price: "Rp 12.000", provider: "THREE" },
                { name: "Tri 2GB 5 Hari", description: "Kuota reguler", price: "Rp 12.000", provider: "THREE" },
                { name: "Tri 1,5GB 7 Hari", description: "Kuota reguler", price: "Rp 11.000", provider: "THREE" }
            ]
        },
        "XL": {
            pulsa: [
                { name: "Pulsa XL 5.000", description: "Pulsa reguler", price: "Rp 7.000", provider: "XL" },
                { name: "Pulsa XL 10.000", description: "Pulsa reguler", price: "Rp 12.000", provider: "XL" },
                { name: "Pulsa XL 15.000", description: "Pulsa reguler", price: "Rp 17.000", provider: "XL" },
                { name: "Pulsa XL 20.000", description: "Pulsa reguler", price: "Rp 22.000", provider: "XL" }
            ],
            paketData: [
                { name: "XL 5GB Combo", description: "Berlaku 30 Hari", price: "Rp 25.000", provider: "XL" },
                { name: "XL 20GB Combo", description: "Berlaku 30 Hari", price: "Rp 75.000", provider: "XL" }
            ]
        }
    };

    // Data produk untuk Top Up E-Wallet (global)
    const ewalletProducts = [
        // Dana
        { name: "Dana Top Up 10.000", description: "Isi saldo Dana", price: "Rp 12.000", provider: "DANA" },
        { name: "Dana Top Up 20.000", description: "Isi saldo Dana", price: "Rp 22.000", provider: "DANA" },
        { name: "Dana Top Up 30.000", description: "Isi saldo Dana", price: "Rp 32.000", provider: "DANA" },
        { name: "Dana Top Up 40.000", description: "Isi saldo Dana", price: "Rp 43.000", provider: "DANA" },
        { name: "Dana Top Up 50.000", description: "Isi saldo Dana", price: "Rp 53.000", provider: "DANA" },
        { name: "Dana Top Up 60.000", description: "Isi saldo Dana", price: "Rp 63.000", provider: "DANA" },
        { name: "Dana Top Up 70.000", description: "Isi saldo Dana", price: "Rp 73.000", provider: "DANA" },
        { name: "Dana Top Up 80.000", description: "Isi saldo Dana", price: "Rp 83.000", provider: "DANA" },
        { name: "Dana Top Up 90.000", description: "Isi saldo Dana", price: "Rp 93.000", provider: "DANA" },
        { name: "Dana Top Up 100.000", description: "Isi saldo Dana", price: "Rp 104.000", provider: "DANA" },
        // OVO
        { name: "OVO Top Up 10.000", description: "Isi saldo OVO", price: "Rp 12.000", provider: "OVO" },
        { name: "OVO Top Up 20.000", description: "Isi saldo OVO", price: "Rp 22.000", provider: "OVO" },
        { name: "OVO Top Up 30.000", description: "Isi saldo OVO", price: "Rp 32.000", provider: "OVO" },
        { name: "OVO Top Up 40.000", description: "Isi saldo OVO", price: "Rp 43.000", provider: "OVO" },
        { name: "OVO Top Up 50.000", description: "Isi saldo OVO", price: "Rp 53.000", provider: "OVO" },
        { name: "OVO Top Up 60.000", description: "Isi saldo OVO", price: "Rp 63.000", provider: "OVO" },
        { name: "OVO Top Up 70.000", description: "Isi saldo OVO", price: "Rp 73.000", provider: "OVO" },
        { name: "OVO Top Up 80.000", description: "Isi saldo OVO", price: "Rp 83.000", provider: "OVO" },
        { name: "OVO Top Up 90.000", description: "Isi saldo OVO", price: "Rp 93.000", provider: "OVO" },
        { name: "OVO Top Up 100.000", description: "Isi saldo OVO", price: "Rp 104.000", provider: "OVO" },
        // GoPay
        { name: "GoPay Top Up 10.000", description: "Isi saldo GoPay", price: "Rp 12.000", provider: "GOPAY" },
        { name: "GoPay Top Up 20.000", description: "Isi saldo GoPay", price: "Rp 22.000", provider: "GOPAY" },
        { name: "GoPay Top Up 30.000", description: "Isi saldo GoPay", price: "Rp 32.000", provider: "GOPAY" },
        { name: "GoPay Top Up 40.000", description: "Isi saldo GoPay", price: "Rp 43.000", provider: "GOPAY" },
        { name: "GoPay Top Up 50.000", description: "Isi saldo GoPay", price: "Rp 53.000", provider: "GOPAY" },
        // ShopeePay
        { name: "ShopeePay Top Up 5.000", description: "Isi saldo ShopeePay", price: "Rp 6.000", provider: "SHOPEEPAY" },
        { name: "ShopeePay Top Up 7.000", description: "Isi saldo ShopeePay", price: "Rp 8.000", provider: "SHOPEEPAY" },
        { name: "ShopeePay Top Up 9.000", description: "Isi saldo ShopeePay", price: "Rp 10.000", provider: "SHOPEEPAY" },
        { name: "ShopeePay Top Up 20.000", description: "Isi saldo ShopeePay", price: "Rp 22.000", provider: "SHOPEEPAY" },
        { name: "ShopeePay Top Up 50.000", description: "Isi saldo ShopeePay", price: "Rp 53.000", provider: "SHOPEEPAY" }
    ];
    function loadProducts(type = "pulsa") {
        const productList = document.getElementById("productList");
        productList.innerHTML = "";

        const ewalletProviders = ["DANA", "OVO", "GOPAY", "SHOPEEPAY"];

        if (ewalletProviders.includes(provider.toUpperCase())) {
            document.querySelector(".tab").style.display = "none";

            const filteredProducts = ewalletProducts.filter(p => p.provider.toUpperCase() === provider.toUpperCase());

            filteredProducts.forEach(product => {
                const productElement = document.createElement("div");
                productElement.classList.add("product");
                productElement.innerHTML = `
                    <div class="details">
                        <h3>${product.name}</h3>
                        <p>✅ ${product.description}</p>
                        <p class="price">${product.price}</p>
                    </div>
                `;

                // Event klik untuk memilih produk
                productElement.addEventListener("click", function () {
                    document.querySelectorAll(".product").forEach(p => p.classList.remove("selected-product"));
                    productElement.classList.add("selected-product");
                });

                productList.appendChild(productElement);
            });
        } else {
            if (products[provider] && products[provider][type]) {
                document.querySelector(".tab").style.display = "flex";

                products[provider][type].forEach(product => {
                    const productElement = document.createElement("div");
                    productElement.classList.add("product");
                    productElement.innerHTML = `
                        <div class="details">
                            <h3>${product.name}</h3>
                            <p>✅ ${product.description}</p>
                            <p class="price">${product.price}</p>
                        </div>
                    `;

                    // Event klik untuk memilih produk
                    productElement.addEventListener("click", function () {
                        document.querySelectorAll(".product").forEach(p => p.classList.remove("selected-product"));
                        productElement.classList.add("selected-product");
                    });

                    productList.appendChild(productElement);
                });
            } else {
                productList.innerHTML = `<p>Tidak ada produk tersedia.</p>`;
            }
        }
    }

    if (["DANA", "OVO", "GOPAY", "SHOPEEPAY"].includes(provider.toUpperCase())) {
        loadProducts();
    } else {
        loadProducts("pulsa");
    }

    document.getElementById("btnPulsa").addEventListener("click", function () {
        document.querySelector(".tab .active")?.classList.remove("active");
        this.classList.add("active");
        loadProducts("pulsa");
    });

    document.getElementById("btnPaketData").addEventListener("click", function () {
        document.querySelector(".tab .active")?.classList.remove("active");
        this.classList.add("active");
        loadProducts("paketData");
    });
    });
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Loaded");

    const provider = new URLSearchParams(window.location.search).get("provider") || "AXIS";
    const paymentSelect = document.getElementById("paymentMethods");
    const nomorHPInput = document.getElementById("nomorHP");

    // Ambil metode pembayaran dari API
    fetch("get_payment_methods.php")
        .then(response => response.json())
        .then(data => {
            if (data.success && data.data.length > 0) {
                data.data.forEach(method => {
                    let div = document.createElement("div");
                    div.classList.add("payment-option");
                    div.setAttribute("data-method", method.code);
                    div.innerHTML = `
                        <img src="${method.icon}" alt="${method.name}" style="width:80px; height:30px;">
                        <span>${method.name}</span>
                    `;

                    div.addEventListener("click", function () {
                        document.querySelectorAll(".payment-option").forEach(opt => opt.classList.remove("selected"));
                        div.classList.add("selected");
                    });

                    paymentSelect.appendChild(div);
                });
            } else {
                console.error("Gagal memuat metode pembayaran.");
            }
        })
        .catch(error => console.error("Error:", error));

    // Event tombol bayar
    document.getElementById("btnBayar").addEventListener("click", function () {
        const selectedProduct = document.querySelector(".selected-product");
        const selectedPayment = document.querySelector(".payment-option.selected");

        if (!selectedProduct) {
            alert("Silakan pilih produk terlebih dahulu!");
            return;
        }
        if (!selectedPayment) {
            alert("Pilih metode pembayaran terlebih dahulu!");
            return;
        }
        if (!nomorHPInput.value || nomorHPInput.value.length < 10) {
            alert("Masukkan nomor HP yang valid!");
            return;
        }

        const productName = selectedProduct.querySelector("h3").textContent;
        const productPrice = selectedProduct.querySelector(".price").textContent;
        const paymentMethod = selectedPayment.getAttribute("data-method");
        const amount = parseInt(productPrice.replace(/\D/g, ""));

        fetch("payment.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: productName,
                price: amount,
                provider: provider,
                method: paymentMethod,
                nomor_hp: nomorHPInput.value
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = data.data.checkout_url;
            } else {
                alert("Gagal membuat transaksi: " + data.message);
            }
        })
        .catch(error => console.error("Error:", error));
    });
});
