const sentence = "hello there from lighthouse labs";
var result = "";
for(let i = 0;i < sentence.length;i++) {
  result += sentence[i];
  setTimeout(() => { console.log(result[i])}, i*1000);
}