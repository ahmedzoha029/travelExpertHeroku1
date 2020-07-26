const navbar = document.querySelector('.icon');
const mytopnav = document.querySelector('#myTopnav');
const email = document.querySelector('#email');
const fname = document.querySelector('#fname');
const pwd = document.querySelector('#pwd');
const cpwd = document.querySelector('#cpwd');
const enter = document.querySelector('#submit');
const img = document.querySelector('#destinations');
// const gallery = document.querySelector('.gallery');
const footyear = document.querySelector('#year');
//fetch('http://localhost:3000/api/getYear')
fetch('http://zoha-app1.herokuapp.com/api/getYear')
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
		footyear.innerText = `Year = ${data.year}`;
	});

// ******* Image Slider********
// setInterval(slider, 5000);

// function slider() {
// 	let x = Math.floor(Math.random() * images.length);
// 	if (x < images.length) {
// 		x = x + 1;
// 	} else {
// 		x = 1;
// 	}
// img1.innerHTML = '<img src=../img/' + images[x - 1].path + ' >';
// img1.title = images[x - 1].title;
// img2.innerHTML = '<img src=../img/' + images1[x - 1].path + ' >';
// img2.title = images[x - 1].title;
// img3.innerHTML = '<img src=../img/' + images2[x - 1].path + ' >';
// img3.title = images[x - 1].title;
// img4.innerHTML = '<img src=../img/' + images3[x - 1].path + ' >';
// 	// img4.title = images[x - 1].title;
// // };
// setInterval(slider, 5000);
// function slider1(){
// 	fetch('http://localhost:3000/api/destinations')
// 	.then(function(response) {
// 		return response.json();
// 	})
// 		.then(function(data) {

// 		const imgList = data;
// 		let imgTemplate = '';
// 		imgList.forEach(function(item){

// 		imgTemplate +=
// 			`<figure>
// 			<a href="${item.id}">
// 			<img src="https://picsum.photos/id/${item.id}/200" alt="${item.title}">
// 			</a>
// 			<figcaption>Hello ${item.title}!</figcaption>
// 			</figure>`;
// 		});

// 		// Add HTML img string to gallery container
// 		img1.innerHTML = imgTemplate;
// 		// img2.innerHTML = imgTemplate;
// 	});
//  }

// setInterval(slider, 5000);
// function slider (){
// fetch('http://localhost:3000/api/destinations')
//   	.then((response)=>{
// 	  if(!response.ok) throw new Error('Data not found');
// 	  return response.json();
//   })
//     .then((data)=>{
// 		let picNumber= Math.floor(Math.random()*data.length)
// 		let imageList=data;
// 		let imgTemplate1='';

// 		imgTemplate1 +=
// 		`<figure>
// 		<h4 id="destinations" style="text-align: center;width:600px;">Destination</h4>
//         <a href="${data[picNumber].id}">
//           <img src="https://picsum.photos/id/${data[picNumber].id}/600/400" alt="${data[picNumber].id}">
//         </a>
//         <figcaption>${data[picNumber].title}!</figcaption>
// 		</figure>`;
// 		img.innerHTML = imgTemplate1;
// 		// img2.innerHTML = imgTemplate1;
// 		// img3.innerHTML = imgTemplate1;
// 		// img4.innerHTML = imgTemplate1;

// 	})
// }
fetch('http://zoha-app1.herokuapp.com/api/destinations')
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		const imgList = data;
		let imgTemplate = '';
		imgList.forEach(function(item) {
			imgTemplate += `<figure>
				<a href="${item.id}">
				<img src="https://picsum.photos/id/${item.id}/200" alt="${item.title}">
				</a>
				<figcaption> ${item.title}!</figcaption>
				</figure>`;
		});
		console.log(imgTemplate);
		// Add HTML img string to gallery container
		img.innerHTML = imgTemplate;
		// img2.innerHTML = imgTemplate;
	});
// // Fetch for single page
// 	fetch('http://localhost:3000/:id')
// 		.then(function(response) {
// 			return response.json();
// 			})
// 			.then(function(data) {
// 				const imgList1 = data;
// 				console.log(imgList1);
// 				let imgTemplate1 = '';
// 				imgTemplate1 =
// 					`<figure>
// 					<a href="${item1.id}">
// 					<img src="https://picsum.photos/id/${item1.id}/600" alt="${item1.title}">
// 					</a>
// 					<figcaption>Hello ${item1.title}!</figcaption>
// 					</figure>`;
// 				console.log(imgTemplate1);
// 				// Add HTML img string to gallery container
// 				gallery.innerHTML = imgTemplate1;
// 				// img2.innerHTML = imgTemplate;
// 			});

//////
// fetch('http://localhost:3000/api/destinations')
//   	.then((response)=>{
// 	  if(!response.ok) throw new Error('Data not found');
// 	  return response.json();
//   })
//     .then((data)=>{
// 		let imageList=data;
// 		let imgTemplate1='';
// 		for (let item of data){

// 			if (item.id==id){
// 			imgTemplate1 =
// 				`<figure>
// 				<h4 id="destinations" style="text-align: center;width:600px;">Destination</h4>
// 				<a href="${item.id}">
// 				<img src="https://picsum.photos/id/${item.id}/600/400" alt="${item.id}">
// 				</a>
// 				<figcaption>${item.title}!</figcaption>
// 				</figure>`;
// 				console.log(imgTemplate1);
// 				gallery.innerHTML = imgTemplate1;
//      		}
// 		}
// 	})
// 		// imgTemplate1 +=
// `<figure>
// <h4 id="destinations" style="text-align: center;width:600px;">Destination</h4>
// <a href="${data[picNumber].id}">
//   <img src="https://picsum.photos/id/${data[picNumber].id}/600/400" alt="${data[picNumber].id}">
// </a>
// <figcaption>${data[picNumber].title}!</figcaption>
// </figure>`;
// img.innerHTML = imgTemplate1;
// img2.innerHTML = imgTemplate1;
// img3.innerHTML = imgTemplate1;
// img4.innerHTML = imgTemplate1;

// .catch((err)=>console.log('some thing went wrong'));

// Add HTML img string to gallery container

// * *********** Hamburger ********** *
navbar.addEventListener('click', function() {
	if (mytopnav.className === 'topnav') {
		mytopnav.className += ' responsive';
	} else {
		mytopnav.className = 'topnav';
	}
});

//  ****** Password confirmation Validation *****

enter.addEventListener('click', () => {
	if (pwd.value != cpwd.value) {
		alert('password does not match');
		window.open('../html/registration.html', '_blank');
	} else window.open('../index.html', '_blank');
});
