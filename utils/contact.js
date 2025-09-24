const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL


export const submitContactForm = async (data) => {
    try {
        const payload = {
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            phone_number: data.phone,
            message: data.subject === 'product' ? `Product Inquiry: ${data.productInquiry}` : data.message,
            product: data.subject === 'product' ? data.productInquiry || null : null,
        }

        const response = await fetch(`${BASE_URL}/contact/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })

        if (!response.ok) {
            console.error("API error:", await response.text())
            return false
        }

        return true
    } catch (error) {
        console.error("Submission failed:", error)
        return false
    }
}
