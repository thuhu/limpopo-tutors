import {HttpClient} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';

@inject(HttpClient)
export class RoleService {
  constructor(http) {
    this.http = http;
		// this.http.configure(confi => {
		// 	confi
    //     .withDefaults({
    //       headers: {
    //         'Authentication':  'Basic ' + new Buffer("admin:admin1234").toString('base64'),
    //       }
    //     })
		// 		//.useStandardConfiguration()
		// 		.withBaseUrl("http://localhost:8080/individual/fetch");
		// });
  }

  fetchRole(id) {
    return this.http.fetch('')
			.then(response => response.json())
			.catch(error => console.log(error));
  }
}
