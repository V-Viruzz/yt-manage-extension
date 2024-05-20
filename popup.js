console.log('-------------extension----------')

let intervalIdButton = setInterval(() => {
  const buttonMake = document.querySelector('#end #buttons ytd-topbar-menu-button-renderer')

  if (buttonMake !== null) {
    clearInterval(intervalIdButton)
    const buttonsContainer = buttonMake.parentNode
    const btnNav = document.createElement('button');

    // Configura las propiedades del nuevo botón
    btnNav.textContent = '#';
    btnNav.className = 'btn-nav';
    btnNav.style.backgroundColor = '#000'
    btnNav.style.color = '#fff'
    btnNav.style.width = '30px'
    btnNav.style.height = '30px'
    btnNav.style.marginRight = '10px'
    btnNav.style.border = 'solid 1px #fff'
    btnNav.style.borderRadius = '999px'

    btnNav.addEventListener('click', () => {
      console.log('make')
      itemVideo[0].focus()
    })

    buttonsContainer.insertBefore(btnNav, buttonMake);
  }

}, 500);

let hojaDeEstilo = document.styleSheets[0];
hojaDeEstilo.insertRule("ytd-thumbnail a:-webkit-any-link:focus-visible { outline: solid #f6007d 5px; }", hojaDeEstilo.cssRules.length);



let intervalId = setInterval(() => {
  const itemVideo = document.querySelectorAll('ytd-video-renderer ytd-thumbnail a')

  console.log(itemVideo.length)

  if(itemVideo.length > 22) {
    console.log('🚀 ~ intervalId ~ itemVideo:', itemVideo)
    clearInterval(intervalId)

    itemVideo.forEach(element => {
      element.setAttribute('tabindex', '1');
    });

    function handleClickEsc(event) {
      if (event.ctrlKey && event.key === 'i') {
        itemVideo[0].focus()
        console.log('focus video', itemVideoSearch[0])
      }
    }


    document.addEventListener('keydown', handleClickEsc)


  }

}, 500);

let intervalYoutubeSearchId = setInterval(() => {
  const seachElement = document.querySelectorAll('#search')

  if (seachElement !== null) {
    clearInterval(intervalYoutubeSearchId)

    function handleClickEsc(event) {
      if (event.ctrlKey && event.key === 'y') {
        seachElement[2].focus()
      }
    }


    document.addEventListener('keydown', handleClickEsc)


  }

}, 500);


// setTimeout(() => {
//   const seachElement = document.querySelectorAll('#search')
//   const itemVideo = document.querySelectorAll('ytd-rich-item-renderer ytd-thumbnail a')

//   const itemVideoSearch = document.querySelectorAll('ytd-video-renderer ytd-thumbnail a')

//   const buttonsEndContainer = document.querySelector('#end #buttons.style-scope.ytd-masthead')

//   const buttonMake = document.querySelector('#end #buttons ytd-topbar-menu-button-renderer')
//   // if(buttonMake !== null) {
    
//     console.log('🚀 ~ setTimeout ~ buttonMake:', buttonMake)
//   // }
//   const buttonsContainer = buttonMake.parentNode

//   const btnNav = document.createElement('button');

//   // Configura las propiedades del nuevo botón
//   btnNav.textContent = '#';
//   btnNav.className = 'btn-nav';
//   btnNav.style.backgroundColor = '#000'
//   btnNav.style.color = '#fff'
//   btnNav.style.width = '30px'
//   btnNav.style.height = '30px'
//   btnNav.style.marginRight = '10px'
//   btnNav.style.border = 'solid 1px #fff'
//   btnNav.style.borderRadius = '999px'

//   btnNav.addEventListener('click', () => {
//     console.log('make')
//     itemVideo[0].focus()
//   })

//   buttonsContainer.insertBefore(btnNav, buttonMake);



//   itemVideo.forEach(element => {
//     element.setAttribute('tabindex', '1');
//   });

//   itemVideoSearch.forEach(element => {
//     element.setAttribute('tabindex', '1');
//   });

//   function handleClickEsc(event) {
//     console.log('🚀 ~ handleClickEsc ~ event.key:', event.key)
//     if (event.ctrlKey && event.key === 'y') {
//       console.log('first')
//       seachElement[2].focus()
//     }
//     if (event.ctrlKey && event.key === 'i') {
//       itemVideo[0].focus()
//     itemVideoSearch[0].focus()
//     console.log('focus video', itemVideoSearch[0])
//     }
//   }


//   document.addEventListener('keydown', handleClickEsc)

// }, 3200)