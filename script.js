// script.js

document.getElementById('knowMoreButton').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.container').style.display = 'none';
    document.getElementById('chatContainer').style.display = 'flex';
    window.scrollTo(0, document.body.scrollHeight);
});
