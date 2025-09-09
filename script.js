document.getElementById('assessmentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const type = document.getElementById('type').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    const assessmentDiv = document.createElement('div');
    assessmentDiv.className = 'assessment-item';
    assessmentDiv.innerHTML = `
        <strong>Title:</strong> ${title} <br>
        <strong>Author:</strong> ${author} <br>
        <strong>Type:</strong> ${type} <br>
        <strong>Rating:</strong> ${rating}/5 <br>
        <strong>Comments:</strong> ${comments || 'None'}
    `;

    document.getElementById('assessmentsList').appendChild(assessmentDiv);

    this.reset();
});
