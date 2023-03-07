async function jew() {

    d = new Date();
    hour = d.getHours() + ":" + d.getMinutes();
    console.log(hour);
    const Ipapi_resp = await fetch('https://ipapi.co/json/');
    const clientinfo = await Ipapi_resp.json();
    var he = await fetch("https://www.hebcal.com/converter?cfg=json&strict=1");
    var data = await he.json();
    var zmnihayom = await fetch(`https://www.hebcal.com/zmanim?cfg=json&city=${clientinfo}&lg=he`)
    var ZM = await zmnihayom.json()
    document.getElementById("hour").textContent = hour
    document.getElementById("date").textContent = data.hebrew
    document.getElementById("events").textContent = data.events.toString()
    document.getElementById("zmnihyom").textContent = ZM.times.toString()
    console.log(data.hebrew)
    console.log(data.events)

}
jew()