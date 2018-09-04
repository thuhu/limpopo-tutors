import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';

@inject(HttpClient)
export class IndividualService {
  constructor(http) {
      this.isAuthenticated = false;
      this.cookie = null;

      this.user = null;
      this.http = http;
      let authorizationHeader = 'Basic ' + btoa("admin:admin1234");
      this.http.configure(config => {
  			config
  				.useStandardConfiguration()
          //.withBaseUrl()
  				//.withBaseUrl("http://localhost:8080/individual/save");
          // .withDefaults({
          //                headers: {
          //                  'Authorization': authorizationHeader
          //                }
          // });
  		});
  }

  save(newIndividual) {
    let request = {payload : newIndividual}
    if (!this.isAuthenticated) {
      let formData = new FormData();
      formData.append("username", "admin");
      formData.append("password", "admin1234");
      formData.append("submit", "login");

      let response =  this.http.fetch("http://localhost:8080/login", {
        method: 'POST',
        body: formData
      }).then((response) => {
          console.log(response);
          this.isAuthenticated = true;
          this.http.fetch("http://localhost:8080/individual/fetch-all", {
          }).then((response) => {
            response.json()
            .then(data => {
              console.log(data);
            })
            .catch();
          }).catch(error => console.log(error));

      })


      .catch(error => console.log(error))
    } else {
      return this.http.fetch("http://localhost:8080/individual/create", {
        method: 'POST',
        body: json(request)
      })
    }

    // return this.http.fetch("", {
    //   method: 'POST',
    //   body: json(request)
    // })
    // return this.http.fetch('')
		// 	.then(response => response.json())
		// 	.catch(error => console.log(error));
  }
}
