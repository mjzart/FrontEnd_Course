const buttonLogout = document.querySelector('.logout')
buttonLogout.addEventListener('click', ()=>{
    localStorage.removeItem('connectId');
    localStorage.removeItem('access_token');
    window.location.href = 'index.html';    
})
document.getElementById('enter-chat').addEventListener('submit', function(e){
    e.preventDefault();

    localStorage.setItem('connectId', this.elements['chatId'].value)
    window.location.href = 'chat.html'
})
document.querySelectorAll('.creatChat')[0].addEventListener("click", ()=>{
    console.log('click');
    fetch('https://simple-chat-demo.herokuapp.com/chat', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}` 
        },
        
    })
    .then(res => {
           
        return res.json();
    })
    .then((data) => {
        localStorage.setItem('connectId', data.connectId)
        console.log(data.connectId);
        window.location.href = 'chat.html'
    })

})


fetch('https://simple-chat-demo.herokuapp.com/profile', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}` 
        },
        
    })
    .then(res => {
           
        return res.json();
    })
    .then((data) => {
        let massage = `Hello ${data.nickname}`;
        localStorage.setItem('nick', data.nickname);
        document.querySelectorAll('#nick')[0].innerHTML = massage;
        console.log(data.nickname);
    })




