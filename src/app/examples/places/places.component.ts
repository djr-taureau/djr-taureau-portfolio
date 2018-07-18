import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from '@ngx-gallery/core';

@Component({
  selector: 'app-places',
  template: `
  <div class="basic-container">
	<h2>Provence 2018</h2>
	<gallery id="basic-test" [items]="images" [loop]="true" [dots]="true"></gallery>
</div>
  `,
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  imgPrefix: 'http://localhost:4200/assets/';
  images: GalleryItem[];
  imageData = data;
  constructor() {}

  ngOnInit() {
    this.images = this.imageData.map(item => {
      return new ImageItem({ src: item.srcUrl, thumb: item.previewUrl });
    });
  }
}

const data = [
  {
    srcUrl: 'http://localhost:4200/assets/places/fullsizeoutput_109f.jpeg',
    previewUrl: 'http://localhost:4200/assets/places/thumbnails/fullsizeoutput_109f_tn.jpg'
  },
  {
    srcUrl: 'http://localhost:4200/assets/places/fullsizeoutput_10b2.jpeg',
    previewUrl: 'http://localhost:4200/assets/places/thumbnails/fullsizeoutput_10b2_tn.jpg'
  },
  {
    srcUrl: 'http://localhost:4200/assets/places/fullsizeoutput_10ba.jpeg',
    previewUrl: 'http://localhost:4200/assets/places/thumbnails/fullsizeoutput_10ba_tn.jpg'
  },
  {
    srcUrl: 'http://localhost:4200/assets/places/',
    previewUrl: 'http://localhost:4200/assets/places/fullsizeoutput_10c7.jpeg'
  },
  {
    srcUrl: 'http://localhost:4200/assets/places/fullsizeoutput_11da.jpeg',
    previewUrl: 'http://localhost:4200/assets/places/thumbnails/fullsizeoutput_11da_tn.jpg'
  },
  {
    srcUrl: 'http://localhost:4200/assets/places/fullsizeoutput_109f.jpeg',
    previewUrl: 'http://localhost:4200/assets/places/thumbnails/fullsizeoutput_109f_tn.jpg'
  },
  {
    srcUrl: 'http://localhost:4200/assets/places/fullsizeoutput_11d2.jpeg',
    previewUrl: 'http://localhost:4200/assets/places/thumbnails/fullsizeoutput_11d2_tn.jpg'
  },
  {
    srcUrl: 'http://localhost:4200/assets/places/fullsizeoutput_1210.jpeg',
    previewUrl: 'http://localhost:4200/assets/places/fullsizeoutput_1210.jpeg'
  }
];
