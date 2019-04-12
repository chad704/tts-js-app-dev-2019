var button1 = document.getElementById('part1');
button1.addEventListener("click", function(){
    $.get('http://jsonplaceholder.typicode.com/posts', function (allPosts) {
        console.log(allPosts);
    
});
});

var button2 = document.getElementById('part2');
button2.addEventListener("click", function(){
    $.get('http://jsonplaceholder.typicode.com/posts/10', function (posts10) {
        console.log(posts10);
    
});
});

var button3 = document.getElementById('part3');
button3.addEventListener("click", function(){
    $.get('http://jsonplaceholder.typicode.com/comments?postId=12', function (post12Comments) {
        console.log(post12Comments);
    
});
});

var button4 = document.getElementById('part4');
button4.addEventListener("click", function(){
    $.get('http://jsonplaceholder.typicode.com/posts?userId=12', function (allPosts) {
        console.log(allPosts);
    
});
});

var button5 = document.getElementById('part5');
button5.addEventListener("click", function(){
    $.post('http://jsonplaceholder.typicode.com/posts', function (newPost) {
        console.log(newPost);
})
})

var button6 = document.getElementById('part6');
button6.addEventListener("click", function(){
    $.ajax({
        method: 'PUT',
        url: 'http://jsonplaceholder.typicode.com/posts/12',
        complete: function(response){
           console.log(JSON.stringify(response));
        }
    })
})

var button7 = document.getElementById('part7');
button7.addEventListener("click", function(){
    $.post({
        method: 'PUT',
        //completed: false,
        url: 'http://jsonplaceholder.typicode.com/posts/12',
        title: 'New Title',
        complete: function(response){
           console.log(JSON.stringify(response));
        }
})
})
