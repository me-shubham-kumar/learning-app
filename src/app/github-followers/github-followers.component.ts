import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // //let link = this.route.paramMap.subscribe(); or
    // let link = this.route.snapshot.paramMap.get('link');

    // //this.route.queryParamMap.subscribe(); or

    // let page = this.route.snapshot.queryParamMap.get('page');

    // Subscription to multiple Observables

    //   combineLatest([
    //   this.route.paramMap,
    //   this.route.queryParamMap
    // ]).subscribe(combined => {
    //   let id = combined[0].get('id');// in case you have any, here we don't have
    //   let page = combined[1].get('page');

    //   // this.service.getAll({id:id,page:page})
    //   // .subscribe(followers => this.followers = followers);
    // });

    //In above we have subscribe in another subscribe which is the pattern in so many 
    //real world application but how to write it in good manner, good practice.

    // combineLatest([
    //   this.route.paramMap,
    //   this.route.queryParamMap
    // ])
    // .switchMap(combined=>{
    //   let id = combined[0].get('id');
    //   let page = combined[1].get('page');

    //   return this.service.getAll();
    // })
    // .subscribe(followers => this.followers = followers);




  }

  websites = [
    {name:'Google',link:'www.google.com'},
    {name:'Facebook',link:'www.facebook.com'},
    {name:'YouTube',link:'www.youtube.com'}
  ];

}
