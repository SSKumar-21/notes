const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if(body.classList.contains('dark-mode')) {
      themeToggle.textContent = 'Toggle Light Mode';
    } else {
      themeToggle.textContent = 'Toggle Dark Mode';
    }
  });

const searchInput = document.getElementById('search-input');
  const notesList = document.getElementById('notes-list');
  const notes = notesList.getElementsByTagName('li');

  searchInput.addEventListener('keyup', () => {
    const filter = searchInput.value.toLowerCase();
    
    for (let i = 0; i < notes.length; i++) {
      let note = notes[i];
      if (note.textContent.toLowerCase().includes(filter)) {
        note.style.display = '';
      } else {
        note.style.display = 'none';
      }
    }
  });


// not connected to main file
