//Socket.io ve Server arasındaki bağlantı işlemi
var socket = io.connect('http://localhost:4000');
//Client - Server ilişkisi

var mesaj = document.getElementById('mesaj');
var isim = document.getElementById('isim');
var btn = document.getElementById('gonder');
var output = document.getElementById('msg');
var feedback = document.getElementById('msg_writing');

//İsim ve Mesaj bilgisini servera göndereceğiz.
//Client ve Server arasında bir key oluşturulur. Karşı taraf bu keye göre verileri yakalar.

btn.addEventListener('click',function(){
//Veriyi karşı tarafa gönderelim. Serverda ise bunu yakalamaya çalışacağız .
    socket.emit('chat', {
        mesaj:mesaj.value,
        isim:isim.value
    });
    //Mesaj inputunu temizleyelim.
    mesaj.value='';
});

//Gönderdiğimiz mesajı bizde görebilelim.
socket.on('chat',function(data){
    output.innerHTML+= '<p><strong>'+data.isim+' : </strong>'+data.mesaj+'</p>';
    feedback.innerHTML = ''; //Mesaj gönderdikten sonra yazıyor yazmasın.
});

//yazıyor... bilgisini gösterlim.
mesaj.addEventListener('keypress',function(){
    socket.emit('yaziyor', isim.value);
});

socket.on('yaziyor',function(data){
        feedback.innerHTML= '<p><em>'+data+' yazıyor...</em></p>';
});

