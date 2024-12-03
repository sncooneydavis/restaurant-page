import fruit from "../assets/images/pink-fruit.jpg";


function load() {
    const contentDiv = document.querySelector('#content');
    fill(contentDiv);
    style(contentDiv);
}

function fill(contentDiv){
    contentDiv.innerHTML = `
        <div class="half">
            <h4>Fun & Fruity Juice & Smoothies</h4>
            <h1>Juice Jam</h1>
            <p>1234 Name Street City FL, 12300</p>
        </div>
        <div class='half hours'>
            <h3>Hours</h3>
            <ul>
                <li>Weekdays: 7am - 7pm</li>
                <li>Sat: 9am - 5pm</li>
                <li>Sun: 9am - 12pm</li>
            </ul>
        </div>
    `;
}

function style(contentDiv) {
    contentDiv.style.backgroundImage = `url(${fruit})`;
    document.querySelector('#home').classList.add('active');
    document.querySelector('#menu').classList.remove('active');
    document.querySelector('#about').classList.remove('active');
}



export default {
    load,
};