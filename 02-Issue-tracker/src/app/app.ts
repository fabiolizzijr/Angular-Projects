import { Component, signal } from '@angular/core';
import { ClarityModule } from "@clr/angular";
import { Header } from './shared/header/header';
import { Menus } from './shared/menus/menus';
import { Footer } from './shared/footer/footer';
import { IssueDashboard } from './pages/issue-dashboard/issue-dashboard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClarityModule, Header, Menus, Footer, IssueDashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('02-Issue-tracker');
}
