// Render flags from json
function renderFlagName () {
    let renderFlagInfo = "";
    for (let i = 0; i < countries.length; i++) {
        renderFlagInfo += `
        <div class="flip">
            <div class="flip__flag">
                <div class="flip__flag-front">
                    <img src="${countries[i].file_url}" alt="${countries[i].name}"/>
                </div>
                <div class="flip__flag-back">
                    <h1>${countries[i].name}</h1>
                    <a href="https://en.wikipedia.org${countries[i].url}" target="_blank">READ MORE IN <i class="fab fa-wikipedia-w"></i></a> 
                </div>
            </div>
        </div>
        `
    }
    document.querySelector(".flag-list").innerHTML = renderFlagInfo;
}
renderFlagName ();


