document.addEventListener('DOMContentLoaded', function() {
    const clickBtn = document.getElementById('clickBtn');
  
  if (clickBtn) {
    clickBtn.addEventListener('click', function() {
      console.log('Button clicked!');
      alert('Button clicked!');
      // Add your code here to handle the button click event
    });
  } else {
    console.error('Button element not found.');
  }



  const mouseArea = document.getElementById('mouseArea');
  
  if (mouseArea) {
    mouseArea.addEventListener('mouseover', function() {
      console.log('Mouse over area!');
      // Add your code here to handle the mouseover event
    });
  } else {
    console.error('Mouse area element not found.');
  }


  const textInput = document.getElementById('textInput');
  
  if (textInput) {
    textInput.addEventListener('keydown', function(event) {
      console.log('Key pressed:', event.key);
      // Add your code here to handle the keydown event
    });
  } else {
    console.error('Text input element not found.');
  }


  const myForm = document.getElementById('myForm');
  
  if (myForm) {
    myForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      console.log('Form submitted!');
      // Add your code here to handle the form submission event
      // Retrieve values from input fields
      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');
      const usernameValue = usernameInput.value;
      const passwordValue = passwordInput.value;

      // Log values to console
      console.log('Username:', usernameValue);
      console.log('Password:', passwordValue);
    });
  } else {
    console.error('Form element not found.');
  }

  const focusInput = document.getElementById('focusInput');
  const blurInput = document.getElementById('blurInput');
  if (focusInput) {
    focusInput.addEventListener('focus', function() {
      console.log('Input focused!');
      focusInput.classList.add('focused');
      // Add your code here to handle the focus event
    });

    focusInput.addEventListener('blur', function() {
        console.log('Input blurred!');
        focusInput.classList.remove('focused');
        // Add your code here to handle the focus event
      });

      blurInput.addEventListener('focus', function() {
        console.log('Input focused!');
        // Add your code here to handle the blur event
        blurInput.classList.add('focused');
      });

      blurInput.addEventListener('blur', function() {
      console.log('Input blurred!');
      // Add your code here to handle the blur event
      blurInput.classList.remove('focused');
    });
  } else {
    console.error('Focus input element not found.');
  }
 
// Function to update the window width and height
function updateWindowSize() {
    document.getElementById('widthSpan').textContent = window.innerWidth;
    document.getElementById('heightSpan').textContent = window.innerHeight;
  }

  // Initial update
  updateWindowSize();

  // Event listener for window resize event
  window.addEventListener('resize', updateWindowSize);



  const myVideo = document.getElementById('myVideo');

  // Event listener for when the video starts playing
  myVideo.addEventListener('play', function() {
    console.log('Video started playing');
    // Add your code here to handle the play event
  });

  // Event listener for when the video is paused
  myVideo.addEventListener('pause', function() {
    console.log('Video paused');
    // Add your code here to handle the pause event
  });

  // Event listener for when the video playback ends
  myVideo.addEventListener('ended', function() {
    console.log('Video playback ended');
    // Add your code here to handle the ended event
  });



  });
