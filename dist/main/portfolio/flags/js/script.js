// Render flags from json
function renderFlagName() {
  let renderFlagInfo = "";
  for (let i = 0; i < countries.length; i++) {
    renderFlagInfo += `
        <div class="flip">
            <div class="flip__flag">
                <div class="flip__flag-front">
                    <img src="${countries[i].file_url}" alt="${
      countries[i].name
    }"/>
                </div>
                <div class="flip__flag-back">
                    <h1>${countries[i].name}</h1>
                    <a href="https://en.wikipedia.org${
                      countries[i].url
                    }" target="_blank">READ MORE IN <i class="fab fa-wikipedia-w"></i></a> 
                </div>
            </div>
        </div>
        `;
  }
  document.querySelector(".flag-list").innerHTML = renderFlagInfo;
}
renderFlagName();

function goBack() {
  window.history.back();
}

// function search() {
//   let input, filter, ul, li, a, i, txtValue;
//   input = document.getElementById("search-input");
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("myUL");
//   li = ul.getElementsByTagName("li");
//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }
