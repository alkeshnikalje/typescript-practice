var inp1 = document.getElementById("inp1");
var inp2 = document.getElementById("inp2");
var btn = document.querySelector("button");
function addd(num1, num2) {
    return num1 + num2;
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    var inp1val = Number(inp1.value);
    var inp2val = Number(inp2.value);
    console.log(addd(inp1val, inp2val));
});
