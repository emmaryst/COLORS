// Gestion des événements UI, mise à jour des éléments DOM, etc.


// Fonction pour mettre à jour la grille de couleurs
function updateColorGrid() {
    colorGrid.innerHTML = '';

    generatedColors.forEach((color, index) => {
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color.hex;

        const colorIndex = document.createElement('div');
        colorIndex.className = 'color-index';
        colorIndex.textContent = index + 1;

        colorBox.appendChild(colorIndex);
        colorGrid.appendChild(colorBox);
    });
}
// Fonction pour mettre à jour le tableau des couleurs
export function updateColorTable() {
    const tbody = colorTable.querySelector('tbody');
    tbody.innerHTML = ''; // Nettoyer le tableau

    // Si generatedColors est vide, sortir
    if (!generatedColors || generatedColors.length === 0) {
        return;
    }

    generatedColors.forEach(color => {
        const tr = document.createElement('tr');

        // Créer les cellules une par une au lieu d'utiliser innerHTML

        // Cellule ID
        const tdId = document.createElement('td');
        tdId.textContent = color.id;
        tr.appendChild(tdId);

        // Cellule couleur
        const tdColor = document.createElement('td');
        const colorDiv = document.createElement('div');
        colorDiv.className = 'color-cell';
        colorDiv.style.backgroundColor = color.hex;
        tdColor.appendChild(colorDiv);
        tr.appendChild(tdColor);

        // Cellule HEX
        const tdHex = document.createElement('td');
        tdHex.textContent = color.hex.toUpperCase();
        tr.appendChild(tdHex);

        // Cellule RGB
        const tdRgb = document.createElement('td');
        tdRgb.textContent = `R: ${color.rgb[0]}, G: ${color.rgb[1]}, B: ${color.rgb[2]}`;
        tr.appendChild(tdRgb);

        // Cellule HSL
        const tdHsl = document.createElement('td');
        tdHsl.textContent = `H: ${Math.round(color.h)}, S: ${Math.round(color.s)}%, L: ${Math.round(color.l)}%`;
        tr.appendChild(tdHsl);

        // Cellule Segment
        const tdSegment = document.createElement('td');
        tdSegment.textContent = color.segment;
        tr.appendChild(tdSegment);

        tbody.appendChild(tr);
    });
}


// export function initEventListeners() { /* ... */ }
