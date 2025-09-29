// Hide splash loader on window load
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) loader.style.display = 'none';
});

// Load and render rooms
fetch('rooms.json')
  .then(response => response.json())
  .then(rooms => {
    const container = document.getElementById('rooms-container');

    rooms.forEach(room => {
      const card = document.createElement('div');
      card.className = 'col-md-4 mb-4';

      // Always link to room1.html, room2.html, etc.
      const fileName = `room${room.id}.html`;

      card.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${room.image}" class="card-img-top" alt="${room.name}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${room.name}</h5>
            <p class="card-text">${room.description}</p>
            <p class="text-primary fw-bold">${room.price}</p>
            <div class="mt-auto d-flex justify-content-between">
              <a href="${fileName}" class="btn btn-outline-info">View</a>
              <a href="book.html?roomId=${room.id}" class="btn btn-success">Book Now</a>
            </div>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading rooms:', error));
