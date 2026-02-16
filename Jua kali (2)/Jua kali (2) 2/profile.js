document.getElementById('show-feed').addEventListener('click', function() {
    document.querySelector('.feed').style.display = 'flex';
    this.classList.add('active');
    document.getElementById('show-editor').classList.remove('active');
});

// Slider Navbar functionality
const catalogBtn = document.getElementById('catalog-btn');
const portfolioBtn = document.getElementById('portfolio-btn');
const catalogSection = document.getElementById('catalog-section');
const portfolioSection = document.getElementById('portfolio-section');

catalogBtn.addEventListener('click', function() {
    catalogSection.style.display = 'block';
    portfolioSection.style.display = 'none';
    catalogBtn.classList.add('active');
    portfolioBtn.classList.remove('active');
});

portfolioBtn.addEventListener('click', function() {
    catalogSection.style.display = 'none';
    portfolioSection.style.display = 'block';
    portfolioBtn.classList.add('active');
    catalogBtn.classList.remove('active');
});

