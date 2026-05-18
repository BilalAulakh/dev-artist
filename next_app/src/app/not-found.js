"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

export default function NotFound() {
  useEffect(() => {
    // Add is-not-found class to body when 404 page mounts
    document.body.classList.add('is-not-found');
    
    // Clean up: remove the class when 404 page unmounts
    return () => {
      document.body.classList.remove('is-not-found');
    };
  }, []);

  return (
    <div className="not-found-wrapper">
      <div className="not-found-content">
        <div className="icon-container">
          <h1 className="error-code">404</h1>
        </div>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-desc">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="actions">
          <Link href="/" className="btn-home">
            Back to Homepage
          </Link>
          <Link href="/#contact" className="btn-contact">
            Get in Touch
          </Link>
        </div>
      </div>
      <style jsx>{`
        :global(body.is-not-found header),
        :global(body.is-not-found footer),
        :global(body.is-not-found .main-footer),
        :global(body.is-not-found .footer-side-tab),
        :global(body.is-not-found .side-tab) {
          display: none !important;
        }

        .not-found-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          background: 
            radial-gradient(circle at 10% 20%, rgba(0, 194, 203, 0.06) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(0, 70, 173, 0.05) 0%, transparent 40%),
            #ffffff;
          font-family: var(--font-main), sans-serif;
        }
        .not-found-content {
          text-align: center;
          max-width: 580px;
          width: 100%;
          padding: 60px 40px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 194, 203, 0.15);
          box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .error-code {
          font-size: 8.5rem;
          font-weight: 850;
          line-height: 1;
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--accent-teal) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0 0 10px;
          letter-spacing: -3px;
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .error-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: var(--bg-dark);
          margin-bottom: 16px;
          letter-spacing: -0.6px;
        }
        .error-desc {
          font-size: 1.05rem;
          color: var(--text-gray);
          line-height: 1.6;
          margin-bottom: 36px;
        }
        .actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn-home {
          background: var(--accent-teal);
          color: #ffffff;
          padding: 14px 32px;
          border-radius: 30px;
          font-weight: 700;
          font-size: 0.95rem;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 8px 20px rgba(0, 194, 203, 0.25);
          border: none;
          cursor: pointer;
        }
        .btn-home:hover {
          background: #00adb5;
          transform: translateY(-3px);
          box-shadow: 0 12px 24px rgba(0, 194, 203, 0.38);
        }
        .btn-contact {
          background: transparent;
          color: var(--bg-dark);
          padding: 14px 32px;
          border-radius: 30px;
          font-weight: 700;
          font-size: 0.95rem;
          border: 1px solid rgba(12, 17, 43, 0.15);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        .btn-contact:hover {
          background: rgba(12, 17, 43, 0.04);
          border-color: var(--bg-dark);
          transform: translateY(-3px);
        }
        @media (max-width: 480px) {
          .not-found-content {
            padding: 40px 20px;
          }
          .error-code {
            font-size: 6rem;
          }
          .error-title {
            font-size: 1.9rem;
          }
          .actions {
            flex-direction: column;
            gap: 12px;
          }
          .btn-home, .btn-contact {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
