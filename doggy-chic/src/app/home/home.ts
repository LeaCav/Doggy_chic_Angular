import { Component } from '@angular/core';
import { Contact } from "../pages/contact/contact";
import { Appointment } from "../pages/appointment/appointment";
import { Mosaic } from "../pages/mosaic/mosaic";

@Component({
  selector: 'app-home',
  imports: [Contact, Appointment, Mosaic],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
