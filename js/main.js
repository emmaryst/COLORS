// Point d'entrée principal qui importe et utilise tous les modules
import { PREDEFINED_PALETTES } from './config/palettes.js';
import { COLOR_SEGMENTS } from './config/segments.js';
import { generateColors } from './components/colorGenerator.js';
import { updateCharts } from './components/chartManager.js';
import { updateColorGrid, updateColorTable, initEventListeners } from './ui/uiController.js';

// Variables globales 
let generatedColors = [];
let chartInstances = {};
let seriesCount = 3;
let categoryCount = 3;

// Initialisation
document.addEventListener('DOMContentLoaded', function () {
    initEventListeners();
    generateColors(); // Génération initiale
});
