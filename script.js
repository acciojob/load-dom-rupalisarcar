//your JS code here. If required.
document.addEventListener("DOMContentLoaded",(event)=>{
	console.log("Dom Content");
	if (document.body.children.length === 0) {
        // Create a text node with the desired string
        const textNode = document.createTextNode("DOM load success");
        // Append the text node to the body
        document.body.appendChild(textNode);
    }
})