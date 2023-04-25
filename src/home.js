const renderHomePage = (() => {
  const contentContainer = document.getElementById("content");

  const home = document.createElement("div");
  home.innerHTML = `
        <p>Home Page</p>
    `;

  contentContainer.appendChild(home);
})();
