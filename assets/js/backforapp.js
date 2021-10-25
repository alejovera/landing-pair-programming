const APP_ID = "cPMUsy9aJ8pgk4wSVxP87m5zonLQTLNhnVjeF4CN"
const JS_KEY = "lOvgjAvsx68LqLFUeOHrtscUZPpGi5OrNovxfIAf"
let clients = [];

async function loadSuccessCases(){
    let client = new Parse.Query("Client");
    results = await client.find();
    try {
        for (const object of results) {
            clients.push({
                name : object.get('Name'),
                position : object.get('Position'),
            })
        }
        console.log('results', results);
        console.log('clients', clients);
    } catch (error) {
        console.error('Error while fetching MyCustomClassName', error);
    }
}

window.onload = async () => {
    Parse.initialize(APP_ID, JS_KEY);
    Parse.serverURL = "https://parseapi.back4app.com/";
    await loadSuccessCases();
    setTimeout(displaySuccessCases, 500);
    onNavigate("/");
}

function displaySuccessCases(){
    let clientsData = document.getElementsByClassName("section__persons-container");
    console.log('clientsData.length', clientsData.length)
    console.log('clients.length', clients.length)
    for (let i = 0; i < clientsData.length; i++) {
        const clientData = clientsData[i];
        clientData.children[1].innerText = clients[i].name;
        clientData.children[2].innerText = clients[i].position;
    }
}