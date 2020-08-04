//NodeModule içerisindeki express'e ait özll. kullanmak için express paketini express değişkenimize aktarlım.
var express = require('express');

//npm install socket.io dan sonra socketimize artık erişebiliriz.Soketi serverda kullanacağımız için server oluşturma kodunun altına yeni kodlar ekliyoruz.
var socket = require('socket.io');

//Server App'i oluşturalım.
var app = express();

app.use(express.static('public'));
//Web için public klasörü oluşturduk. Daha sonra app ile ilişkilendirelim.

//App'i dinlemek için bir tanede server oluşturalım.
//Serverın 4000.portu arasında bir socket oluşturalım.
var server = app.listen(4000, function(){
    console.log("4000.port dinleniyor...")
    //Serverın oluşup oluşmadığını console.log komutu ile bir kontrol edelim.
});

var io =socket(server);
io.on('connection', function(socket){
    console.log('Socket bağlantısı sağlandı. Socketin idsi:', socket.id);
    //Server dinlemesi.(Gönderilen veri burada yakalandı.)
    //Chat soketi kullanılarak alınan mesaji bağlantı yapan herkese gönderelim.
    socket.on('chat',function(data){
        //Alınan datayı tüm bağlantı yapanlara gönder.
        io.sockets.emit('chat', data);
    });

    socket.on('yaziyor',function(data){
          socket.broadcast.emit('yaziyor',data);
    });

    //Kendimiz dahil herkese göndermek için; "io.sockets.emit" (mesaj)
    //Kendimiz hariç herkese göndermek için;  "socket.broadcast.emit" kullandık. (yazıyor)

});