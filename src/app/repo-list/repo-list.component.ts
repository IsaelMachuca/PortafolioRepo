import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {
  repos: any[] = [];
  username: string = 'nombre-de-usuario';

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getRepos(this.username).subscribe(
      (data) => {
        this.repos = data;
      },
      (error) => {
        console.error('Error fetching repos', error);
      }
    );
  }
}
