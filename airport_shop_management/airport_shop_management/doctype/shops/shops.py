# Copyright (c) 2024, Priya and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Shops(Document):
	pass





# import frappe

# def set_rent_amount(doc, method):
#     # Check if monthly rent is already set in the Shop entry
#     if not doc.monthly_rent:
#         # Get the default rent amount from global configuration
#         default_rent = frappe.db.get_single_value("Shop Setting", "default_rent_amount")
        
#         # Use predefined rent based on area if shop area thresholds exist
#         if doc.area_of_shop:
#             rent_rate = get_rent_rate_based_on_area(float(doc.area_of_shop))
#             doc.monthly_rent = rent_rate if rent_rate else default_rent
#         else:
#             # Apply global default rent if no rent is set
#             doc.monthly_rent = default_rent if default_rent else 0

# def get_rent_rate_based_on_area(area_of_shop):
#     # Define your area-based rent here
#     if area_of_shop <= 250:
#         return 10000
#     elif area_of_shop <= 500:
#         return 15000
#     elif area_of_shop <= 750:
#         return 20000
#     elif area_of_shop <= 1000:
#         return 25000
#     else:
#         return 30000






import frappe

@frappe.whitelist()
def set_rent_amount(shop_name, method=None):
    # Fetch the shop document by its name
    doc = frappe.get_doc("Shops", shop_name)

    # Check if the monthly rent is already set
    if not doc.monthly_rent:
        # Fetch the default rent amount from the global configuration (Shop Settings)
        default_rent = frappe.db.get_single_value("Shop Setting", "default_rent_amount")
        
        # Set rent based on area
        if doc.area_of_shop:
            rent_rate = get_rent_rate_based_on_area(doc.area_of_shop, default_rent)
            doc.monthly_rent = rent_rate
        
        # Save the document with updated rent
        doc.save()

def get_rent_rate_based_on_area(area_of_shop, default_rent):
    # Ensure area_of_shop is treated as an integer or float
    try:
        area_of_shop = float(area_of_shop)  # Convert to float
    except ValueError:
        area_of_shop = 0  # Set to 0 if the conversion fails

    # Define rent rates based on area ranges
    if area_of_shop <= 250:
        return default_rent if default_rent else 10000  # Default rent for small area
    elif area_of_shop <= 500:
        return 15000  # Rent for medium area
    elif area_of_shop <= 750:
        return 20000  # Rent for larger area
    elif area_of_shop <= 1000:
        return 25000  # Rent for even larger area
    else:
        return 30000  # Rent for very large area






@frappe.whitelist()
def get_available_shops():
    return frappe.get_list("Shops", filters={"status": "Available"}, fields=["shop_name", "area_of_shop", "monthly_rent", "airport"])
