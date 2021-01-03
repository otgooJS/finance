/*
//Дэлгэцтэй ажиллах контроллер
var uiController = (function () {})();

//Санхүүтэй ажиллах контроллер
var financeController = (function () {})();

//Программын холбогч контроллер
var appController = (function (uiController, financeController) {
  document.querySelector(".add__btn").addEventListener("click", function () {
    //console.log("clicked..."); //nuguu sumiig click hiiheer 'clicked' gj garch bna
    // 1.Оруулах өгөгдлийг дэлгэцээс олж авна.
    // 2.Олж авсан өгөгдлүүдээ Санхүүгийн контроллерт дамжуулж түүнд хадгална.
    // 3.Олж авсан өгөгдлүүдийг вэб дээрээ тохирох хэсэгт нь гаргана.
    // 4.Төслийг тооцоолно.
    // 5. Эцсийн үлдэгдэл тооцоог дэлгэцэнд гаргана.
  });
  //Заавал хулганаар дарж орлого, зарлагыг оруулахаас гадна ENTER дарж болно. Тиймээс Google дээр Javascript event mdn гэж хайх
  //Keyboard-ийн нэг ялгаа нь аль нэг сэгмент дээр биш нийт пэйж дээрээ код нь бичигддэг онцлогтой.
  document.addEventListener("keypress", function (event) {
    //console.log("Товч дарагдлаа");
    //console.log(event);
    //if (event.keyCode === 13) console.log("Enter дарсан байна.");
    //else console.log("Өөр товч дарсан байна: " + event.keyCode);
    if (event.keyCode === 13) console.log("Дэлгэцээс өгөгдлөө авах хэсэг.");
  });
})(uiController, financeController);

*/

//Дэлгэцтэй ажиллах контроллер
var uiController = (function () {})();

//Санхүүтэй ажиллах контроллер
var financeController = (function () {})();

//Программын холбогч контроллер
var appController = (function (uiController, financeController) {
  //Саяны key event үйлдэлүүлийг хийдэг 1 функцийг энд бичье!!
  var ctrlAddItem = function () {
    // 1.Оруулах өгөгдлийг дэлгэцээс олж авна.
    console.log("Дэлгэцээс өгөгдлөө авах хэсэг");
    // 2.Олж авсан өгөгдлүүдээ Санхүүгийн контроллерт дамжуулж түүнд хадгална.
    // 3.Олж авсан өгөгдлүүдийг вэб дээрээ тохирох хэсэгт нь гаргана.
    // 4.Төслийг тооцоолно.
    // 5. Эцсийн үлдэгдэл тооцоог дэлгэцэнд гаргана.
  };
  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });
  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
