//your JS code here. If required.
const inputs = document.querySelectorAll('code')

inputs.forEach((input,index)=>{
	input.addEventListener('input',(e)=>{
		const value = e.target.value;

		if(value.length>1){
			e.target.value = value.slice(0,1);
		}
		if(value.length===1&&index<inputs.length-1){
			input[index+1].focus();
		}
	})
   input.addEventListener("keydown",(e)=>{
	  if(e.key="Backspace" && input.value = "" && index>0){
		  input[index-1].focus();
		  input[index-1].value = "";
	  }
   })

	
})

