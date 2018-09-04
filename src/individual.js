import {IndividualService} from './individual-service'
import {inject} from 'aurelia-framework';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

@inject(IndividualService)
export class Individual {
  constructor(individualService) {
    this.user = '{\
      "@class":"com.polokwane.bug.nest.dto.IndividualDto",\
      "id":null,\
      "firstName":"Peter",\
      "lastName":"Shaw",\
      "emailAddress":"peter@gmail.com",\
      "cellPhoneNumber":"0824553111",\
      "longitude":0,\
      "latitude":0,\
      "profilePicture":"default",\
      "carRegistration":"",\
      "available":false,\
      "driver":false\
    }';

    this.individual = JSON.parse(this.user)
    // this.@class = "com.polokwane.bug.nest.dto.IndividualDto"
    // this.id = null;
    // this.firstName	= null;
    // this.lastName	= null;
    // this.emailAddress = null;
    // this.cellPhoneNumber	= null;
    // this.longitude	= 0;
    // this.latitude	= 0;
    // this.profilePicture	= null;
    // this.carRegistration	= null;
    // this.available	= false;
    // this.driver = false;

    this.individualApi = individualService;
  }
  save() {
    console.log(this);
    this.individualApi.save(this.individual);
  }
}
