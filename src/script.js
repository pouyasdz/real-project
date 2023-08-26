// elements
const aside = document.querySelector(".side-bar");
const header = document.querySelector(".navbar");
const footer = document.querySelector(".footer");

const path = window.location.pathname;
const indexPage = window.location.protocol+"//"+window.location.host+"/index.html";
const asideElement = `
<ul>
<li>
  <a href="/pages/pasta.html">Pasta Recipe</a>
</li>
<li>
  <a href="/pages/kfc.html">KFC Recipe</a>
</li>
<li>
  <a href="/pages/hamburger.html">Hamburger Recipe</a>
</li>
<li>
  <a href="/pages/salad.html">Salad Recipe</a>
</li>
<li>
  <a href="/pages/breakfast.html">Delicious Breakfast Recipe</a>
</li>
<li>
  <a href="/pages/hotdog.html">Hotdog Recipe</a>
</li>
</ul>
`
const headerElemnt = `
<ul>
<li><a href="${indexPage}">Home</a></li>
<li>About</li>
<li>Log in</li>
<li>Sign up</li>
</ul>
`
const footerElemnt= `
<div>
        <h3>Contact</h3>
        <ul>
            <li>009079797</li>
            <li>009079797</li>
            <li>009079797</li>
        </ul>
      </div>
      <div>
        <h3>About us</h3>
        <p>
            the best company for thech
        </p>
      </div>
      <div>
        <h3>Shortcut Links</h3>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Sign in</a></li>
            <li><a href="#">Login</a></li>
        </ul>
      </div>
      <div>
        <h3>weblog</h3>
        <ul>
            <li><a href="#">weblog</a></li>
            <li><a href="#">weblog</a></li>
            <li><a href="#">weblog</a></li>
        </ul>
      </div>
`

header.innerHTML = headerElemnt
footer.innerHTML = footerElemnt;
aside.innerHTML = asideElement;