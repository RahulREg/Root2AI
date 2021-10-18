

let dataset = {};

const url1 = "https://api.data.gov.in/resource/9f0f9f55-4691-401a-8bde-10a2ab57cbbe?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10";

// fetch(url)
// .then(res => res.json())
// .then(data => dataset = data)

async function getapi (url) {
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    console.log(data.records)
}

getapi(url1);
