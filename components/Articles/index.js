'use client';

import React, { useEffect, useState } from 'react';
import styles from './Articles.module.scss';
import { fetchAllBlogs } from '../../utils/blogs';
import { useRouter } from 'next/navigation';

export default function Articles() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await fetchAllBlogs();
        setBlogs(data);
      } catch (error) {
        console.error('Error loading blogs:', error);
      } finally {
        setLoading(false);
      }
    };
    loadBlogs();
  }, []);

  if (loading) return <p style={{ padding: '2rem', textAlign: 'center' }}>Loading blogs...</p>;
  if (blogs.length === 0 && !loading) return <p style={{ padding: '2rem', textAlign: 'center',  }}>We couldn't find any articles</p>;

  return (
    <div className={styles.articlesContainer}>
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className={styles.card}
          onClick={() => router.push(`/blogs/${blog.slug}`)}
        >
          <div className={styles.cardImageWrapper}>
            <img
              src={blog.header_image}
              alt={blog.title}
              width="600"
              height="337.5"
              loading="lazy"
            />
          </div>
          <div className={styles.content}>
            <h2>{blog.title}</h2>
            <p>
              {blog.content
                ? blog.content.replace(/<[^>]+>/g, '').slice(0, 100) + '...'
                : 'No content available'}
            </p>
          </div>
          <div className={styles.cardFooter}>
            <p className={styles.date}>
              {new Date(blog.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </p>
            <span
              className={styles.readMoreBtn}
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/blogs/${blog.slug}`);
              }}
            >
              Read More
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
