//replacing text in a string 
function replaceJSwithTS(sentence) {
    return sentence.replace(/javascript/g, "TypeScript");
}
console.log(replaceJSwithTS("\"I love javascript and javascript is very useful\""));
