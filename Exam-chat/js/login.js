document.querySelectorAll('#form')[0].addEventListener('submit', function (e){
    e.preventDefault();
    const nickname = document.querySelectorAll('#nicknameInput')[0].value;
    const password = document.querySelectorAll('#passwordInput')[0].value;
    console.log(nickname);
    fetch('https://simple-chat-demo.herokuapp.com/auth/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                nickname: `${nickname}`, 
                password: `${password}`
            }
        )
    })
    .then(res => {
        if(res.ok) {
            
            window.location.href = 'main-menu.html'

        }
    
        return res.json();
    })
    .then((data) => {
        localStorage.setItem('access_token', data.access_token)
        console.log(data);
    })
})