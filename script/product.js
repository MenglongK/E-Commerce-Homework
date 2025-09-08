const toggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
const BASE_URL = "https://fakestoreapi.com/";
const getAllProduct = document.getElementById("getAllProduct");
let card = "";
async function fetchProduct() {
  let res = await fetch(`${BASE_URL}products`);
  let data = await res.json();
  data.map((product) => {
    card += `
        <div class="relative m-auto flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white/15 shadow-md md:hover:scale-103 duration-500 hover:shadow-blue-400 backdrop-blur-md">
  <a id="getProductById" class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
    <img class="object-cover m-auto md:hover:scale-105 duration-500" src=${product.image} alt=${product.title} />
  </a>
  <div class="mt-4 px-5 pb-5">
    <a href="#">
      <h5 class="text-xl tracking-tight text-white line-clamp-1 md:hover:text-yellow-300">${product.title}</h5>
    </a>
    <div class="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span class="text-3xl font-bold text-white">$${product.price}</span>
      </p>
      <div class="flex items-center">
        <span class="text-white">Rating</span>
        <span class="mr-2 ml-3 rounded bg-yellow-300 px-2.5 py-0.5 text-xs font-semibold text-black">${product.rating.rate}</span>
      </div>
    </div>
    <a href="#" class="flex items-center justify-center rounded-md bg-gray-300 px-5 py-2.5 text-center text-sm font-medium text-black md:hover:bg-yellow-300 hover:text-black focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Add to cart</a
    >
  </div>
</div>
    `;
    getAllProduct.innerHTML = card;
  });
}
fetchProduct();
