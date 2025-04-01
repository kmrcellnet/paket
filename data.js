const products = {
        "AXIS": {
            pulsa: [
                { name: "Pulsa AXIS 5.000", description: "Pulsa reguler", price: "Rp 7.000", provider: "AXIS" },
                { name: "Pulsa AXIS 10.000", description: "Pulsa reguler", price: "Rp 12.000", provider: "AXIS" },
                { name: "Pulsa AXIS 15.000", description: "Pulsa reguler", price: "Rp 17.000", provider: "AXIS" },
                { name: "Pulsa AXIS 20.000", description: "Pulsa reguler", price: "Rp 22.000", provider: "AXIS" }
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
                { name: "Pulsa INDOSAT 5.000", description: "Pulsa reguler", price: "Rp 6.500", provider: "INDOSAT" },
                { name: "Pulsa INDOSAT 10.000", description: "Pulsa reguler", price: "Rp 11.500", provider: "INDOSAT" }
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
                { name: "Pulsa Telkomsel 10.000", description: "Pulsa reguler", price: "Rp 12.000", provider: "TELKOMSEL" }
            ],
            paketData: [
                { name: "Telkomsel 2,5GB 5 Hari", description: "1GB Nasional + 1,5GB Lokal", price: "Rp 13.000", provider: "TELKOMSEL" },
                { name: "Telkomsel 3GB 5 Hari", description: "0,5GB Nasional + 2,5GB Lokal", price: "Rp 14.000", provider: "TELKOMSEL" },
                { name: "Telkomsel 2GB 3 Hari", description: "0,5GB Nasional + 1,5GB Lokal", price: "Rp 11.000", provider: "TELKOMSEL" },
                { name: "Telkomsel 1,5GB 3 Hari", description: "0,5GB Nasional + 1GB Lokal", price: "Rp 8.000", provider: "TELKOMSEL" }
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
        { name: "Dana Top Up 50.000", description: "Isi saldo Dana", price: "Rp 52.000", provider: "DANA" },
        { name: "Dana Top Up 100.000", description: "Isi saldo Dana", price: "Rp 102.000", provider: "DANA" },
        // OVO
        { name: "OVO Top Up 50.000", description: "Isi saldo OVO", price: "Rp 52.000", provider: "OVO" },
        { name: "OVO Top Up 100.000", description: "Isi saldo OVO", price: "Rp 102.000", provider: "OVO" },
        // GoPay
        { name: "GoPay Top Up 50.000", description: "Isi saldo GoPay", price: "Rp 52.000", provider: "GOPAY" },
        { name: "GoPay Top Up 100.000", description: "Isi saldo GoPay", price: "Rp 102.000", provider: "GOPAY" },
        // ShopeePay
        { name: "ShopeePay Top Up 50.000", description: "Isi saldo ShopeePay", price: "Rp 52.000", provider: "SHOPEEPAY" },
        { name: "ShopeePay Top Up 100.000", description: "Isi saldo ShopeePay", price: "Rp 102.000", provider: "SHOPEEPAY" }
    ];