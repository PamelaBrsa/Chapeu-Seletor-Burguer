import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  role: string | null = null

  constructor(private authService: LoginService) {}

  ngOnInit(): void {
    this.role = this.authService.getRole();
  }
}


