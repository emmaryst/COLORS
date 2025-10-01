
    document.addEventListener('DOMContentLoaded', function() {
  const launchButton = document.getElementById('launch-excel');
    const instructions = document.getElementById('instructions');

    launchButton.addEventListener('click', function() {
    // 1. R�cup�rer la s�quence de couleurs g�n�r�e
    const colorsSequence = getGeneratedColors(); // Fonction � impl�menter selon votre code existant

    // 2. Copier dans le presse-papiers
    copyToClipboard(colorsSequence);

    // 3. Afficher les instructions
    instructions.classList.remove('hidden');

    // 4. Lancer Excel avec le fichier simulateur
    // Remplacez "CHEMIN_VERS_VOTRE_FICHIER" par le chemin d'acc�s r�el
    // Pour un fichier r�seau, utilisez: file:///\\serveur\dossier\fichier.xlsx 
    // Pour un fichier web: https://votre-serveur.com/fichier.xlsx
    setTimeout(function() {
        window.location.href = "ms-excel:ofe|u|file:///C:\Users\Emmanuelle\Documents\GitHub\COLORS\simulateur.xlsx";
    }, 1000);
  });

    // Fonction pour obtenir les couleurs g�n�r�es (� adapter � votre code existant)
    function getGeneratedColors() {
    // R�cup�rer les couleurs depuis votre interface
    // Exemple:
    // const colors = document.querySelectorAll('.color-item');
    // return Array.from(colors).map(c => c.dataset.colorValue).join(',');

    // Version temporaire pour test:
    return "HSL(0,70%,50%),HSL(60,70%,50%),HSL(120,70%,50%),HSL(180,70%,50%),HSL(240,70%,50%)";
  }

    // Fonction pour copier dans le presse-papiers
    function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // Feedback visuel
    launchButton.textContent = "Couleurs copi�es! Excel s'ouvre...";
    setTimeout(function() {
        launchButton.textContent = "Ouvrir le Simulateur Excel";
    }, 3000);
  }
});

