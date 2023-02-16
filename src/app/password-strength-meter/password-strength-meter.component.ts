import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength-meter',
  templateUrl: './password-strength-meter.component.html',
  styleUrls: ['./password-strength-meter.component.css'],
})
export class PasswordStrengthMeterComponent {
  password = '';
  passwordStrength = '';
  showPassword = false;

  updateStrength() {
    if (this.password === '') {
      this.passwordStrength = 'empty';
    } else if (this.password.length < 8) {
      this.passwordStrength = 'short';
    } else if (
      /^[a-zA-Z]+$/.test(this.password) ||
      /^[0-9]+$/.test(this.password) ||
      /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(this.password)
    ) {
      this.passwordStrength = 'weak';
    } else if (
      /^[a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(this.password) ||
      /^[a-zA-Z0-9]+$/.test(this.password) ||
      /^[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(this.password)
    ) {
      this.passwordStrength = 'medium';
    } else if (
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[0-9]).+$/.test(
        this.password
      )
    ) {
      this.passwordStrength = 'strong';
    }
  }
}
