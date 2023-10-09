import { Injectable, NgZone } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, sendEmailVerification, User, FacebookAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  UserData: any;

  constructor(private auth: AngularFireAuth, private router: Router, public ngZone: NgZone) {
    this.auth.authState.subscribe(user => {
      if (user) {
        this.UserData = user;
        localStorage.setItem('user', JSON.stringify(this.UserData));
        JSON.parse(localStorage.getItem('user')!);
      }else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
      
    })
  }

  //get User
  //get Authenticated user from firebase
  getAuthFire() {
    return this.auth.currentUser;
  }


  getAuthLocal() {
    const token = localStorage.getItem('user')
    const user = JSON.parse(token as string);
    return user;
  }


  //Check wither User Is looged in or not
  get isLoggedIn(): boolean {
    const token = localStorage.getItem('user')
    const user = JSON.parse(token as string);
    return user !== null ? true : false;
  }

  Register(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email,password).then(res => {
     // this.SendVerificationMail();
      this.router.navigate(['/auth']);
      localStorage.setItem('user', JSON.stringify(res.user));
      alert("Registation Successfull")
    }).catch(error => {
       window.alert(error.message);
    })
  }

  Login(email: string, password: string) {
   return this.auth.signInWithEmailAndPassword(email,password).then(res => {      
      this.router.navigate(['/admin']);
      alert("Successfull Login")
    }).catch( error =>{
      window.alert(error.message)
    })
  }

  Logout() {
    return this.auth.signOut().then( res => {
      localStorage.removeItem('user');
      this.router.navigate(['auth']);
    })


  }

  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['admin']);
    }).then( res => {
      alert("Google Login Successfull")
    }).catch(error => {
      alert(error.message)
    })
  }
  AuthLogin(provider: any) {
    return this.auth.signInWithPopup(provider).then((result) => {
        this.router.navigate(['admin']);
       //  this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }


  ForgotPassword(passwordResetEmail: string) {
    return this.auth.sendPasswordResetEmail(passwordResetEmail).then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error);
      });
  }
  


  //Login with Facebook
  FacebookAuth() {
    return this.AuthLogin(new FacebookAuthProvider()).then( res => {
      alert("Facebook Login Successfull")
    }).catch(error => {
      alert(error.message)
    })
  }

  SendVerificationMail() {
    return this.auth.currentUser.then((u: any) => u.sendEmailVerification()).then(() => {
        this.router.navigate(['verify-email']);
      });
  }
}
