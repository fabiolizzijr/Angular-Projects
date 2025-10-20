import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-articles',
  imports: [RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './articles.html',
  styleUrls: ['./articles.scss']
})
export class Articles {

}
