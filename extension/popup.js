// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setImageDescriptionDection,
  });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content-script.js'],
  });
});

// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}

function setImageDescriptionDection() {

  const imgs = document.querySelectorAll('img');
  
  for(let img of imgs){
    if(img.height < 50 || img.width<50)continue;

    img.classList.add('GREM_img');

    const img_src = img.src;
    // console.log(img_src);

    const div_description = document.createElement('div');
    div_description.classList.add('GREN_description');
    div_description.dataset.img_src = img_src;
    img.parentElement.appendChild(div_description);

    const query_button = document.createElement('button');
    query_button.innerText = 'search';
    query_button.classList.add('GREN_button');
    query_button.dataset.img_src = img_src;
    img.parentElement.appendChild(query_button);
  }
}
