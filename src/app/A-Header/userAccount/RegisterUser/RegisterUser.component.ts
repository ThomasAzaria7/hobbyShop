import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import{auth} from 'firebase'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-RegisterUser',
  templateUrl: './RegisterUser.component.html',
  styleUrls: ['./RegisterUser.component.scss']
})
export class RegisterUserComponent implements OnInit {

  RegoForm = new FormGroup({
    name: new FormControl('', Validators.minLength(2)),
    // lastName: new FormControl('', Validators.minLength(2)),
    email: new FormControl('', Validators.email),
    confirmEmail: new FormControl('', Validators.email),
    password: new FormControl('',),
    confirmPassword: new FormControl('', Validators.minLength(2)),
  })

  constructor(private router:Router, private http:HttpClient) { }


  


  ngOnInit() {

  }

  signUpUser(){
    let password
    if(this.RegoForm.value.password == this.RegoForm.value.confirmPassword){
    password = this.RegoForm.value.password  
    }

    auth().createUserWithEmailAndPassword(this.RegoForm.value.email,password).then(

      
      success=>{
        auth().app.auth().currentUser.updateProfile({
          displayName: this.RegoForm.value.name,
          photoURL: "https://home.getvera.com/assets/base_defaultv4/img/user_new.png"

        })
        auth().currentUser.sendEmailVerification();
       this.send(this.RegoForm.value.email)
        // auth().currentUser.email
        console.log(success)
      this.router.navigate([''])
      }).catch(
      err=>console.log(err)
    )
    
  }



  
 send(email){

    let  mailOptions = {
        from: 'thomas.azaria7@gmail.com', // sender address
        to: email,  // list of receivers
        subject: 'Welcome to Hobby Jocky', // Subject line

        html:


        `

        <style>
        /* mobile phone */
        @media(max-width:500px){
          .container{
            width:100%
          }
        }
        /* tablets */
        @media(min-width:426px) and (max-width:768px){
          .container{
            width:75%
          }
        }
        /* laptops and beyonf */
        @media(min-width:769px){
          .container{
            width:50%
          }
        }
        
        </style>


        <div class="container">
    <h1>Welcome HobbyJokcey - The RC Hobby Club</h1>
    <hr>

    <div style="font-size: 18px; font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; padding: 20px;">
      <p>
          Hi {{name}},
      
          Thank you for registering with our club, we love having you here.
          you have lots of quality Rc adventures to chose from.
          at hobby Rc we believe at providing our members with adentures for life,
          and the best service possible. 
    
          if you have any issue on your journey, reach us at.
      </p>

      <div>
        <p>
          customer service <br>
          0404022335 <br>
          help@hobbyJocky

        </p>
      </div>
    </div>
</div>
        
        `
     
      };

  this.http.post('http://localhost:3000/shop/register',mailOptions).subscribe(
    (success)=>{
      console.log(success);
      
    },
    (err)=>{
      console.log(err);
      
    }
  )
}

}
