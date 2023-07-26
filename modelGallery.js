var galleryModel = document.getElementById('galleryModal');
galleryModel.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var image = event.relatedTarget;
  // Extract info from data-bs-* attributes
  var imagesrc = image.getAttribute('data-bs-whatever');
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  
  var modalBodyInput = galleryModal.querySelector('.modal-body img');
  modalBodyInput.src = imagesrc;
})

function close_offcanvas() {
  setTimeout(clickButton, 500);
}
function clickButton(){
  document.getElementById("closeMenu").click();
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}