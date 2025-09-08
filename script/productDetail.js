const toggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
const BASE_URL = "https://fakestoreapi.com/";
const getProductById = document.getElementById("getProductById").value;
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
async function fetchById(id) {
  try {
    const res = await fetch(`${BASE_URL}products/${id}`);
    if (!res.ok) {
      throw new Error(`Cannot fetch ID: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(`Error fetching id: ${error}`);
  }
}
fetchById(3);

