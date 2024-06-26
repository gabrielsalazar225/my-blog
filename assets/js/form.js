const userName = document.getElementById('userBox');
const title = document.getElementById('titleBox');
const content = document.getElementById('contentBox');
const submit = document.getElementById('submitButton');


function saveBlog() {

  const blogList = JSON.parse(localStorage.getItem('blogList'));

    const post = { 
    userName: userName.value.trim(),
    title: title.value.trim(),
    content: content.value.trim(),
    };
    if(blogList === null){
        localStorage.setItem('blogList', JSON.stringify([post]));
    } else {
        blogList.push(post)
        localStorage.setItem('blogList', JSON.stringify(blogList));
   }
}

    document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myForm').addEventListener

    document.getElementById('myForm').addEventListener
    ('submit', function(event) {
        event.preventDefault();
    if(validateForm()) {
            saveBlog();
            window.location.href = 'blog.html';
        }
    });
    });

function validateForm() {
    const userName = document.getElementById('userBox').value.trim();
    const title = document.getElementById('titleBox').value.trim();
    const content = document.getElementById('contentBox').value.trim(); 
    if( userName === '') {
        alert('Please Enter Your username');
        return false;
    }

    if( title === '') {
        alert('Please Enter Your title');
        return false;
    }

    if( content === '') {
        alert('Please Enter Your content');
        return false;
    }
    return true;
}