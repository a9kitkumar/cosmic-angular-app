import { Component } from '@angular/core';
import Cosmic from 'cosmicjs'; //Import the cosmicjs module here

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cosmic-angular-app';

  constructor() { this.getCosmicJSData() }

  getCosmicJSData() {
    // Set these values of slug, read_key and write_key, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
    const config = {
      bucket: {
        slug: 'YOUR_BUCKET_SLUG', //Add your bucket slug from Cosmic JS Bucket settings
        read_key: 'YOUR_BUCKET_READ_KEY', // Add read_key if added to your Cosmic JS Bucket settings
        write_key: 'YOUR_BUCKET_WRITE_KEY' // Add write_key if added to your Cosmic JS Bucket settings
      }
    };

    //Get complete data of bucket
    Cosmic.getBucket(config, (error: any, response: any) => {
      console.log("bucket data: ", response);
    });

    //Get the objects of bucket
    Cosmic.getObjects(config, (error: any, response: any) => {
      console.log("objects are: ", response);
    });

    //Add object to the bucket
    const params = {
      write_key: 'YOUR_BUCKET_WRITE_KEY', //Add write_key here
      type_slug: 'YOUR_OBJECT_TYPE', //type of the object
      title: 'ADD_TITLE', //Add your desired title here
      content: 'ADD_CONTENT' //Add desired content for the object
    };
    Cosmic.addObject(config, params, (error: any, response: any) => {
      console.log(response);
    });

    //Edit the object
    const parameters = {
      write_key: 'YOUR_BUCKET_WRITE_KEY',
      slug: 'YOUR_BUCKET_SLUG',
      type_slug: 'YOUR_OBJECT_TYPE',
      title: 'NEW_TITLE',
      content: 'NEW_CONTENT'
    };
    Cosmic.editObject(config, parameters, (error: any, response: any) => {
      console.log(response);
    });
  }
}