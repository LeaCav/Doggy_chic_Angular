import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {
  contactForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.valid) {
      this.success = true;
      console.log('Formulaire envoyé avec succès ✅', this.contactForm.value);

      // Optionnel : reset du formulaire après une petite pause
      setTimeout(() => {
        this.contactForm.reset();
        this.submitted = false;
        this.success = false;
      }, 4000);
    }
  }

  // Accès simplifié aux champs
  get f() {
    return this.contactForm.controls;
  }
}
