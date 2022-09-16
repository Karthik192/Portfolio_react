function websiteVisits(res) {
    document.querySelector("#visits").textContent = res.value;
    console.log(res.value);
}