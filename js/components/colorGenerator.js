// components/colorGenerator.js
import { PREDEFINED_PALETTES } from '../config/palettes.js';
import { COLOR_SEGMENTS } from '../config/segments.js';
import { hslToRgb, getColorSegment, shuffleArray } from '../utils/colorUtils.js';

// Fonction pour générer une couleur aléatoire dans une plage HSL
export function generateRandomColor(lumMin, lumMax, satMin, satMax, hueMin, hueMax) {
    const h = Math.random() * (hueMax - hueMin) + hueMin;
    const s = Math.random() * (satMax - satMin) + satMin;
    const l = Math.random() * (lumMax - lumMin) + lumMin;
    const rgb = hslToRgb(h, s, l);

    // Convertir RGB en hexadécimal
    const hex = '#' + rgb.map(v => {
        const hex = v.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');

    return {
        h: h,
        s: s,
        l: l,
        rgb: rgb,
        hex: hex,
        segment: getColorSegment(h)
    };
}
// Fonction pour parser le code personnalisé
export function parseCustomCode(code) {
    // Recherche le pattern "Array(xx, xx, xx, xx, xx, xx)"
    const arrayRegex = /Array\((\d+),\s*(\d+),\s*(\d+),\s*(\d+),\s*(\d+),\s*(\d+)\)/g;
    const matches = Array.from(code.matchAll(arrayRegex));

    if (matches.length === 0) {
        throw new Error("Aucune définition de palette valide trouvée");
    }

    return matches.map(match => [
        parseInt(match[1]), parseInt(match[2]),
        parseInt(match[3]), parseInt(match[4]),
        parseInt(match[5]), parseInt(match[6])
    ]);
}
// Fonction pour analyser les groupes de couleurs
export function analyzeColorGroups(colors) {
    let groups = [];
    const hThreshold = 10; // Seuil de différence pour les teintes
    const slThreshold = 10; // Seuil pour saturation et luminosité

    // Pour chaque couleur
    colors.forEach(color => {
        // Chercher un groupe existant compatible
        let foundGroup = false;

        for (const group of groups) {
            // Vérifier si la couleur s'intègre dans ce groupe
            if (
                Math.abs(color.h - (group.hueMin + group.hueMax) / 2) <= hThreshold &&
                Math.abs(color.s - (group.satMin + group.satMax) / 2) <= slThreshold &&
                Math.abs(color.l - (group.lumMin + group.lumMax) / 2) <= slThreshold
            ) {
                // Ajuster les limites du groupe
                group.hueMin = Math.min(group.hueMin, Math.floor(color.h));
                group.hueMax = Math.max(group.hueMax, Math.ceil(color.h));
                group.satMin = Math.min(group.satMin, Math.floor(color.s));
                group.satMax = Math.max(group.satMax, Math.ceil(color.s));
                group.lumMin = Math.min(group.lumMin, Math.floor(color.l));
                group.lumMax = Math.max(group.lumMax, Math.ceil(color.l));
                group.colors.push(color);

                foundGroup = true;
                break;
            }
        }

        // Si aucun groupe compatible n'a été trouvé, créer un nouveau groupe
        if (!foundGroup) {
            groups.push({
                hueMin: Math.floor(color.h),
                hueMax: Math.ceil(color.h),
                satMin: Math.floor(color.s),
                satMax: Math.ceil(color.s),
                lumMin: Math.floor(color.l),
                lumMax: Math.ceil(color.l),
                colors: [color]
            });
        }
    });

    // Assurer que chaque groupe a des plages minimales
    groups = groups.map(group => {
        // Ajouter une marge minimale à chaque plage
        const minRange = 1;
        if (group.hueMax - group.hueMin < minRange) {
            const mid = (group.hueMax + group.hueMin) / 2;
            group.hueMin = Math.floor(mid - minRange / 2);
            group.hueMax = Math.ceil(mid + minRange / 2);
        }
        if (group.satMax - group.satMin < minRange) {
            const mid = (group.satMax + group.satMin) / 2;
            group.satMin = Math.floor(mid - minRange / 2);
            group.satMax = Math.ceil(mid + minRange / 2);
        }
        if (group.lumMax - group.lumMin < minRange) {
            const mid = (group.lumMax + group.lumMin) / 2;
            group.lumMin = Math.floor(mid - minRange / 2);
            group.lumMax = Math.ceil(mid + minRange / 2);
        }
        return group;
    });

    return groups;
}
// Fonction pour générer les couleurs
export function generateColors() {
    const selectedPalette = paletteSelect.value;
    const numberOfColors = parseInt(numberInput.value);
    const randomOrder = randomOrderCheckbox.checked;
    const useCustomCode = customCodeCheckbox.checked;

    let colorPalette;

    if (useCustomCode) {
        try {
            // Parser le code personnalisé
            colorPalette = parseCustomCode(customCodeTextarea.value);
        } catch (e) {
            alert("Erreur dans le code personnalisé: " + e.message);
            return;
        }
    } else {
        colorPalette = PREDEFINED_PALETTES[selectedPalette];
    }

    if (!colorPalette || colorPalette.length === 0) {
        alert("Palette non valide");
        return;
    }

    // Générer les couleurs
    let colors = [];
    for (let i = 0; i < numberOfColors; i++) {
        const familyIndex = i % colorPalette.length;
        const family = colorPalette[familyIndex];

        const [lumMin, lumMax, satMin, satMax, hueMin, hueMax] = family;
        const color = generateRandomColor(lumMin, lumMax, satMin, satMax, hueMin, hueMax);

        colors.push({
            ...color,
            id: i + 1
        });
    }

