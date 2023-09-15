import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';



@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {
  role: string | null = null;

  constructor(private authService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.role = this.authService.getRole();
  }

}
