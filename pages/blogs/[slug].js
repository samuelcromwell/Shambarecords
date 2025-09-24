import React, { Fragment, useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar.js';
import { useParams } from 'next/navigation';
import styles from './Article.module.scss';
import { fetchBlogBySlug } from '../../utils/blogs';
import PartnersSection from '../../components/PartnersSection/PartnersSection.js';
import CtaSection from '../../components/CtaSection/CtaSection.js';
import MapSection from '../../components/MapSection/MapSection.js';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar.js';
import Logo from '/public/Logo/shamba.svg'
import PageTitle from '../../components/pagetitle/PageTitle.js';
const HomePage = () => {
    const params = useParams();
    const slug = params?.slug;
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) return;

        const loadBlog = async () => {
            try {
                const data = await fetchBlogBySlug(slug);
                setBlog(data);
            } catch (error) {
                console.error('Error loading blog:', error);
            } finally {
                setLoading(false);
            }
        };

        loadBlog();
    }, [slug]);

    if (loading) return <p className={styles.loading}>Loading article...</p>;
    if (!blog) return <p className={styles.error}>Article not found.</p>;

    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Shamba Records'} pagesub={'Blogs'} />

            <div className={styles.articleContainer}>
                <img src={blog.header_image} alt={blog.title} className={styles.hero} />
                <div className={styles.contentWrapper}>
                    <h1>{blog.title}</h1>
                    <p className={styles.date}>{new Date(blog.created_at).toLocaleDateString()}</p>
                    <div
                        className={styles.content}
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    ></div>
                </div>
            </div>
            <PartnersSection CollClass={'wpo-partner-section section-padding'} />
            <CtaSection hclass={'wpo-cta-section'} />
            <MapSection />
            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage;