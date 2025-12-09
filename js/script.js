const bouquets = [
  {
    img: "images/bouquet_cart11.png",
    text: "Ніжна свіжість: троянди та лілії",
    price: "445 грн",
  },
  {
    img: "images/bouquet_cart21.png",
    text: "Сорбет: хризантеми та троянди",
    price: "450 грн",
  },
  {
    img: "images/bouquet_cart31.png",
    text: "Yellow Song: соняшники та солідаго",
    price: "455 грн",
  },
  {
    img: "images/bouquet_cart41.png",
    text: "Персиковий нектар: лілії та троянди",
    price: "455 грн",
  },
  {
    img: "images/bouquet_cart51.png",
    text: "Аврора: лілії та троянди",
    price: "460 грн",
  },
  {
    img: "images/bouquet_cart61.png",
    text: "Класика кохання: червоних троянд",
    price: "465 грн",
  },
];

const catalogList = document.querySelector(".catalog__list");

function createCatalogItem(bouquet) {
  const li = document.createElement("li");
  li.classList.add("catalog__list-item");

  const wrapper = document.createElement("div");
  wrapper.classList.add("catalog__item-wrapper");

  const img = document.createElement("img");
  img.classList.add("catalog__image");
  img.src = bouquet.img;
  img.alt = "bouquet";

  const text = document.createElement("p");
  text.classList.add("catalog__text");
  text.textContent = bouquet.text;

  const price = document.createElement("p");
  price.classList.add("catalog__price");
  price.textContent = bouquet.price;

  wrapper.appendChild(img);
  wrapper.appendChild(text);
  wrapper.appendChild(price);

  li.appendChild(wrapper);

  return li;
}

bouquets.forEach((bouquet) => {
  const catalogItem = createCatalogItem(bouquet);
  catalogList.appendChild(catalogItem);
});