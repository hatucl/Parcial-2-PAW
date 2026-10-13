import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  imports: [RouterLink],
  templateUrl: './registrarse.html',
  styleUrl: './registrarse.css',
})
export class Registrarse {
  readonly submitted = signal(false);

  submit(event: SubmitEvent): void {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    if (form.reportValidity()) this.submitted.set(true);
  }
}
