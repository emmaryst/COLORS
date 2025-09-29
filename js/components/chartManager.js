// components/chartManager.js

// Fonction modifiée pour générer des données pour les graphiques
// Suppression de l'option 'quarterly' et utilisation du nombre de séries variable
export function generateChartData() {
    let labels = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
    let datasets = [];

    // Créer des datasets avec nos couleurs générées
    // Utiliser le seriesCount au lieu d'un nombre fixe de séries
    for (let i = 0; i < seriesCount; i++) {
        // Générer des données aléatoires pour la démonstration
        const data = Array.from({ length: labels.length }, () => Math.floor(Math.random() * 100));

        // Utiliser les couleurs générées, en boucle si nécessaire
        const colorIndex = i % generatedColors.length;
        const color = generatedColors[colorIndex];

        datasets.push({
            label: `Série ${i + 1}`,
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



// Fonction pour créer un graphique
export function createChart(canvasId, type, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');

    // Configurations spéciales selon le type
    let config = {
        type: type,
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false, // Permet de contrôler la taille
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

    // Réduire la taille du premier graphique mais non !!
    if (canvasId === 'chart-preview') {
        ctx.canvas.parentNode.style.height = '300px'; // Hauteur réduite
    }

    // Configurations spéciales pour les graphiques en camembert et polaires

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

    // Appliquer uniquement le thème de fond (pas d'autres styles)

    // Créer et stocker l'instance de graphique
    chartInstances[canvasId] = new Chart(ctx, config);
}

/ Fonction pour créer ou mettre à jour les graphiques
export function updateCharts() {
    const chartType = chartTypeSelect.value;
    // Afficher/masquer les boutons selon le type de graphique
    const seriesButtons = document.querySelectorAll('#add-series-btn, #remove-series-btn');
    const categoryButtons = document.querySelectorAll('#add-category-btn, #remove-category-btn');

    if (['pie', 'doughnut', 'polarArea'].includes(chartType)) {
        // Pour les graphiques circulaires, afficher les boutons de catégories
        seriesButtons.forEach(btn => btn.style.display = 'none');
        categoryButtons.forEach(btn => btn.style.display = 'inline-block');
    } else {
        // Pour les autres graphiques, afficher les boutons de séries
        seriesButtons.forEach(btn => btn.style.display = 'inline-block');
        categoryButtons.forEach(btn => btn.style.display = 'none');
    }

    // Nettoyer les graphiques existants
    Object.values(chartInstances).forEach(chart => chart.destroy());
    chartInstances = {};

    // Générer les données
    const chartData = generateChartData();

    // Créer les graphiques
    createChart('chart-preview', chartType, chartData);

    // Pour le deuxième graphique, on utilise un type différent
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
