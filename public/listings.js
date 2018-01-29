(function initializePage() {
  getListings().then(listings => listings.forEach(addListing));
  document.querySelector(".job-form").addEventListener("submit", submitForm);
})();

function makeElement(tag, text) {
  let element = document.createElement(tag);
  element.textContent = text;
  return element;
}

function buildListing(listing, data) {
  data.forEach(item => {
    listing.append(makeElement(item.selector, item.data));
  });
}
