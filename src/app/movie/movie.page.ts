import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLinkWithHref} from '@angular/router';
import { RouterLink } from '@angular/router';
import { MovieService } from '../Services/movie.service';
import { IonCardHeader, IonCardTitle, IonCardSubtitle, IonCard, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
  standalone: true,
  imports: [ RouterLinkWithHref, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCard, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MoviePage implements OnInit {
  movies:any=[];
  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.movieService.GetMovieData().subscribe(
      (data)=>{
        this.movies = data.Search;
      }
    );
  }

}
