import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from '@ngx-gallery/core';
import { routeAnimations } from '@app/core';
@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss'],
  animations: [routeAnimations]
})
export class PlacesComponent implements OnInit {
  imgPrefix: 'http://localhost:4200/assets/';
  images: GalleryItem[];
  imageData = placesData;
  constructor() {}

  ngOnInit() {
    this.images = this.imageData.map(item => {
      return new ImageItem({ src: item.srcUrl, thumb: item.previewUrl });
    });
  }
}

const placesData = [
  {
    avatarSrc: null,
    title: 'Senanque Abbey, Provence',
    subtitle: 'Summer 2018',
    srcUrl: '../../../assets/places/place_1.jpg',
    previewUrl: 'http://localhost:4200/assets/places/thumbnails/fullsizeoutput_109f_tn.jpg',
    googleMap: 'https://goo.gl/maps/zb873DgnLqz',
    wikipedia: 'https://en.wikipedia.org/wiki/S%C3%A9nanque_Abbey',
    caption: null,

  },
  {
    avatarSrc: null,
    title: 'Venasque, Provence',
    subtitle: 'Summer 2018',
    srcUrl: '../../../assets/places/place_2.jpg',
    previewUrl: 'http://localhost:4200/assets/places/thumbnails/fullsizeoutput_109f_tn.jpg',
    googleMap: 'https://goo.gl/maps/zb873DgnLqz',
    wikipedia: 'https://en.wikipedia.org/wiki/S%C3%A9nanque_Abbey',
    caption: null,
  },
  {
    avatarSrc: null,
    title: 'Gordes, Provence',
    subtitle: 'Summer 2018',
    srcUrl: '../../../assets/places/place_3.jpg',
    previewUrl: 'http://localhost:4200/assets/places/thumbnails/fullsizeoutput_109f_tn.jpg',
    googleMap: 'https://goo.gl/maps/zb873DgnLqz',
    wikipedia: 'https://en.wikipedia.org/wiki/S%C3%A9nanque_Abbey',
    caption: null,
  },
  {
    avatarSrc: null,
    title: 'Vaucluse Provence',
    subtitle: 'Summer 2018',
    srcUrl: '../../../assets/places/place_4.jpg',
    previewUrl: 'http://localhost:4200/assets/places/thumbnails/fullsizeoutput_109f_tn.jpg',
    googleMap: 'https://goo.gl/maps/zb873DgnLqz',
    wikipedia: 'https://en.wikipedia.org/wiki/S%C3%A9nanque_Abbey',
    caption: null,
  },
  {
    avatarSrc: null,
    title: 'Provence-Alpes-Cote DAzur, France',
    subtitle: 'Summer 2018',
    srcUrl: '../../../assets/places/place_5.jpg',
    previewUrl: 'http://localhost:4200/assets/places/thumbnails/fullsizeoutput_109f_tn.jpg',
    googleMap: 'https://goo.gl/maps/zb873DgnLqz',
    wikipedia: 'https://en.wikipedia.org/wiki/S%C3%A9nanque_Abbey',
    caption: null,
  },
  {
    avatarSrc: null,
    title: ' Provence',
    subtitle: 'Summer 2018',
    srcUrl: '../../../assets/places/place_6.jpg',
    previewUrl: 'http://localhost:4200/assets/places/thumbnails/fullsizeoutput_109f_tn.jpg',
    googleMap: 'https://goo.gl/maps/zb873DgnLqz',
    wikipedia: 'https://en.wikipedia.org/wiki/S%C3%A9nanque_Abbey',
    caption: null,
  },

];
