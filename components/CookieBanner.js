import React, { useState, useEffect } from 'react';

const COOKIE_KEY = 'cookieConsent';

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem(COOKIE_KEY);

        if (!consent) {
            const timer = setTimeout(() => {
                setVisible(true);
            }, 5000); // Show banner after 5 seconds

            return () => clearTimeout(timer); // Cleanup
        }
    }, []);

    const handleConsent = (value) => {
        localStorage.setItem(COOKIE_KEY, value);
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            backgroundColor: '#111',
            color: '#fff',
            padding: '1.75rem 2rem',
            borderRadius: '14px',
            boxShadow: '0 8px 28px rgba(0, 0, 0, 0.15)',
            zIndex: 9999,
            animation: 'fadeInUp 0.5s ease-out',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
        }}>
            <h4 style={{ margin: 0, fontSize: '1.4rem', fontWeight: '600', color: '#fff' }}>
                Your Privacy Matters
            </h4>
            <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.6, color: '#fff' }}>
                We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better user experience. By clicking "Accept", you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. You may choose to decline non-essential cookies. For more information, read our Privacy Policy.
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                <button
                    onClick={() => handleConsent('declined')}
                    style={{
                        padding: '0.6rem 1.5rem',
                        backgroundColor: '#f1f1f1',
                        color: '#333',
                        border: '1px solid #ccc',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: 500,
                        transition: 'all 0.2s ease-in-out',
                    }}
                >
                    Decline
                </button>
                <button
                    onClick={() => handleConsent('accepted')}
                    style={{
                        padding: '0.6rem 1.5rem',
                        backgroundColor: '#28a745',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: 600,
                        transition: 'background-color 0.3s ease-in-out',
                    }}
                >
                    Accept
                </button>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translate(-50%, 40px);
                    }
                    to {
                        opacity: 1;
                        transform: translate(-50%, 0);
                    }
                }

                button:hover {
                    opacity: 0.9;
                }
            `}</style>
        </div>
    );
}
