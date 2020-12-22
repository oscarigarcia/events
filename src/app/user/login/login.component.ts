import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}
  userName: string | undefined;
  password!: string;

  ngOnInit(): void {}

  login(formValues: any): void {
    const pepe = this.authService.loginUser(
      formValues.userName,
      formValues.password
    );
    console.log(pepe);
  }
}
