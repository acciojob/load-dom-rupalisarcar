//your JS code here. If required.
document.addEventListener("DOMContentLoaded",(event)=>{
	// console.log("Dom Content");
	// const divText = document.createElement("div");
	// divText.textContent = "DOM load success";
	// document.body.appendChild(divText)

	 while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild);
    }
    
    // Create a text node with the desired string
    const textNode = document.createTextNode("DOM load success");
    // Append the text node to the body
    document.body.appendChild(textNode);
})