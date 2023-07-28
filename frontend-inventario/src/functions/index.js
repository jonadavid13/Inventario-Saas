import $ from "jquery";

export function obtener() {
    $.ajax({
        type: "POST",
        url: "https://petrifying-grant.000webhostapp.com/select_pozos.php",
        dataType: "json",
        beforeSend: function () {
          console.log("Esperando los datos del BACK");
        },
        success: function (resp) {
          console.log(resp);
          alert("Datos recibidos");
        },
        fail: function (jqXHR, textStatus, errorThown) {
          console.log(textStatus, errorThown);
        },
        error: function (jqXHR, textStatus, errorThown) {
          console.log(textStatus, errorThown);
        },
      });
}