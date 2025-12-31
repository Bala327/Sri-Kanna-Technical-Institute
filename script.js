document.getElementById("applyForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("successMsg").innerText =
        "Application submitted successfully | விண்ணப்பம் வெற்றிகரமாக பதிவு செய்யப்பட்டது";
});
