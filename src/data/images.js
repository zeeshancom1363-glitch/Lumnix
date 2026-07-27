// PLACEHOLDERS — replace the `src` values with real photos before launch.
// Keep the keys and alt text unchanged.
const P = (seed, w, h) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const images = {
    hero: {
        src: P('luminex-hero', 1920, 1080),
        w: 1920,
        h: 1080,
        alt: 'Luminex Star technicians working on a commercial fit-out in Dubai',
    },
    aboutTeam: {
        src: P('luminex-team', 1200, 800),
        w: 1200,
        h: 800,
        alt: 'The Luminex Star technical services team on site',
    },
    services: {
        'carpentry-wood-flooring': [P('lux-carp-1', 800, 600), P('lux-carp-2', 800, 600), P('lux-carp-3', 800, 600)],
        'building-cleaning': [P('lux-clean-1', 800, 600), P('lux-clean-2', 800, 600), P('lux-clean-3', 800, 600)],
        'glass-aluminium': [P('lux-glass-1', 800, 600), P('lux-glass-2', 800, 600), P('lux-glass-3', 800, 600)],
        'hvac-ventilation': [P('lux-hvac-1', 800, 600), P('lux-hvac-2', 800, 600), P('lux-hvac-3', 800, 600)],
        'electromechanical': [P('lux-emech-1', 800, 600), P('lux-emech-2', 800, 600), P('lux-emech-3', 800, 600)],
        'plaster-works': [P('lux-plast-1', 800, 600), P('lux-plast-2', 800, 600), P('lux-plast-3', 800, 600)],
        'floor-wall-tiling': [P('lux-tile-1', 800, 600), P('lux-tile-2', 800, 600), P('lux-tile-3', 800, 600)],
        'sanitary-pipe-repairs': [P('lux-sanit-1', 800, 600), P('lux-sanit-2', 800, 600), P('lux-sanit-3', 800, 600)],
        'plumbing-sanitary': [P('lux-plumb-1', 800, 600), P('lux-plumb-2', 800, 600), P('lux-plumb-3', 800, 600)],
        'false-ceiling-partitions': [P('lux-ceil-1', 800, 600), P('lux-ceil-2', 800, 600), P('lux-ceil-3', 800, 600)],
    },
    projects: Array.from({ length: 12 }, (_, i) => ({
        src: P(`luminex-project-${i + 1}`, 900, 700),
        w: 900,
        h: 700,
        alt: `Completed Luminex Star project in Dubai — photo ${i + 1}`,
    })),
};
