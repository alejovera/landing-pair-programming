const home = () => {
    return `
        <div class="home_testing">
           hola
           hol
           hola
           hola
           hola
           hola
           hola
           hola
           hola
        </div>
      `;
  };
  const about = () => {
    return `
        <div>
           content - about
        </div>
      `;
  };
  const contact = () => {
    return `
        <div>
           content - contact
        </div>
      `;
  };
  const routes = {
    "/": "home",
    "/contact": "contact",
    "/about": "about"
  };
const rootDiv = document.getElementById("root");
const onNavigate = (_pathname) => {  
  const url = new URL(window.location)
  console.log(url);
  console.log('Boton clickeado' + _pathname);  
  window.history.replaceState(null, null, _pathname);
  window.history.pushState(_pathname, _pathname, _pathname);
  rootDiv.innerHTML = routes[_pathname];
};