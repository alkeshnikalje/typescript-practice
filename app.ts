const inp2ele = document.getElementById("inp1") as HTMLInputElement;
const inp1ele = document.getElementById("inp2") as HTMLInputElement;
const btnele = document.querySelector("button");

function add(num1: number, num2: number) {
  return num1 + num2;
}

btn?.addEventListener("click", () => {
  const inp1val = Number(inp1ele.value);
  const inp2val = Number(inp2ele.value);
  console.log(add(inp1val, inp2val));
});
