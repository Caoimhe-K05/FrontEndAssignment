import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLinkWithHref} from '@angular/router';//imported
import { RouterLink } from '@angular/router';//imported
import { MovieService } from '../Services/movie.service';
import { IonCardHeader, IonCardTitle, IonCardSubtitle, IonCard, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
//imported

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
  standalone: true,
  imports: [ RouterLinkWithHref, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCard, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MoviePage implements OnInit {
  movies:any=[];//array to store movies
  constructor(private movieService:MovieService) { }//inject custom movieservice to retreive data

  ngOnInit() {
    this.movieService.GetMovieData().subscribe(//call the movie service method
      (data)=>{
        this.movies = data.Search;//assigning data to array
      }
    );
  }

}
