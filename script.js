const services = [
  { name: "MoldGuard Xpert Solutions", city: "Lawrence, Kansas", years: 7, rating: 4.8 },
  { name: "Service Provider Name", city: "City, State", years: 3, rating: 4.4 },
  { name: "Clean Home Experts", city: "Kansas City", years: 5, rating: 4.6 },
  { name: "SafeLiving Services", city: "Topeka", years: 6, rating: 4.9 },
  { name: "HealthyHome Mold Care", city: "Wichita", years: 4, rating: 4.5 },
  { name: "Pro Mold Fixers", city: "Overland Park", years: 8, rating: 4.7 },
];

let visibleCount = 3;
let filteredServices = [...services];

const list = document.getElementById("serviceList");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const resultCount = document.getElementById("resultCount");

function renderServices() {
  list.innerHTML = "";
  filteredServices.slice(0, visibleCount).forEach(s => {
    list.innerHTML += `
      <div class="service-card">
        <img src="images/IMG_0918 1.svg" />
        <div class="service-info">
          <h2>${s.name}</h2>
          <small>${s.city} | ${s.years}+ Years of Service</small>
          <p>Count on MoldGuard Xpert Solutions for reliable mold remediation services. We use advanced techniques and cutting-edge equipment to detect, remove, and prevent mold infestations. With our thorough inspections, effective treatments, and comprehensive... </p>
          <div class="actions">
            <button>Request Callback</button>
            <button>♡</button>
            <button id="wishlist" >♡</button>
            <a href="service_inner.html" class="btn-link">
  <button class="primary">Know Details</button>
</a>
          </div>
        </div>
        <div class="rating">★ ${s.rating}</div>
      </div>
    `;
  });

  resultCount.innerText = filteredServices.length;
  loadMoreBtn.style.display = visibleCount >= filteredServices.length ? "none" : "inline-block";
}

document.getElementById("ratingFilter").onchange = filterServices;
document.getElementById("yearFilter").onchange = filterServices;

function filterServices() {
  const rating = +ratingFilter.value;
  const years = +yearFilter.value;

  filteredServices = services.filter(s =>
    s.rating >= rating && s.years >= years
  );

  visibleCount = 3;
  renderServices();
}

loadMoreBtn.onclick = () => {
  visibleCount += 3;
  renderServices();
};

renderServices();




