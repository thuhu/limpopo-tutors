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
  configureRouter(config, router){
    config.title = 'Menu';
    config.map([
      { route: '',          moduleId: PLATFORM.moduleName('welcome'),   title: 'Home'},
      { route: 'login',     moduleId: PLATFORM.moduleName('login-screen'),   title:'login' },
      { route: 'register',     moduleId: PLATFORM.moduleName('individual'),  title:'registerItem' },
      { route: 'about',     moduleId: PLATFORM.moduleName('about'),  title:'about' }
    ]);

    this.router = router;
  }
}
