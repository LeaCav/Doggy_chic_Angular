import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mosaic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mosaic.html',
  styleUrls: ['./mosaic.scss']
})
export class Mosaic {
  imageSets = [
    [
      { url: 'img/doggy3.jpg' },
      { url: 'img/toilette3.jpg' },
      { url: 'img/doggy7.jpg' },
      { url: 'img/toilette2.jpg' },
      { url: 'img/toilette1.jpg' },
      { url: 'img/doggy4.jpg' }
    ],
    [
      { url: 'img/doggy1.jpg' },
      { url: 'img/doggy9.jpg' },
      { url: 'img/doggy6.jpg' },
      { url: 'img/doggy2.jpg' },
      { url: 'img/doggy5.jpg' },
      { url: 'img/toilette4.jpg' }
    ]
  ];
}
