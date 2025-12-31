import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const categoriesDir = path.join(__dirname, 'public/categories');

const svgs = {
  'e-liquids.svg': `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bottleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#fff;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#f0f0f0;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e0e0e0;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4C6ABD;stop-opacity:0.9" />
      <stop offset="100%" style="stop-color:#2d3e7a;stop-opacity:0.8" />
    </linearGradient>
    <filter id="liquid3dShadow">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
      <feOffset dx="2" dy="3" result="offsetblur"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.3"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <circle cx="100" cy="110" r="85" fill="#4C6ABD" opacity="0.08"/>
  <g filter="url(#liquid3dShadow)">
    <path d="M 75 60 Q 70 70 70 100 L 70 170 Q 70 180 80 180 L 120 180 Q 130 180 130 170 L 130 100 Q 130 70 125 60 Z" fill="url(#bottleGradient)" stroke="#999" stroke-width="1.5"/>
    <path d="M 75 60 Q 72 75 72 100 L 72 170 Q 72 178 80 178 L 82 175 L 82 60 Z" fill="#fff" opacity="0.4"/>
    <path d="M 128 65 L 132 62 L 132 155 L 128 158 Z" fill="#fff" opacity="0.25"/>
  </g>
  <g filter="url(#liquid3dShadow)">
    <path d="M 72 120 L 72 170 Q 72 178 80 178 L 120 178 Q 128 178 128 170 L 128 120 Z" fill="url(#liquidGradient)"/>
    <path d="M 72 120 Q 90 115 100 120 Q 110 125 128 120" stroke="#4C6ABD" stroke-width="1" fill="none" opacity="0.8"/>
  </g>
  <g filter="url(#liquid3dShadow)">
    <rect x="85" y="45" width="30" height="15" rx="2" fill="#4C6ABD" stroke="#2d3e7a" stroke-width="1.5"/>
    <rect x="85" y="45" width="30" height="4" fill="#fff" opacity="0.5"/>
  </g>
  <g opacity="0.6">
    <rect x="78" y="130" width="44" height="25" rx="3" fill="#fff" opacity="0.8"/>
    <text x="100" y="142" font-family="Arial" font-size="8" font-weight="bold" fill="#4C6ABD" text-anchor="middle">E-LIQUID</text>
  </g>
</svg>`,

  'disposables.svg': `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="dispGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#fff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e8e8e8;stop-opacity:1" />
    </linearGradient>
    <filter id="dispShadow">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
      <feOffset dx="2" dy="3" result="offsetblur"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.3"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <circle cx="100" cy="110" r="85" fill="#4C6ABD" opacity="0.08"/>
  <g filter="url(#dispShadow)">
    <path d="M 80 50 Q 75 60 75 90 Q 75 150 80 170 Q 85 180 95 180 L 105 180 Q 115 180 120 170 Q 125 150 125 90 Q 125 60 120 50 Z" fill="url(#dispGrad)" stroke="#999" stroke-width="1.5"/>
    <path d="M 80 50 Q 77 65 77 90 Q 77 150 82 170 L 84 165 L 84 50 Z" fill="#fff" opacity="0.5"/>
  </g>
  <g filter="url(#dispShadow)">
    <ellipse cx="100" cy="55" rx="15" ry="8" fill="#4C6ABD" stroke="#2d3e7a" stroke-width="2"/>
    <ellipse cx="100" cy="55" rx="13" ry="6" fill="#fff" opacity="0.4"/>
  </g>
  <g><rect x="75" y="85" width="50" height="70" rx="3" fill="#4C6ABD" opacity="0.15"/><text x="100" y="130" font-family="Arial" font-size="14" font-weight="bold" fill="#4C6ABD" text-anchor="middle" opacity="0.6">PRO</text></g>
</svg>`,

  'glassware.svg': `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#e0f2ff;stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:#b3d9ff;stop-opacity:0.6" />
    </linearGradient>
    <filter id="glass3dShadow">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3.5"/>
      <feOffset dx="2" dy="4" result="offsetblur"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.3"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <circle cx="100" cy="110" r="85" fill="#4C6ABD" opacity="0.08"/>
  <g filter="url(#glass3dShadow)">
    <path d="M 60 80 L 70 70 L 80 70 Q 95 65 100 65 Q 105 65 120 70 L 130 70 L 140 80 L 135 170 Q 135 180 100 180 Q 65 180 65 170 Z" fill="url(#glassGrad)" stroke="#4C6ABD" stroke-width="2.5" opacity="0.9"/>
    <path d="M 68 72 L 75 72 Q 90 68 100 68 Q 110 68 125 72 L 132 72" stroke="#fff" stroke-width="1.5" fill="none" opacity="0.6"/>
    <path d="M 70 150 L 135 150" stroke="#fff" stroke-width="1" fill="none" opacity="0.4"/>
  </g>
  <g filter="url(#glass3dShadow)">
    <path d="M 90 70 L 85 75 L 85 130 L 90 135 Z" fill="#fff" opacity="0.3"/>
    <path d="M 110 70 L 130 75 L 125 130 L 110 135 Z" fill="#4C6ABD" opacity="0.15"/>
  </g>
  <g opacity="0.7"><text x="100" y="155" font-family="Arial" font-size="12" font-weight="bold" fill="#4C6ABD" text-anchor="middle">GLASS</text></g>
</svg>`,

  'accessories.svg': `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="accessGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f5f5f5;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#d0d0d0;stop-opacity:1" />
    </linearGradient>
    <filter id="access3dShadow">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
      <feOffset dx="2" dy="3" result="offsetblur"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.3"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <circle cx="100" cy="110" r="85" fill="#4C6ABD" opacity="0.08"/>
  <g filter="url(#access3dShadow)">
    <g transform="translate(60,70)">
      <rect x="0" y="0" width="35" height="35" rx="4" fill="url(#accessGrad)" stroke="#999" stroke-width="1.5"/>
      <circle cx="17.5" cy="17.5" r="8" fill="#4C6ABD" opacity="0.3"/>
      <circle cx="17.5" cy="17.5" r="5" fill="#fff" opacity="0.5"/>
    </g>
    <g transform="translate(105,70)">
      <circle cx="0" cy="0" r="17.5" fill="url(#accessGrad)" stroke="#999" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="11" fill="#4C6ABD" opacity="0.2"/>
      <path d="M -8 -3 L 8 3" stroke="#4C6ABD" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
    </circle>
    <g transform="translate(75,125)">
      <rect x="0" y="0" width="40" height="30" rx="3" fill="url(#accessGrad)" stroke="#999" stroke-width="1.5"/>
      <rect x="5" y="5" width="30" height="20" rx="2" fill="#4C6ABD" opacity="0.15"/>
    </g>
  </g>
</svg>`
};

// Write all SVGs
Object.entries(svgs).forEach(([filename, content]) => {
  fs.writeFileSync(path.join(categoriesDir, filename), content);
  console.log(`✓ Created ${filename}`);
});

console.log('\n✓ All category icons updated with 3D effects and light theme!');
