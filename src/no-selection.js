import {RoleService} from './role-service'
import {inject} from 'aurelia-framework'

@inject(RoleService)
export class NoSelection {
  constructor(api) {
    this.message = "Polokwane Bug Service Dashboard";
    this.role = null;
    this.api = api;
  }

  created() {
    // this.api.fetchRole()
    //   .then(result => {
    //     this.role = result;
    //   })
  }
}
