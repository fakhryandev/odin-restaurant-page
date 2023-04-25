const header = (() => {
  const contentContainer = document.getElementById("content");

  const header = document.createElement("header");

  header.innerHTML = `
  <nav>
  <h1>My Foods</h1>
  <ul>
    <li>Home</li>
    <li>Menu</li>
    <li>Contact</li>
  </ul>
  </nav>
  `;

  contentContainer.appendChild(header);
})();
