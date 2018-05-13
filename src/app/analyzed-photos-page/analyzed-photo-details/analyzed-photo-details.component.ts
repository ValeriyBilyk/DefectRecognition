import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-analyzed-photo-details',
  templateUrl: './analyzed-photo-details.component.html',
  styleUrls: ['./analyzed-photo-details.component.scss']
})
export class AnalyzedPhotoDetailsComponent implements OnInit {

  public item;

  constructor(private route: ActivatedRoute, private photoService: PhotoService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.photoService.getPhotoById(id).subscribe(photos => this.item = photos[0]);
    });
  }

}
