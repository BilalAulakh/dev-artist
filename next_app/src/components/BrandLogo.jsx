import React from 'react';

const BrandLogo = ({ height = 44, variant = 'light', showWordmark = true }) => {
    const wordmarkPrimary = variant === 'dark' ? '#ffffff' : '#0c112b';
    const accent = '#00c2cb';
    const width = showWordmark ? height * (240 / 56) : height;
    const viewBox = showWordmark ? '0 0 240 56' : '0 0 56 56';
    const id = (suffix) => `bl-${variant}-${suffix}`;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox}
            height={height}
            width={width}
            role="img"
            aria-label="Dev Artist"
            style={{ display: 'block' }}
        >
            <defs>
                <linearGradient id={id('bg')} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0c112b" />
                    <stop offset="55%" stopColor="#13193d" />
                    <stop offset="100%" stopColor="#1a2347" />
                </linearGradient>
                <linearGradient id={id('sheen')} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
                <linearGradient id={id('mono')} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#cfeff1" />
                </linearGradient>
                <linearGradient id={id('accent')} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00c2cb" />
                    <stop offset="100%" stopColor="#0089b8" />
                </linearGradient>
            </defs>

            {/* Squircle */}
            <rect x="2" y="6" width="44" height="44" rx="13" fill={`url(#${id('bg')})`} />
            <rect x="2" y="6" width="44" height="22" rx="13" fill={`url(#${id('sheen')})`} />
            <rect
                x="2.5"
                y="6.5"
                width="43"
                height="43"
                rx="12.5"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1"
            />

            {/* Stylized "D" — clean letterform with even-odd cutout */}
            <path
                fillRule="evenodd"
                fill={`url(#${id('mono')})`}
                d="M 13 15
                   H 22
                   C 30 15, 36 21, 36 28
                   C 36 35, 30 41, 22 41
                   H 13
                   Z
                   M 17.5 19
                   H 22
                   C 27.5 19, 31.5 23, 31.5 28
                   C 31.5 33, 27.5 37, 22 37
                   H 17.5
                   Z"
            />

            {/* Teal accent dot — sits like a punctuation mark */}
            <circle cx="40" cy="41" r="2.6" fill={`url(#${id('accent')})`} />
            <circle cx="40" cy="41" r="2.6" fill="none" stroke="#00c2cb" strokeOpacity="0.35" strokeWidth="2.4" />

            {showWordmark && (
                <g>
                    <text
                        x="58"
                        y="36"
                        fontFamily="Outfit, system-ui, -apple-system, sans-serif"
                        fontSize="22"
                        fontWeight="700"
                        fill={wordmarkPrimary}
                        letterSpacing="-0.4"
                    >
                        Dev
                    </text>
                    <text
                        x="100"
                        y="36"
                        fontFamily="Outfit, system-ui, -apple-system, sans-serif"
                        fontSize="22"
                        fontWeight="800"
                        fill={accent}
                        letterSpacing="-0.4"
                    >
                        Artist
                    </text>
                </g>
            )}
        </svg>
    );
};

export default BrandLogo;
