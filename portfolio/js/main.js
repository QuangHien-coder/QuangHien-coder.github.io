// Bấm vào ảnh trong Bộ ảnh thì mở ảnh lớn bằng thẻ <dialog> có sẵn của trình duyệt.
// Phím Esc và nút "Đóng" tự đóng được, không cần viết thêm code.
const viewer = document.getElementById('viewer');
const viewerImg = document.getElementById('viewer-img');
const viewerCaption = document.getElementById('viewer-caption');

document.querySelectorAll('.shot').forEach(function (button) {
  button.addEventListener('click', function () {
    const img = button.querySelector('img');
    viewerImg.src = img.src;
    viewerImg.alt = img.alt;
    viewerCaption.textContent = img.alt;
    viewer.showModal();
  });
});

// Bấm ra vùng nền tối bên ngoài ảnh thì cũng đóng
viewer.addEventListener('click', function (event) {
  if (event.target === viewer) {
    viewer.close();
  }
});
