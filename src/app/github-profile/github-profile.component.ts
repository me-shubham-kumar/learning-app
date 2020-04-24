import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    //use this when you are nevigating to other component
    let link = this.route.snapshot.paramMap.get("link");
    console.log(link);

    //use this if you want don't want to nevigate to other component
    //so whenever there will be change in link, here you have subscribed
    // so you will get the change.

    this.route.paramMap
    .subscribe(params => {
      //console.log(params);
      let link = params.get('link');
      console.log(link);
    });

    // this is just in case you want to navigate to some page with some query param
    // submit(){
    //   this.router.navigate(['followers'],{
    //     queryParams:{page:1,order:'newest'}
    //   })
    // }

  }

}
