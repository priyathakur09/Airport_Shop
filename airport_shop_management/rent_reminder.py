import frappe
from frappe.utils import getdate, add_days

def send_rent_due_reminders():
    try:
        tenants = frappe.get_all("Tenant", filters={"rent_due_date": ["=", getdate()]} , fields=["name", "email", "rent_due_date"])

        for tenant in tenants:
            frappe.sendmail(
                recipients=tenant.email,
                subject="Reminder: Rent Due",
                message=f"Dear Tenant, \n\nThis is a reminder that your rent is due today ({tenant.rent_due_date}). Please make the payment at your earliest convenience.\n\nThank you."
            )
            frappe.msgprint(f"Rent reminder sent to {tenant.email}")
    
    except Exception as e:
        frappe.log_error(message=str(e), title="Rent Due Reminder Error")
        frappe.msgprint("An error occurred while sending rent reminders.")
