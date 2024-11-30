import frappe

def calculate_shop_counts(self, event=None):
    # Get the list of all airports
    airports = frappe.get_all("Airports", fields=["name"])

    results = []
    for airport in airports:
        # Count total shops for each airport
        total_shops = frappe.db.count("Shops", filters={"airport": airport.name})
        
        # Count occupied shops for each airport
        occupied_shops = frappe.db.count("Shops", filters={"airport": airport.name, "status": "Occupied"})
        
        # Calculate available shops by subtracting occupied from total
        available_shops = total_shops - occupied_shops
        
        # Update the Airport doc with calculated values
        frappe.db.set_value("Airports", airport.name, "total_shops", total_shops)
        frappe.db.set_value("Airports", airport.name, "occupied_shops", occupied_shops)
        frappe.db.set_value("Airports", airport.name, "available_shops", available_shops)
        
        results.append({
            "airport": airport.name,
            "total_shops": total_shops,
            "occupied_shops": occupied_shops,
            "available_shops": available_shops
        })
    
    return results



