async function fetchData() {
    const res=await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
    const covidRecord=await res.json();
    document.getElementById("date").innerHTML=covidRecord.data[0].date;
    document.getElementById("areaName").innerHTML=covidRecord.data[0].areaName;
    document.getElementById("latestBy").innerHTML=covidRecord.data[0].latestBy;
    document.getElementById("deathNew").innerHTML=covidRecord.data[0].deathNew;
}
fetchData();