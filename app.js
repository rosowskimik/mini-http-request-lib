const http = new easyHTTP();

const data = {
	title: 'Test post',
	body: 'This is test post'
};

// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(posts);
// 	}
// })

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 	}
// });

// http.put('https://jsonplaceholder.typicode.com/posts/37', data, function(err, post) {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 	}
// });

// http.delete('https://jsonplaceholder.typicode.com/posts/37', function(err, response) {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(response);
// 	}
// });