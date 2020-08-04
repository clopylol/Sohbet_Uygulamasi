# Node.js ~ Sohbet Uygulaması
---
### Socket .io
 * **İstemci ve Sunucu arasında gerçek zamanlı iletişim sağlar.** 
### Express.js
- **Node.js tabanlı bir web uygulama sunucu çatısıdır.**
 
### Gereksinimler:
* [Node.js]
*  [Visual Studio Code], [Atom] vb. herhangi bir editör.
* Güncel [Socket.io] sürümü için bu bağlantıyı kullanabilirsiniz.

## Projenin Çalıştırılması:
```
>> nodemon index.js
```
### Proje Çıktısı:
---
![Socket](https://i.ibb.co/W5Z8LQp/Socket-io.gif)

## Projenin Oluşturulması
>Not: Bu tarz bir projeyi kendiniz oluşturmak isterseniz aşağıdaki adımları takip edebilirsiniz.

**1. Adım:  Package.json dosyasının oluşturulması**
```
>> npm init 
```

**2. Adım: Express.js ile sunucunun oluşturulması**
```
>> npm install express --save
```
> Not: Bu kurulumun doğru bir şekilde yapıldığını kontrol etmek için şuraya göz atabiliriz. **package.json** içerisinde **dependencies**'in altında "**express: Versiyon**" şeklinde oluşmalıdır.

**3.Adım: Socket.io'nun yüklenmesi**
```
>>npm install socket.io --save
```
>Not: Bir önceki adımda sağladığımız kontrol işlemini burada da sağlayabiliriz.

**4.Adım: NodeJS tabanlı uygulama geliştirirken dosyalardaki değişiklikleri algılayıp otomatik olarak sunucunun yeninden başlaması için "Nodemon" modülünü kullanacağız.**
```
 >> npm install -g nodemon
```
**5.Adım: Serverın oluşturulması**
index.js isimli bir dosya oluşturalım. (Farklı bir isimli dosya oluşturacaksanız, **package.json** içerisindeki **"main": "index.js"** kısmını oluşturduğunuz dosya adı ile değiştirmeyi unutmayın.)

**6.Adım: Önyüzün oluşturulması**
Ana klasör içerisine public isimli bir dosya oluşturduk. O dosya içerisinde de **index.html** ve **style.css** dosyalarını oluşturalım. Güncel socket.io linkini kaynak olarak index.html içerisine eklemeyi unutmayın.

>Daha detaylı açıklamalar yorum satırı olarak eklenmiştir.

   [Node.js]: <https://nodejs.org/en/>
   [Visual Studio Code]: <https://code.visualstudio.com/download>
   [Atom]: <https://atom.io>
   [Socket.io]: <https://cdnjs.com/libraries/socket.io>
 

