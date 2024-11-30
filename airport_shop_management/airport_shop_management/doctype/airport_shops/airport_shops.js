// Copyright (c) 2024, Priya and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Airport Shops", {
// 	refresh(frm) {

// 	},
// });









// frappe.ui.form.on("Airport Shops", {
//     before_save: function(frm) {
//         if (frm.doc.shop_name && frm.doc.__last_doc.shop_name && frm.doc.shop_name !== frm.doc.__last_doc.shop_name) {
//             // Set previous shop status to Available
//             frappe.call({
//                 method: "frappe.client.set_value",
//                 args: {
//                     doctype: "Shops",
//                     name: frm.doc.__last_doc.shop_name,
//                     fieldname: "status",
//                     value: "Available"
//                 },
//                 callback: function(response) {
//                     if (response.message) {
//                         frappe.msgprint(`Previous shop (${frm.doc.__last_doc.shop_name}) status updated to Available.`);
//                     }
//                 }
//             });
//         }
//     },

//     validate: function(frm) {
//         if (frm.doc.shop_name) {
//             frappe.call({
//                 method: "frappe.client.get_value",
//                 args: {
//                     doctype: "Shops",
//                     fieldname: "status",
//                     filters: { name: frm.doc.shop_name }
//                 },
//                 async: false, // Make synchronous for validation
//                 callback: function(response) {
//                     const current_status = response.message?.status;
//                     if (current_status === "Occupied" && frm.doc.shop_name !== frm.doc.__last_doc.shop_name) {
//                         frappe.msgprint("Error: This shop is already occupied.");
//                         frappe.validated = false;
//                     }
//                 }
//             });
//         }
//     },

//     after_save: function(frm) {
//         if (frm.doc.shop_name) {
//             frappe.call({
//                 method: "frappe.client.set_value",
//                 args: {
//                     doctype: "Shops",
//                     name: frm.doc.shop_name,
//                     fieldname: "status",
//                     value: "Occupied"
//                 },
//                 callback: function(response) {
//                     if (response.message) {
//                         frappe.msgprint(`Shop (${frm.doc.shop_name}) status updated to Occupied.`);
//                     }
//                 }
//             });
//         }
//     }
// });





















// frappe.ui.form.on("Airport Shops", {
//     before_save: function(frm) {
//         // Check if there's a previously assigned shop
//         if (frm.doc.previous_shop_name && frm.doc.shop_name !== frm.doc.previous_shop_name) {
//             // Set previous shop status to "Available"
//             frappe.call({
//                 method: "frappe.client.set_value",
//                 args: {
//                     doctype: "Shops",
//                     name: frm.doc.previous_shop_name,
//                     fieldname: "status",
//                     value: "Available"
//                 },
//                 callback: function(response) {
//                     if (response.message) {
//                         frappe.msgprint(`Previous shop (${frm.doc.previous_shop_name}) status updated to Available.`);
//                     }
//                 }
//             });
//         }

//         // Update the `previous_shop_name` with the current `shop_name`
//         frm.doc.previous_shop_name = frm.doc.shop_name;
//     },

//     validate: function(frm) {
//         if (frm.doc.shop_name) {
//             frappe.call({
//                 method: "frappe.client.get_value",
//                 args: {
//                     doctype: "Shops",
//                     fieldname: "status",
//                     filters: { name: frm.doc.shop_name }
//                 },
//                 async: false,
//                 callback: function(response) {
//                     const current_status = response.message?.status;
//                     if (current_status === "Occupied" && frm.doc.shop_name !== frm.doc.previous_shop_name) {
//                         frappe.msgprint("Error: This shop is already occupied.");
//                         frappe.validated = false;
//                     }
//                 }
//             });
//         }
//     },

//     after_save: function(frm) {
//         if (frm.doc.shop_name) {
//             frappe.call({
//                 method: "frappe.client.set_value",
//                 args: {
//                     doctype: "Shops",
//                     name: frm.doc.shop_name,
//                     fieldname: "status",
//                     value: "Occupied"
//                 },
//                 callback: function(response) {
//                     if (response.message) {
//                         frappe.msgprint(`Shop (${frm.doc.shop_name}) status updated to Occupied.`);
//                     }
//                 }
//             });
//         }
//     }
// });















// frappe.ui.form.on("Airport Shops", {
//     before_save: function(frm) {
//         if (frm.doc.previous_shop_name && frm.doc.shop_name !== frm.doc.previous_shop_name) {
//             // Set previous shop status to "Available"
//             frappe.call({
//                 method: "frappe.client.set_value",
//                 args: {
//                     doctype: "Shops",
//                     name: frm.doc.previous_shop_name,
//                     fieldname: "status",
//                     value: "Available"
//                 },
//                 callback: function(response) {
//                     if (response.message) {
//                         frappe.msgprint(`Previous shop (${frm.doc.previous_shop_name}) status updated to Available.`);
//                     }
//                 }
//             });
//         }
//     },

//     validate: function(frm) {
//         if (frm.doc.shop_name) {
//             frappe.call({
//                 method: "frappe.client.get_value",
//                 args: {
//                     doctype: "Shops",
//                     fieldname: "status",
//                     filters: { name: frm.doc.shop_name }
//                 },
//                 async: false,
//                 callback: function(response) {
//                     const current_status = response.message?.status;
//                     if (current_status === "Occupied" && frm.doc.shop_name !== frm.doc.previous_shop_name) {
//                         frappe.msgprint("Error: This shop is already occupied.");
//                         frappe.validated = false;
//                     }
//                 }
//             });
//         }
//     },

//     after_save: function(frm) {
//         if (frm.doc.shop_name) {
//             frappe.call({
//                 method: "frappe.client.set_value",
//                 args: {
//                     doctype: "Shops",
//                     name: frm.doc.shop_name,
//                     fieldname: "status",
//                     value: "Occupied"
//                 },
//                 callback: function(response) {
//                     if (response.message) {
//                         frappe.msgprint(`Shop (${frm.doc.shop_name}) status updated to Occupied.`);
//                     }
//                 }
//             });

//             // Update the previous_shop_name with the latest shop_name
//             frm.set_value("previous_shop_name", frm.doc.shop_name);
//         }
//     }
// });











frappe.ui.form.on("Airport Shops", {
    onload: function(frm) {
        // Capture the initial value of shop_name when the form loads
        frm.doc.previous_shop_name = frm.doc.shop_name;
    },

    validate: function(frm) {
        if (frm.doc.shop_name) {
            // Fetch the status of the selected shop
            frappe.call({
                method: "frappe.client.get_value",
                args: {
                    doctype: "Shops",
                    fieldname: "status",
                    filters: { name: frm.doc.shop_name }
                },
                async: false,
                callback: function(response) {
                    const current_status = response.message?.status;
                    if (current_status === "Occupied" && frm.doc.shop_name !== frm.doc.previous_shop_name) {
                        frappe.msgprint("Error: This shop is already occupied.");
                        frappe.validated = false; // Prevent saving if the shop is occupied
                    }
                }
            });
        }
    },

    before_save: function(frm) {
        // Check if there was a previous shop and it has changed
        if (frm.doc.previous_shop_name && frm.doc.shop_name !== frm.doc.previous_shop_name) {
            // Set previous shop status to "Available"
            frappe.call({
                method: "frappe.client.set_value",
                args: {
                    doctype: "Shops",
                    name: frm.doc.previous_shop_name,
                    fieldname: "status",
                    value: "Available"
                },
                callback: function(response) {
                    if (response.message) {
                        frappe.msgprint(`Previous shop (${frm.doc.previous_shop_name}) status updated to Available.`);
                    }
                }
            });
        }
    },

    after_save: function(frm) {
        if (frm.doc.shop_name) {
            // Set the new shop status to "Occupied"
            frappe.call({
                method: "frappe.client.set_value",
                args: {
                    doctype: "Shops",
                    name: frm.doc.shop_name,
                    fieldname: "status",
                    value: "Occupied"
                },
                callback: function(response) {
                    if (response.message) {
                        frappe.msgprint(`Shop (${frm.doc.shop_name}) status updated to Occupied.`);
                    }
                }
            });

            // Update previous_shop_name to current shop_name for the next edit session
            frm.set_value("previous_shop_name", frm.doc.shop_name);
        }
    }
});
