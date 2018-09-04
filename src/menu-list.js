export class MenuList {
  constructor() {
    this.menuItems = [];
    this.selectedMenuItem = null;
  }

  select(menuItem){
    this.selectedMenuItem = menuItem.id;
    return true;
  }

  created() {
    this.menuItems = [ { displayName:'Home', id:0},
                       { displayName:'Register', id:1},
                       { displayName:'About', id:2}
                     ];

  }

}
