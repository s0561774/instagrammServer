import { Injectable } from '@nestjs/common';
import * as webpush from 'web-push';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  subscribe(key: any) {
    webpush.setVapidDetails(
      'mailto: tsougongpaulette@yahoo.fr',
      "BEr-7e2f9MinBL_iz1HM9JGG8sVlS_xoWjLIm1x53j864zXpCAgtD5hIt4SjB9feWY7b4SxYB0wGuoGwU3DOB-Q",
      "cvoDj7hM3IeqcUdW9ynzoBK1f4SPlfPGOs65aImtcvM"
  );

  let payload = JSON.stringify({
    "notification":{
        "title": "Instagram",
        "body":"There are new updating"
    }
});

  webpush.sendNotification(payload);


  }
}
