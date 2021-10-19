let plotData = [];

async function getapi(url) {
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    console.log(data.records)
    data.records.forEach(ele => {
        const newObj = {};

       newObj.x = Object.keys(ele).slice(3);
       newObj.y = Object.values(ele).slice(3);

        newObj.name = ele.products;
        newObj.type = "scatter";
        newObj.mode = 'lines+markers';

        plotData.push(newObj);
    });

    let layout = {
        title: data.title
      };
    
    Plotly.newPlot("myDiv", plotData, layout);
}

getapi("https://api.data.gov.in/resource/9f0f9f55-4691-401a-8bde-10a2ab57cbbe?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10");