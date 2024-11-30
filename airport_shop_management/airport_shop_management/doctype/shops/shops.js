// Copyright (c) 2024, Priya and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Shops", {
// 	refresh(frm) {

// 	},
// });




// frappe.ui.form.on("Shops", {
//     area_of_shop: function(frm) {
//         frappe.call({
//             method: "airport_shop_management.airport_shop_management.doctype.shops.shops.set_rent_amount",
//             args: {
//                 doc: frm.doc
//             },
//             callback: function(response) {
//                 // Fetch updated monthly rent if the backend code runs correctly
//                 frm.reload_doc();
//             }
//         });
//     }
// });








// frappe.ui.form.on("Shops", {
//     area_of_shop: function(frm) {
//         // Only trigger rent update if area_of_shop has been modified
//         frappe.call({
//             method: "airport_shop_management.airport_shop_management.doctype.shops.shops.set_rent_amount",
//             args: {
//                 shop_name: frm.doc.name  // Pass the shop name to the method
//             },
//             callback: function(response) {
//                 // After updating, reload the document to get updated rent value
//                 frm.reload_doc();
//             }
//         });
//     }
// });













frappe.ui.form.on("Shops", {
    area_of_shop: function(frm) {
        // Only trigger rent update if area_of_shop has been modified
        frappe.call({
            method: "airport_shop_management.airport_shop_management.doctype.shops.shops.set_rent_amount",
            args: {
                shop_name: frm.doc.name  // Pass the shop name to the method
            },
            callback: function(response) {
                // After updating the rent, do not reload the form to avoid blocking fields
                frm.set_value("monthly_rent", response.message.monthly_rent);
                frm.refresh_field("monthly_rent");
            }
        });
    }
});


