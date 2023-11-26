# MBA-CYPRESS-REAL-WORK-PROJECT

* Bu proje,Master Branch Academy tarafindan "Cypress Pratigi"  yapmak amaciyla olusturulmustur

       -> https://rahulshettyacademy.com/seleniumPractise/#/

* Yalnızca web sitesinin kullanıcı arayüzünü kapsar

* Javascript ile oluşturulmuştur

* Tasarım deseni olarak POM tercih edilmiştir.

### Nasıl kurulur? ###

* node.js'yi yükleyin
* npm install
* npm install cypress@13.0.0 --save-dev

### Cypress kontrol paneli nasıl açılır? ###

* npx cypress open

### Tüm testler nasıl çalıştırılır? ###

* npx cypress run

### Belirli bir test nasıl yapılır? ###

* npx cypress run --spec ./cypress/e2e/Test/HomePage.cy.js

### Dosya yapısı ###

|- MBA-CYPRESS-REAL-WORK-PROJECT
    |- cypress

        |- e2e ##  test dosyalarını ve page'leri tutar
           |- Page ## web sayfasında belirtilen yöntemleri tutar
           |- Test ## testleri tutar
        |- fixture ## isteğe bağlı json dosyalarını tutar
     
    |- screenshots ## başarısız testlerin ekran görüntülerini tutar
    |- support ##  özel komutları tutar
    |- videos ## başarısız testler için videolar tutar
    |- .gitignore ## işlenecek dosyaları yoksay
    |- cypress.config.js ## cypress yapılandırma dosyası
