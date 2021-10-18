
let plotData = [];

async function getapi(url) {
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    console.log(data.records)
    data.records.forEach(ele => {
        const newObj = {};

        newObj.x = [
            "2010_11",
            "2011_12",
            "2012_13",
            "2013_14",
            "2014_15",
            "2015_16",
            "2016_17",
            "2017_18",
            "2018_19",
          ];
        newObj.y = [];
        newObj.name = ele.products;
        newObj.type = "scatter";
        newObj.mode = 'lines+markers'

        newObj.y.push(ele._2010_11_);
        newObj.y.push(ele._2011_12_);
        newObj.y.push(ele._2012_13_);
        newObj.y.push(ele._2013_14_);
        newObj.y.push(ele._2014_15_);
        newObj.y.push(ele._2015_16_);
        newObj.y.push(ele._2016_17_);
        newObj.y.push(ele._2017_18_);
        newObj.y.push(ele._2018_19_);

        plotData.push(newObj);
    });

    let layout = {
        title: data.title
      };
    
    Plotly.newPlot("myDiv", plotData, layout);
}

getapi("https://api.data.gov.in/resource/9f0f9f55-4691-401a-8bde-10a2ab57cbbe?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10");