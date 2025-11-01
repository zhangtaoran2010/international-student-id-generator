document.addEventListener('DOMContentLoaded', () => {
  const studentNameInput = document.getElementById('student-name');
  const studentIdInput = document.getElementById('student-id');
  const studentMajorInput = document.getElementById('student-major');
  const issueDateInput = document.getElementById('issue-date');
  const expiryDateInput = document.getElementById('expiry-date');
  const studentPhotoInput = document.getElementById('student-photo');
  const generateBtn = document.getElementById('generate-btn');

  const defaultIssueDate = '2024-03-05';
  const defaultExpiryDate = '2028-03-05';
  issueDateInput.value = defaultIssueDate;
  expiryDateInput.value = defaultExpiryDate;

  studentPhotoInput.addEventListener('change', e => {
    const file = e.target.files[0];
    const preview = document.getElementById('photo-preview');
    const placeholder = document.getElementById('photo-upload-placeholder');
    if (file) {
      const reader = new FileReader();
      reader.onload = ev => {
        preview.src = ev.target.result; // 确保图片数据被设置到 src 属性
        // preview.style.display = 'block'; // 不在 index.html 中显示
        // placeholder.style.display = 'none'; // 不在 index.html 中显示
      };
      reader.readAsDataURL(file);
    } else {
      preview.src = '#'; // 清除 src
      // preview.style.display = 'none';
      // placeholder.style.display = 'block';
    }
  });

  generateBtn.addEventListener('click', () => {
    const idCardData = {
      name: studentNameInput.value || 'N/A',
      id: studentIdInput.value || 'N/A',
      major: studentMajorInput.value || 'N/A',
      issue: issueDateInput.value || 'N/A',
      expiry: expiryDateInput.value || 'N/A',
      photo: document.getElementById('photo-preview').src || ''
    };
    localStorage.setItem('idCardData', JSON.stringify(idCardData));
    window.location.href = 'export.html';
  });
});
