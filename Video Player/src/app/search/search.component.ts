import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  // tslint:disable-next-line:use-output-property-decorator

})
export class SearchComponent implements OnInit {
  q ;
  constructor(private router: Router ) { }

  ngOnInit() {
  }
  submitSearch(event, formData) {
    const query =  formData.value['q'];
    if (query) {
    this.router.navigate(['/search', {q: query}]);
    }
  }

}
