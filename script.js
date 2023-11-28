document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');

  // Récupérer l'état du slider depuis le stockage local
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';

  // Appliquer l'état du slider au chargement de la page
  themeToggle.checked = isDarkTheme;
  document.body.classList.toggle('dark-theme', isDarkTheme);

  themeToggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-theme');
    
    // Enregistrer l'état du slider dans le stockage local
    localStorage.setItem('darkTheme', themeToggle.checked.toString());

    // Rediriger en fonction de l'état du slider
    if (themeToggle.checked) {
      window.location.href = 'index2.html';
    } else {
      window.location.href = 'index.html';
    }
  });
});

