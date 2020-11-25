function onLoad() {
    // create references to HTML
    const btn = document.querySelector('#navbutton')
    const nav = document.querySelector('.navigation')
    // make button clickable
    btn.addEventListener('click', function() {
      // if navigation is already open
      if( nav.classList.contains('open') ) {
        // close it
        nav.classList.remove('open')
      }
      // if navigation is not open
      else {
        // open it
        nav.classList.add('open')
      }
    })
  
  }
  // wait for document to load
  window.addEventListener('load', onLoad)