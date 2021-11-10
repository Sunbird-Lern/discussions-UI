import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CsModule } from '@project-sunbird/client-services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo-app-v8';
  constructor(public router: Router) {
  }
  ngOnInit() {
    CsModule.instance.init({
      core: {
        httpAdapter: 'HttpClientBrowserAdapter',
        global: {
          channelId: '', // required
          producerId: '', // required
          deviceId: '' // required
        },
        api: {
          host: 'http://localhost:3002', // default host
          authentication: {
            // userToken: string; // optional
            // bearerToken: string; // optional
          }
        }
      },
      services: {
        groupServiceConfig: {
          apiPath: '/learner/group/v1',
          dataApiPath: '/learner/data/v1/group',
          updateGroupGuidelinesApiPath: '/learner/group/membership/v1'
        },
        userServiceConfig: {
          apiPath: '/learner/user/v2',
        },
        formServiceConfig: {
          apiPath: '/learner/data/v1/form',
        },
        courseServiceConfig: {
          apiPath: '/learner/course/v1',
          certRegistrationApiPath: '/learner/certreg/v2/certs'
        },
        discussionServiceConfig: {
          apiPath: '/discussion'
        }
      }
    });
  }

  navigate() {
    // const result = [16];
    this.router.navigate(['/discussion-forum'], {
      queryParams: {
        categories: JSON.stringify({ result: [16] }),
        userId: 7
      }
    });
  }
}
