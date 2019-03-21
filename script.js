$("#result").hide()
$("#copy").hide()
$("#send").click(() => {
    $("#result").show()
    $("#copy").show()
    
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://155.138.236.165/api",
        "method": "POST",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
          "Postman-Token": "1152ebc4-72bd-4ea6-9f9a-e7d13e23454c"
        },
        "data": {
          "data": $("#data").val(),
          "lang": $("#lang").val() === "" ? 'py' : $("#lang").val()
        }
      }
      
      $.ajax(settings).done((response) => {
        $("#result").val(response.converted)
      }).fail((err) => {
          if (err.status == 500){
            $("#result").val("Hata kodu 500 lütfen AR-Ge Tim ile iletişime geçin.")
          }else {
            $("#result").val("Bir hata oluştu. Server şuan çalışmıyor olabilir.")
          }
        
      });
})

var copyText =  () => {
    var copyText = document.getElementById("result");
    copyText.select();
    document.execCommand("copy");
    $("#copy").text("Kopyalandi");
  }
