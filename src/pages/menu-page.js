import fruit from "../assets/images/green-fruit.jpg";

function load() {
    const contentDiv = document.querySelector('#content');
    fill(contentDiv);
    style(contentDiv);
}
function fill(contentDiv) {
    contentDiv.innerHTML = `
        <div class='half'>
            <h4>Fun & fruity smoothies & shakes</h4>
            <h1>Menu</h1>
            <p>All items made to order</p>
        </div>
        <div class='grid'>
            <div class='half'>
                <h4>Berry Good / $4</h4>
                <p>
                    Strawberry, raspberry, blueberry, vitamin mix
                </p>
            </div>
            <div class='half'>
                <h4>Great Greens / $4</h4>
                <p>
                    Spinach, celery, pineapple, vitamin mix
                </p>
            </div>
            <div class='half'>
                <h4>Flower Power / $5</h4>
                <p>
                    Hibiscus leaf, citrus, vitamin mix
                </p>
            </div>
            <div class='half'>
                <h4>Leafy Speed / $6</h4>
                <p>
                    Spinach, celery, pineapple, caffeine, taurine
                </p>
            </div>
            <div class='half'>
                <h4>Pump It Up / $6</h4>
                <p>
                    Cocoa nib, pea protein powder, nut butter, creatine
                </p>
            </div>
        </div>
    `;
} 

function style(contentDiv) {
    contentDiv.style.backgroundImage = `url(${fruit})`;
    contentDiv.style.overflowY = 'auto';
    document.querySelector('#home').classList.remove('active');
    document.querySelector('#menu').classList.add('active');
    document.querySelector('#about').classList.remove('active');
}

export default {
    load,
};