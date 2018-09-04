import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

export class App {
  constructor() {
    this.message = 'Hello World!';
  }

  configureRouter(config, router){
    config.title = 'Menu';
    config.map([
      { route: '',          moduleId: PLATFORM.moduleName('welcome'),   title: 'Home'},
      { route: 'login',     moduleId: PLATFORM.moduleName('login-screen'),   title:'menuItems' },
      { route: 'register',     moduleId: PLATFORM.moduleName('individual'),  title:'registerItem' },
      { route: 'about',     moduleId: PLATFORM.moduleName('about'),  title:'about' }
    ]);

    this.router = router;
  }
}
