<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="en" ng-app="myApp" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="en" ng-app="myApp" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="en" ng-app="myApp" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en" ng-app="myApp" class="no-js"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>My AngularJS App</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="assets/css/main.css"> 
  <script src="bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js"></script>
</head>
<body>
  <header class="header__wrapper">
    <svg class="logo" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="44.2px" height="44.6px" viewBox="0 0 44.2 44.6" enable-background="new 0 0 44.2 44.6" xml:space="preserve">
      <path d="M18,38.2c0,4.4-0.4,4.7-4.8,4.7v1.7h17c12.5,0,13.9-8.6,13.9-12.7c0-7.4-6.5-10.8-12.4-11V21 C41.3,19.1,42,12.5,42,10.1c0-3.2-1.4-5.8-3.6-7.5C35.5,0.4,32.2,0,27.4,0H13.2v1.7c4.4,0,4.8,0.2,4.8,4.7V38.2z M28.2,2.2 c7.6,0,9.8,4.1,9.8,8.4c0,4-1.9,9.6-11.3,9.6h-4.7V4.2c0-1.5,0.2-2,1.7-2H28.2z M28,22.4c4.1,0,7,0.8,8.9,2.5c2,1.7,3.2,4.1,3.2,7.1 c0,9.3-5.9,10.5-10.2,10.5h-5.7c-1.9,0-2.2-0.4-2.2-3v-17H28z"/>
      <path d="M9.2,38.2c0,4.4-4.8,4.9-9.2,4.9v1.5h13.2v-2.4V0H9.1v34.2l0.1,5"/>
    </svg>

    <nav>
      <ul class="menu">
        <li><a href="#/view1">view1</a></li>
        <li><a href="#/view2">view2</a></li>
      </ul>
    </nav>
  </header>

  <!--[if lt IE 7]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->

  <div ng-view></div>

  <div>Angular seed app: v<span app-version></span></div>

  <footer class="footer__wrapper">
    &copy; jbutlerphotography.com <?php echo date('y'); ?>
  </footer>

  <!-- In production use:
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/x.x.x/angular.min.js"></script>
  -->
  <script src="bower_components/angular/angular.js"></script>
  <script src="bower_components/angular-route/angular-route.js"></script>
  <script src="app.js"></script>
  <script src="view1/view1.js"></script>
  <script src="view2/view2.js"></script>
  <script src="components/version/version.js"></script>
  <script src="components/version/version-directive.js"></script>
  <script src="components/version/interpolate-filter.js"></script>
</body>
</html>
