const CARDURL = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';
const sendCard = (dataCard)=> fetch(CARDURL, {
    method: 'POST',
    body: JSON.stringify(dataCard),
    headers: {
        'content-type': 'application/json'
    },
})
    .then(response=>response.json());

export {sendCard};