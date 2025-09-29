
// Fonction pour convertir HSL vers RGB
export function hslToRgb(h, s, l) {
    // Normaliser les valeurs
    h = h / 255 * 360; // Excel utilise 0-255 pour H, on convertit en 0-360
    s = s / 100; // Saturation en pourcentage
    l = l / 100; // Luminosité en pourcentage

    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs((h / 60) % 2 - 1));
    let m = l - c / 2;
    let r = 0, g = 0, b = 0;

    if (h >= 0 && h < 60) {
        r = c; g = x; b = 0;
    } else if (h >= 60 && h < 120) {
        r = x; g = c; b = 0;
    } else if (h >= 120 && h < 180) {
        r = 0; g = c; b = x;
    } else if (h >= 180 && h < 240) {
        r = 0; g = x; b = c;
    } else if (h >= 240 && h < 300) {
        r = x; g = 0; b = c;
    } else {
        r = c; g = 0; b = x;
    }

    return [
        Math.round((r + m) * 255),
        Math.round((g + m) * 255),
        Math.round((b + m) * 255)
    ];
}

export function getColorSegment(hValue) {
    for (const segment of COLOR_SEGMENTS) {
        if (hValue >= segment[0] && hValue <= segment[1]) {
            return `${segment[2]} (${segment[3]})`;
        }
    }
    return "Non défini";

    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
