import fruit from "../assets/images/orange-fruit.jpg";


function load() {
    const contentDiv = document.querySelector('#content');
    fill(contentDiv);
    style(contentDiv);
} 
function fill(contentDiv) {
    contentDiv.innerHTML = `
        <div class="half">
            <h4>A little bit about us</h4>
            <h1>Juice Jam</h1>
            <p>AI generated text blurbs</p>
        </div>
        <div class='half'>
            <p>
                Welcome to Juice Jam, where health meets indulgence.  We've crafted a menu of nutrient-packed smoothies, fresh-pressed juices, and wholesome snacks made with the finest natural ingredients.
            </p>
        </div>
        <div class='half'>
            <p>
                At Juice Jam, we don’t just serve drinks – we serve experiences. Whether you’re here to recharge after a workout, fuel your day, or simply treat yourself, we offer the perfect blend of health and luxury in every glass.
            </p>
        </div>
        <div class='half'>
            <p>
                Step into Juice Jam and discover a refreshing oasis where wellness is reimagined. Let’s toast to a healthier, more vibrant you!
            </p>
        </div>
    `;
} 

function style(contentDiv) {
    contentDiv.style.backgroundImage = `url(${fruit})`;
    document.querySelector('#home').classList.remove('active');
    document.querySelector('#menu').classList.remove('active');
    document.querySelector('#about').classList.add('active');
}


export default {
    load,
};