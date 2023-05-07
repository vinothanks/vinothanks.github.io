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