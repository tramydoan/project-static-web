$(function() {
	//Gọi header.html, footer.html, menu.html
	$('#header').load('header.html');
	$('#footer').load('footer.html');
});

$(function() {
	$.getJSON('js/db.json', function(data) {
		data.sale.forEach( function(item, index) {
			$('#sale').append(`
				<div id="sale-section">
				<div class="sale-img">
				<a href="details.html"><img id="sale-img" src="${item.image}"></a>
				<p class="sale-tag">UP TO ${item.sale} OFF</p>
				</div>
				<div class="sale-info">
				<a href="details.html"><p class="product-name">${item.name}</p></a>
				<p>${item.price}</p>
				</div>
				</div>
				`);
		});
		data.new.forEach( function(item, index) {
			$('#new').append(`
				<div id="new-section">
				<div class="new-img">
				<img src="${item.image}">
				</div>
				<div class="info">
				<a href="details.html"><p class="product-name">${item.name}</p></a>
				<p>${item.price}</p>
				</div>
				</div>
				`);
		});


		data.popular.forEach( function(item, index) {
			$('#popular').append(`
				<div id="popular-section">
				<div class="popular-img">
				<img src="${item.image}">
				</div>
				<div class="info">
				<a href="details.html"><p class="product-name">${item.name}</p></a>
				<p>${item.price}</p>
				</div>
				</div>
				`);
		});

		data.newarivals.forEach( function(item, index) {
			$('#newarivals-item').append(`
				<div id="newarivals-section">
				<div class="newarivals-img">
				<img src="${item.image}">
				</div>
				<div class="info">
				<a href="details.html"><p class="product-name">${item.name}</p></a>
				<p>${item.price}</p>
				</div>
				</div>
				`);
		});


	})
});

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}
