console.log(localStorage.getItem('connectId'));
document.querySelectorAll('.chat-id')[0].innerHTML = `Chat id: ${localStorage.getItem('connectId')}`

const massagesBox = document.querySelectorAll('.chat-history')[0];

const socket = new WebSocket('wss://simple-chat-demo.herokuapp.com');

socket.addEventListener("open", ()=>{
    console.log('connection created');
    fetch(`https://simple-chat-demo.herokuapp.com/chat/${localStorage.getItem('connectId')}`, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    }
})
.then(res => res.json())
.then((data) => {
    data.forEach(element => {
        const message = buildMassageHtml(element.user.nickname, element.message)
        jQuery(massagesBox).append(message);
    });
    console.log(data);
    

})
    socket.send(
        JSON.stringify({
            event:"enter",
            data: {
                token: localStorage.getItem('access_token'),
                connectId: localStorage.getItem('connectId')
            }
        })
    )
})


socket.addEventListener('message', (res)=>{
    const data = JSON.parse(res.data);
    if (data.data.message) {
       const message = buildMassageHtml(localStorage.getItem('nick'), data.data.message)
    //     const message = data.data.message;
    jQuery(massagesBox).append(message);
    }
})


document.getElementById("massege-block").addEventListener("submit", function(e){
    e.preventDefault();

    socket.send(
        JSON.stringify({
            event:"message",
            data: {
                message: this.elements["message"].value,
                token: localStorage.getItem('access_token'),
                connectId: localStorage.getItem('connectId'),
            }
        })
    )
})

function buildMassageHtml(nick, massage) {
    const MassageTemplate = document.getElementById("filter-template").innerHTML;
    const compiled = _.template(MassageTemplate);
    return compiled({
        nick,
        massage,
    });
  }