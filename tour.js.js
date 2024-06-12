const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  // header container
  ScrollReveal().reveal(".header__container h1", scrollRevealOption);
  
  ScrollReveal().reveal(".header__container h4", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  // about container
  ScrollReveal().reveal(".about__container .section__header", scrollRevealOption);
  ScrollReveal().reveal(".about__container .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".about__container .about__flex", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  ScrollReveal().reveal(".about__container .btn", {
    ...scrollRevealOption,
    delay: 1500,
  });
  
  // discover container
  ScrollReveal().reveal(".discover__card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  ScrollReveal().reveal(".discover__card__content", {
    ...scrollRevealOption,
    interval: 500,
    delay: 200,
  });
  
  ScrollReveal().reveal(".blogs__card", {
    duration: 1000,
    interval: 400,
  });
  
  ScrollReveal().reveal(".journals__card", {
    ...scrollRevealOption,
    interval: 400,
  });
  angular.module('webApp', [])
  .component('homeComponent', {
      template: '<div>Home Component</div>'
  })
  .component('aboutComponent', {
      template: '<div>About Component</div>'
  })
  .controller('HomeController', function () {
      // Home controller logic
  })
  .controller('AboutController', function () {
      // About controller logic
  });


  const ReactRoot = ReactDOM.createRoot(document.getElementById('react-root'));

  function ReactComponent() {
      return React.createElement('div', null, 'React Component');
  }

  ReactRoot.render(React.createElement(ReactComponent));
  // Import necessary Angular modules and components
