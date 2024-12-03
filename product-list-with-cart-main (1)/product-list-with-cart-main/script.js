const search = () => {
	const searchBox = document.getElementById("searchBox").value.toUpperCase();
	const productItems = document.querySelectorAll(".products-list");
	const product = document.querySelectorAll(".product-item");
	const productName = document.getElementsByTagName("h4");
	
	for( var i = 0; i <productName.length; i++){
			let match = product[i].getElementsByTagName("h4")[0];
			
			if (match){
					let textValue = match.textContent || match.innerHTML;
					
					if (textValue.toLocaleLowerCase().indexOf(searchBox.toLocaleLowerCase()) > -1) {
							product[i].style.display = "";
					}else {
							product[i].style.display = "none";
					}
			} 
	}
}
