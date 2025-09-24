import React, { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, XCircle } from "lucide-react"
import { submitContactForm } from "../../utils/contact"
import styles from "./ContactForm.module.scss"

const products = [
    "Shamba Cash Boost",
    "Shamba Connect",
    "TraceXpert",
    "CarbonGrow",
    "VetCare+",
    "Shamba Shield",
    "SmartSeason",
]

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isError, setIsError] = useState(false)
    const [subject, setSubject] = useState("")
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        productInquiry: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubjectChange = (e) => {
        const val = e.target.value
        setSubject(val)
        setFormData((prev) => ({ ...prev, subject: val }))
    }

    const handleProductChange = (e) => {
        const val = e.target.value
        setSelectedProduct(val)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setIsError(false)

        if (
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.subject ||
            (subject !== "product" && !formData.message)
        ) {
            alert("Please fill in all required fields.")
            setIsSubmitting(false)
            return
        }

        const success = await submitContactForm({
            ...formData,
            productInquiry: subject === "product" ? selectedProduct || "" : "",
        })

        if (!success) {
            setIsError(true)
            setIsSubmitting(false)
            return
        }

        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    if (isError) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`${styles.formContainer} ${styles.error}`}
            >
                <div className={`${styles.icon} ${styles.red}`}>
                    <XCircle size={64} />
                </div>
                <h3>Something went wrong.</h3>
                <p>We couldn’t send your message. Please try again later or check your network.</p>
                <button
                    className={`${styles.btn} ${styles.btnDanger}`}
                    onClick={() => {
                        setIsError(false)
                        setIsSubmitting(false)
                    }}
                >
                    Try again
                </button>
            </motion.div>
        )
    }

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`${styles.formContainer} ${styles.success}`}
            >
                <div className={`${styles.icon} ${styles.green}`}>
                    <CheckCircle2 size={64} />
                </div>
                <h3>Thank you for reaching out!</h3>
                <p>We've received your message and will get back to you ASAP.</p>
                <button className={styles.btn} onClick={() => setIsSubmitted(false)}>
                    Send another message
                </button>
            </motion.div>
        )
    }

    return (
        <div className={styles.formWrapper}>
        <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className={styles.formContainer}
        >
            <div className={styles.gridTwoColumns}>
                <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        required
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        required
                        className={styles.input}
                    />
                </div>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                    required
                    className={styles.input}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 700 000 000"
                    required
                    className={styles.input}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <select
                    id="subject"
                    value={subject}
                    onChange={handleSubjectChange}
                    required
                    className={styles.select}
                >
                    <option value="" disabled>Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="demo">Request a Demo</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="product">Product Inquiry</option>
                    <option value="other">Other</option>
                </select>
            </div>

            {subject === "product" && (
                <div className={styles.formGroup}>
                    <label htmlFor="productInquiry">Select Product</label>
                    <select
                        id="productInquiry"
                        value={selectedProduct || ""}
                        onChange={handleProductChange}
                        required
                        className={styles.select}
                    >
                        <option value="" disabled>Select a product</option>
                        {products.map((product, i) => (
                            <option key={i} value={product}>
                                {product}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {subject !== "product" && (
                <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className={styles.textarea}
                    />
                </div>
            )}

            <button
                type="submit"
                className={`${styles.btn} ${styles.btnSubmit}`}
                disabled={isSubmitting}
            >
                {isSubmitting ? "Sending..." : "Send Message"}
            </button>
        </motion.form>
        </div>
    )
}

