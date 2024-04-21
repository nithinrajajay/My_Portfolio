var typed = new Typed(".auto-type",{
    strings: ["Endowed with a specialization in Electronics Engineering.^2000","My professional focus is on the domain of Full-Stack Development.^2000"],
    typespeed:50,
    loop:true,
    backDelay: 900,
    backSpeed: 30,  
})


const options = {
    bottom: '65px', // default: '32px'
    right: '15px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#4287f5',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
  const darkmode = new Darkmode(options);

  darkmode.showWidget();