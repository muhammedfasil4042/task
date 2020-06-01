import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  arrProfile =[
    {url:'../../assets/images/4.png',intPk :1,strName:'john',
  arrUserPosts:[{
    strTitle:'Adding Fancies',
    strImageUrl:'../../assets/images/4.png',
    strDescription:"Instead, we’ll just adjust the concept of “speeding up”. If we set two slideshows on top of each other, each one running at different speeds, then hide/show the top-most faster-running on on hover, we can get a pretty decent “speeding up” effect. We’ll use transitions to make the transition smoother."
  },
  {
    strTitle:'NOTEs',
    strImageUrl:'../../assets/images/note.png',
    strDescription:"InsThis trick specifically increases the performance (that you normally wouldn’t get) out of 2D transforms and opacity changes. If we weren’t changing over to using translateX, we wouldn’t see any benefit"
  }]},
    {url:'../../assets/images/2.jpeg',intPk :2,strName:'Deo'
    ,
    arrUserPosts:[{
      strTitle:'Second',
      strImageUrl:'../../assets/images/2.jpeg',
      strDescription:"Instead, we’ll just adjust the concept of “speeding up”. If we set two slideshows on top of each other, each one running at different speeds, then hide/show the top-most faster-running on on hover, we can get a pretty decent “speeding up” effect. We’ll use transitions to make the transition smoother."
    },
    {
      strTitle:'Posts',
      strImageUrl:'../../assets/images/note2.jpg',
      strDescription:"InsThis trick specifically increases the performance (that you normally wouldn’t get) out of 2D transforms and opacity changes. If we weren’t changing over to using translateX, we wouldn’t see any benefit"
    }]},
    {url:'../../assets/images/3.jpeg',intPk :3,strName:'Micle'
    ,
    arrUserPosts:[{
      strTitle:'Third One',
      strImageUrl:'../../assets/images/3.jpeg',
      strDescription:"Instead, we’ll just adjust the concept of “speeding up”. If we set two slideshows on top of each other, each one running at different speeds, then hide/show the top-most faster-running on on hover, we can get a pretty decent “speeding up” effect. We’ll use transitions to make the transition smoother."
    }]},
    {url:'../../assets/images/4.png',intPk :4,strName:'Jeff',
    arrUserPosts:[{
      strTitle:'Post 4',
      strImageUrl:'../../assets/images/4.png',
      strDescription:"Instead, we’ll just adjust the concept of “speeding up”. If we set two slideshows on top of each other, each one running at different speeds, then hide/show the top-most faster-running on on hover, we can get a pretty decent “speeding up” effect. We’ll use transitions to make the transition smoother."
    }]},
    {url:'../../assets/images/4.png',intPk :5,strName:'Mic',
    arrUserPosts:[{
      strTitle:'Post 5',
      strImageUrl:'../../assets/images/4.png',
      strDescription:"Instead, we’ll just adjust the concept of “speeding up”. If we set two slideshows on top of each other, each one running at different speeds, then hide/show the top-most faster-running on on hover, we can get a pretty decent “speeding up” effect. We’ll use transitions to make the transition smoother."
    }]},
{url:'../../assets/images/2.jpeg',intPk :6,strName:'Alberto',
arrUserPosts:[{
  strTitle:'Post 6',
  strImageUrl:'../../assets/images/2.jpeg',
  strDescription:"Instead, we’ll just adjust the concept of “speeding up”. If we set two slideshows on top of each other, each one running at different speeds, then hide/show the top-most faster-running on on hover, we can get a pretty decent “speeding up” effect. We’ll use transitions to make the transition smoother."
}]},
{url:'../../assets/images/3.jpeg',intPk :7,strName:'johfranclen',
arrUserPosts:[{
  strTitle:'Post 7',
  strImageUrl:'../../assets/images/3.jpeg',
  strDescription:"Instead, we’ll just adjust the concept of “speeding up”. If we set two slideshows on top of each other, each one running at different speeds, then hide/show the top-most faster-running on on hover, we can get a pretty decent “speeding up” effect. We’ll use transitions to make the transition smoother."
}]},
{url:'../../assets/images/4.png',intPk :8,strName:'hepo',
arrUserPosts:[{
  strTitle:'Post 8',
  strImageUrl:'../../assets/images//4.png',
  strDescription:"Instead, we’ll just adjust the concept of “speeding up”. If we set two slideshows on top of each other, each one running at different speeds, then hide/show the top-most faster-running on on hover, we can get a pretty decent “speeding up” effect. We’ll use transitions to make the transition smoother."
}]},
{url:'../../assets/images/4.png',intPk :9,strName:'fund',
arrUserPosts:[{
  strTitle:'Post 9',
  strImageUrl:'../../assets/images/4.png',
  strDescription:"Instead, we’ll just adjust the concept of “speeding up”. If we set two slideshows on top of each other, each one running at different speeds, then hide/show the top-most faster-running on on hover, we can get a pretty decent “speeding up” effect. We’ll use transitions to make the transition smoother."
},
{
  strTitle:'post p-2',
  strImageUrl:'../../assets/images/note.png',
  strDescription:"InsThis trick specifically increases the performance (that you normally wouldn’t get) out of 2D transforms and opacity changes. If we weren’t changing over to using translateX, we wouldn’t see any benefit"
}]},
{url:'../../assets/images/2.jpeg',intPk :10,strName:'nex',
arrUserPosts:[{
  strTitle:'post 10',
  strImageUrl:'../../assets/images/4.png',
  strDescription:"Instead, we’ll just adjust the concept of “speeding up”. If we set two slideshows on top of each other, each one running at different speeds, then hide/show the top-most faster-running on on hover, we can get a pretty decent “speeding up” effect. We’ll use transitions to make the transition smoother."
},
{
  strTitle:'post 10-2',
  strImageUrl:'../../assets/images/note.png',
  strDescription:"InsThis trick specifically increases the performance (that you normally wouldn’t get) out of 2D transforms and opacity changes. If we weren’t changing over to using translateX, we wouldn’t see any benefit"
}]}];

intCurrentUserPk =this.arrProfile[0].intPk;
  constructor() { }

  ngOnInit() {
  }

  userDetails(userPk){
    this.intCurrentUserPk=userPk
    
  }

}
