// components/chartManager.js

// Fonction modifi�e pour g�n�rer des donn�es pour les graphiques
// Suppression de l'option 'quarterly' et utilisation du nombre de s�ries variable
export function generateChartData() {
    let labels = ['Jan', 'F�v', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Ao�t', 'Sep', 'Oct', 'Nov', 'D�c'];
    let datasets = [];

    // Cr�er des datasets avec nos couleurs g�n�r�es
    // Utiliser le seriesCount au lieu d'un nombre fixe de s�ries
    for (let i = 0; i < seriesCount; i++) {
        // G�n�rer des donn�es al�atoires pour la d�monstration
        const data = Array.from({ length: labels.length }, () => Math.floor(Math.random() * 100));

        // Utiliser les couleurs g�n�r�es, en boucle si n�cessaire
        const colorIndex = i % generatedColors.length;
        const color = generatedColors[colorIndex];

        datasets.push({
            label: `S�rie ${i + 1}`,
            data: data,
            backgroundColor: color.hex,
            borderColor: color.hex,
            borderWidth: 1
        });
    }

    return {
        labels: labels,
        datasets: datasets
    };
}



// Fonction pour cr�er un graphique
export function createChart(canvasId, type, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');

    // Configurations sp�ciales selon le type
    let config = {
        type: type,
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false, // Permet de contr�ler la taille
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: `Graphique ${type.charAt(0).toUpperCase() + type.slice(1)}`
                }
            }
        }
    };

    // R�duire la taille du premier graphique mais non !!
    if (canvasId === 'chart-preview') {
        ctx.canvas.parentNode.style.height = '300px'; // Hauteur r�duite
    }

    // Configurations sp�ciales pour les graphiques en camembert et polaires

    if (['pie', 'doughnut', 'polarArea'].includes(type)) {
        // Pour ces types, on utilise un seul dataset avec plusieurs couleurs
        const allColors = generatedColors.map(color => color.hex);
        // Utiliser categoryCount au lieu d'une valeur fixe ou min avec allColors.length
        const allData = Array.from({ length: Math.min(categoryCount, allColors.length) },
            () => Math.floor(Math.random() * 100));

        config.data = {
            labels: allData.map((_, i) => `Segment ${i + 1}`),
            datasets: [{
                data: allData,
                backgroundColor: allColors.slice(0, allData.length)
            }]
        };
    }

    // Appliquer uniquement le th�me de fond (pas d'autres styles)

    // Cr�er et stocker l'instance de graphique
    chartInstances[canvasId] = new Chart(ctx, config);
}

/ Fonction pour cr�er ou mettre � jour les graphiques
export function updateCharts() {
    const chartType = chartTypeSelect.value;
    // Afficher/masquer les boutons selon le type de graphique
    const seriesButtons = document.querySelectorAll('#add-series-btn, #remove-series-btn');
    const categoryButtons = document.querySelectorAll('#add-category-btn, #remove-category-btn');

    if (['pie', 'doughnut', 'polarArea'].includes(chartType)) {
        // Pour les graphiques circulaires, afficher les boutons de cat�gories
        seriesButtons.forEach(btn => btn.style.display = 'none');
        categoryButtons.forEach(btn => btn.style.display = 'inline-block');
    } else {
        // Pour les autres graphiques, afficher les boutons de s�ries
        seriesButtons.forEach(btn => btn.style.display = 'inline-block');
        categoryButtons.forEach(btn => btn.style.display = 'none');
    }

    // Nettoyer les graphiques existants
    Object.values(chartInstances).forEach(chart => chart.destroy());
    chartInstances = {};

    // G�n�rer les donn�es
    const chartData = generateChartData();

    // Cr�er les graphiques
    createChart('chart-preview', chartType, chartData);

    // Pour le deuxi�me graphique, on utilise un type diff�rent
    let secondChartType;
    switch (chartType) {
        case 'bar':
            secondChartType = 'line';
            break;
        case 'line':
            secondChartType = 'bar';
            break;
        case 'pie':
            secondChartType = 'doughnut';
            break;
        case 'radar':
            secondChartType = 'polarArea';
            break;
        case 'polarArea':
            secondChartType = 'radar';
            break;
        default:
            secondChartType = 'bar';
    }

    createChart('chart-preview-2', secondChartType, chartData);

    // Ajouter les graphiques 3 et 4
    const thirdChartType = (chartType === 'pie' || chartType === 'doughnut') ? 'polarArea' : 'pie';
    createChart('chart-preview-3', thirdChartType, chartData);

    const fourthChartType = (chartType === 'radar' || chartType === 'polarArea') ? 'line' : 'radar';
    createChart('chart-preview-4', fourthChartType, chartData);
}
