//your JS code here. If required.
function generateOutput(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("Hello, world!")
		},1000)
	})
}

generateOutput().then((data)=>{
	const element=document.getElementById("output");
	element.innerText=data;
})