function showText() {

    let inputText = prompt("Type in Text :");

   
    if (inputText.includes("FR") || (inputText.includes("AI") && inputText.includes("FR"))) {

        if (inputText.includes("Ai") || inputText.includes("aI")) {
            document.getElementById('result').innerHTML = "The message " + '"' + inputText + '"' + " is fake!";

        } else {
            document.getElementById('result').innerHTML = "The message " + '"' + inputText + '"' + " is legitimate!";
        }

    } else if (inputText.includes("AI") || inputText.includes("aI") || inputText.includes("Ai")) {
        document.getElementById('result').innerHTML = "The message " + '"' + inputText + '"' + " is fake!";

    } else {
        document.getElementById('result').innerHTML = "The message " + '"' + inputText + '"' + " is not yet encoded!";
    }
}