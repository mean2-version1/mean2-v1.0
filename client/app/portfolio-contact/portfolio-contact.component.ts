import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
declare var jQuery: any;

@Component({
  selector: 'app-portfolio-contact',
  templateUrl: './portfolio-contact.component.html',
  styleUrls: ['./portfolio-contact.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class PortfolioContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     jQuery(document).ready(function(){
       $("#contact-submit").click(function(){
       let name=jQuery("#name").val();
       let phone=jQuery("#phone").val();
       let email=jQuery("#email").val();
       let message=jQuery("#message").val();

       if(name !='' && phone != '' && email !='' && message !='') {
         $.ajax({
           url:"https://script.google.com/macros/s/AKfycbxoqX9NLO7GNc27sQIayKIqKoLFehgoDQYFSNh0uWsIm-hj1kQ/exec",
           method:"POST",
           data:{name:name,phone:phone,email:email,message:message}, 
           success:function(data){
             $("form").trigger("reset");
             alert("Thanks for dropping a line, I'll reach you soon.");
           }
         });
       }
       });
  });

}
}