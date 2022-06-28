var buttons = document.querySelectorAll(".GREN_button");

function handleGrenData(img_src, res) {
    const descriptions = document.querySelectorAll(`.GREN_description[data-img_src="${img_src}"]`);
    const button = document.querySelector(`.GREN_button[data-img_src="${img_src}"]`);
    
    for(let description of descriptions){
        description.innerHTML = '';

        const title = document.createElement('h3');
        title.innerText = `${res.product} [${parseFloat(res.prob).toFixed(2)}%]`;
        description.appendChild(title);

        const details = document.createElement('p');
        details.innerText = `${res.details}`;
        description.appendChild(details);

        const ul = document.createElement('ul');
        
        for(let alt of res.alternates){
            const li = document.createElement('li');
            li.innerText = alt;
            ul.appendChild(li);
        }
        description.appendChild(ul);

        description.style['display'] = 'block';
    }
}

for (let button of buttons){
    button.style["display"] = "none";
    button.style["position"] = 'absolute';
    button.style["top"] = 0;
    button.style["left"] = '30%';

    button.onclick = function (event) {
        event.stopPropagation();
        event.preventDefault();

        const img_src = event.target.dataset.img_src;
        // console.log(`button clicked ${img_src}`);
        
        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5000')

        const formData = new FormData();
        formData.append('image', img_src);

        options = {
            method: 'POST',
            headers: headers,
            body: formData,
        }

        fetch('http://127.0.0.1:5000/', options)
        .then(response => response.json())
        .then(res => {
            console.log(res);
            handleGrenData(img_src, res);
        }).catch( err => {
            alert('Failed to connect to Gren server');
        })
    }
}

var descriptions = document.querySelectorAll(".GREN_description");

for (let description of descriptions){
    description.style["display"] = "none";
    description.style["position"] = "absolute";
    description.style["color"] = "black";
    description.style["background-color"] = "yellow";
    description.style["bottom"] = "0";
    
}

const imgs = document.querySelectorAll('.GREM_img');

for(let img of imgs){
    img.parentElement.onmouseover = function() {
        const img_src = img.src;
        const buttons = document.querySelectorAll(`.GREN_button[data-img_src="${img_src}"]`);
        for(let button of buttons){
            button.style["display"] = "inline";
        }
        const descriptions = document.querySelectorAll(`.GREN_description[data-img_src="${img_src}"]`);
        for(let description of descriptions){
            description.style["display"] = "block";
        }
    }

    img.parentElement.onmouseleave = function() {
        setTimeout(makeHidden, 3000);

        function makeHidden(){
            const img_src = img.src;
            const buttons = document.querySelectorAll(`.GREN_button[data-img_src="${img_src}"]`);
            for(let button of buttons){
                button.style["display"] = "none";
            }
            const descriptions = document.querySelectorAll(`.GREN_description[data-img_src="${img_src}"]`);
            for(let description of descriptions){
                description.style["display"] = "none";
            }
        }
    }
}
