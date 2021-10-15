import { Component, OnInit } from '@angular/core';
import { LoaderServiceService } from 'src/app/core/services/loader/loader-service.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(public loaderService: LoaderServiceService) { }

  ngOnInit(): void { }

}
