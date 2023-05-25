import { Component } from '@angular/core';


interface Article {
  title: string;
  author: string;
  date: string;
  imageSrc: string;
  content: string;
}
@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent {
articles: Article[] = [
    {
      title: 'The Benefits Of Journaling',
      author: 'Sudhanshu Singh',
      date: 'Jan 23, 2023',
      imageSrc: 'assets/images/image1.png',
      content: 'How Writing Can Improve Your Mental Well-being? Explore the therapeutic benefits of journaling, including stress reduction, self-reflection, and enhanced creativity...'
    },
    {
      title: 'Unlocking Creativity',
      author: 'Rajeev Singhal',
      date: 'Feb 01, 2023',
      imageSrc: 'assets/images/image2.jpeg',
      content: ' Strategies for Overcoming Creative Blocks, Discover effective techniques to overcome creative blocks and foster a more innovative and inspired mindset...'
    },
     {
      title: 'BGMI/PUBG Mobile popularity',
      author: 'Krafton Singh',
      date: 'Feb 23, 2023',
      imageSrc: 'assets/images/image3.png',
      content: 'Mobile gamers who play PUBG Mobile or BGMI have grown accustomed to the game and its gameplay,making it difficult for any mobile game developer to entice them to play another Battle Royale game.Although PUBG: New State has a similar concept, the game falls far short of PUBG Mobile or BGMI...'
    }, 
    {
      title: 'The Travel Episodes',
      author: 'Kratika Srinivasan',
      date: 'March 10, 2023',
      imageSrc: 'assets/images/image4.jpeg',
      content: ' What I love about it: The Travel Episodes does not just take storytelling to the next level with their writings but also with video clips, sound effects, and photography.Its like reading a futuristic storybook that teleported you to the place.'
    },
     {
      title: 'TECHNOLOGY',
      author: 'Meenakshi Shaw',
      date: 'April 1, 2023',
      imageSrc: 'assets/images/image5.jpeg',
      content: 'Technology is transforming every inch of our lives. As such, its an overarching topic that could just as well cater to a business audience as a consumer one. Software reviews Business automation Consumer electronics Artificial Intelligence Apple products Android products'
    },
    {
      title: 'What is MEAN stack?',
      author: 'Pradeep Maurya',
      date: 'May 15, 2023',
      imageSrc: 'assets/images/image6.png',
      content: 'In the world of software development, MEAN Stack is one of the most widely used technological stacks and a web development framework. we can create simple as well complex web applications using MEAN (MongoDB, ExpressJS, AngularJS, and NodeJS)...'
    },
  ]
}
