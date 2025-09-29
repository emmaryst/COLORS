// utils/exportUtils.js

// Fonction pour exporter au format Excel HTML
export function exportToExcelHTML() {
    const selectedPalette = paletteSelect.value;

    // Création d'un document HTML formaté pour Excel
    let htmlContent = `
  <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!--[if gte mso 9]>
    <xml>
    <x:ExcelWorkbook>
    <x:ExcelWorksheets>
    <x:ExcelWorksheet>
    <x:Name>Palette de couleurs</x:Name>
    <x:WorksheetOptions>
    <x:DisplayGridlines/>
    </x:WorksheetOptions>
    </x:ExcelWorksheet>
    </x:ExcelWorksheets>
    </x:ExcelWorkbook>
    </xml>
    <![endif]-->
    <style>
    table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
    }
    th {
    background-color: #f2f2f2;
    font-weight: bold;
    }
    .color-cell {
    width: 50px;
    height: 30px;
    }
    </style>
    <title>Palette ${selectedPalette}</title>
  </head>
  <body>
    <h1>Palette de couleurs: ${selectedPalette}</h1>
    <p>Générée le: ${new Date().toLocaleString()}</p>
    <p>Nombre de couleurs: ${generatedColors.length}</p>
    <table>
    <tr>
    <th>ID</th>
    <th>Couleur</th>
    <th>Code Hex</th>
    <th>RGB</th>
    <th>HSL</th>
    <th>Segment</th>
    </tr>
  `;

    // Ajouter chaque couleur au tableau
    generatedColors.forEach(color => {
        htmlContent += `
    <tr>
    <td>${color.id}</td>
    <td class="color-cell" style="background-color: ${color.hex};"></td>
    <td>${color.hex.toUpperCase()}</td>
    <td>R: ${color.rgb[0]}, G: ${color.rgb[1]}, B: ${color.rgb[2]}</td>
    <td>H: ${Math.round(color.h)}, S: ${Math.round(color.s)}%, L: ${Math.round(color.l)}%</td>
    <td>${color.segment}</td>
    </tr>
    `;
    });

    htmlContent += `
  </table>
  
  <h2>Code de génération</h2>
  <pre>${generateCustomCode()}</pre>
  </body>
  </html>
  `;

    downloadFile(htmlContent, `palette_${selectedPalette}_${generatedColors.length}.xlsx`, 'application/vnd.ms-excel');

}
// Fonction pour exporter au format CSV
export function exportToCSV() {
    const selectedPalette = paletteSelect.value;
    let csvContent = "ID,HEX,R,G,B,H,S,L,Segment\n";

    generatedColors.forEach(color => {
        csvContent += [
            color.id,
            color.hex.toUpperCase(),
            color.rgb[0], color.rgb[1], color.rgb[2],
            Math.round(color.h), Math.round(color.s), Math.round(color.l),
            `"${color.segment}"`
        ].join(',') + '\n';
    });

    downloadFile(csvContent, `palette_${selectedPalette}_${generatedColors.length}.csv`, 'text/csv');
}

// Fonction pour générer le code personnalisé
export function generateCustomCode(isVBA = false) {
    const selectedPalette = paletteSelect.value;
    const numberOfColors = generatedColors.length;

    // Analyser les groupes de couleurs
    const groups = analyzeColorGroups(generatedColors);

    let code = isVBA
        ? `' Code de génération pour la palette ${selectedPalette}\n`
        : `// Code de génération pour la palette ${selectedPalette}\n`;

    code += isVBA
        ? `' Fonction pour recréer cette palette avec ${numberOfColors} couleurs\n`
        : `// Fonction pour recréer cette palette avec ${numberOfColors} couleurs\n`;

    if (isVBA) {
        code += `Function GenerateCustomHSLColors() As Variant\n`;
        code += ` Dim colorPalette(${groups.length - 1}) As Variant\n\n`;

        groups.forEach((group, index) => {
            code += ` ' Groupe ${index + 1} \- ${group.colors.length} couleur(s)\n`;
            code += ` colorPalette(${index}) = Array(${group.lumMin}, ${group.lumMax}, `;
            code += `${group.satMin}, ${group.satMax}, ${group.hueMin}, ${group.hueMax})\n`;
        });

        code += `\n GenerateCustomHSLColors = colorPalette\n`;
        code += `End Function`;
    } else {
        code += `function GenerateCustomHSLColors() {\n`;
        code += ` return [\n`;

        groups.forEach((group, index) => {
            code += ` // Groupe ${index + 1} \- ${group.colors.length} couleur(s)\n`;
            code += ` Array(${group.lumMin}, ${group.lumMax}, `;
            code += `${group.satMin}, ${group.satMax}, ${group.hueMin}, ${group.hueMax})`;

            if (index < groups.length - 1) {
                code += ',';
            }

            code += '\n';
        });

        code += ` ];\n`;
        code += `}`;
    }

    return code;
}


// Fonction pour télécharger un fichier
export function downloadFile(content, filename, type) {
    const blob = new Blob([content], { type });
    const link = document.createElement('a');
    link.download = filename;
    link.href = window.URL.createObjectURL(blob);
    link.click();
}
