//let Foodcorse = prompt("มื้ออาหาร")
//let Food = prompt("รายการอาหาร")
let Number = prompt("อาหารที่รับประทานทั้งหมด")
//let a = prompt("ค่าแคลอรี่")
let sum = 0
for(var  i =1; i<= Number; i++){
    let item_price = prompt("ค่าแคลอรี่ของอาหารที่" + i)
    sum = sum + parseInt(item_price)
    document.getElementById("price-list").innerHTML += "รายการอาหาร" + i + ":" + item_price + "<center>" + "<br>"
    document.getElementById("result").innerHTML = "ค่าแคลอรี่ทั้งหมด" + ":" + sum 
}