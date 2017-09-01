import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Video } from './video';

@Injectable()
export class VideoService {

 // private _getUrl = '/api/https://video-player-app.herokuapp.com/videos';
 // private _postUrl = '/api/https://video-player-app.herokuapp.com/videos';
 // private _putUrl = '/api/https://video-player-app.herokuapp.com/video/';
 // private _deleteUrl = '/api/https://video-player-app.herokuapp.com/video/';

  constructor( private _http: Http ) { }

    getVideos() {
      return this._http.get('https://video-player-app.herokuapp.com/videos')
      .map((response: Response) => response.json());
    }

    addVideo(video: Video) {
      const headers = new Headers({ 'Content-type': 'application/json' });
      const options = new RequestOptions({ headers: headers });
      return this._http.post('https://video-player-app.herokuapp.com/videos', JSON.stringify(video), options)
      .map((response: Response) => response.json());
    }

    updateVideo(video: Video) {
      const headers = new Headers({ 'Content-type': 'application/json' });
      const options = new RequestOptions({ headers: headers });
      return this._http.put('/https://video-player-app.herokuapp.com/video/' + video._id, JSON.stringify(video), options)
      .map((response: Response) => response.json());
    }

    deleteVideo(video: Video) {
      return this._http.delete('https://video-player-app.herokuapp.com/video/' + video._id)
      .map((response: Response) => response.json());
    }
}
