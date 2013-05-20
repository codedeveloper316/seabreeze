$(function() {  
     // When the checkin form is submitted, the following checks the value of the barcode
     // input. If the barcode has the value "b1239082" the bootstrap alert widget displays.
     // The alert hides when the close link is clicked.
     $("#checkin").submit(function() {
          if ($(".js-barcode").val() == "b1239082") {
               $(".js-alert").show(); 
               $(".js-close-alert").click(function() {
                  $(".js-alert").hide();
               });
          };
          return false;
     });
     // When the more details link is clicked, the bootstrap modal widget displays.
     // The modal closes when the close link or esc key are clicked.
     $(".js-open-alert-dialog").click(function() {
          $(".js-alert-dialog").modal({
               backdrop: "static"
          });
          $(".js-close-alert-dialog").click(function() {
               $(".js-alert-dialog").modal("hide");
               return false;
          });
          return false;
     });  
     // When the backdate checkbox is clicked, the following checks if the checkbox
     // is checked. The backdate input shows when checked and hides when not checked.
     $(".js-toggle-backdate").click(function() {
        if ( $(".js-toggle-backdate:checked").length > 0) {
            $(".js-backdate").show();
        } else {
            $(".js-backdate").hide();
        }
     });       
});