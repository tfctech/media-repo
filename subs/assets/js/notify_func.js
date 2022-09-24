 $(function() {
     setTimeout(function() {
         $.notify({
             // options
             icon: '',
             title: "<a href=\"subs/policy.html\" target=\"_blank\"><h4>User Terms Of Use</h4>",
             message: "<figure><img src=\"assets/img/others/policy_2.png\"></figure><p>Kindly read through the terms of service before using the Al Hudaah Streaming site.</a> "
         }, {
             // settings
             icon_type: 'image',
             type: 'info',
             delay: 900,
             timer: 3000,
             z_index: 9999,
             showProgressbar: false,
             placement: {
                 from: "bottom",
                 align: "right"
             },
             animate: {
                 enter: 'animated bounceInUp',
                 exit: 'animated bounceOutDown'
             },
         });
     }, 5000); // change the start delay
 });