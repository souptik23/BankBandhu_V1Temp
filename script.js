// Initialize AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // Navigation scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('shadow-md');
            header.classList.remove('shadow-sm');
        } else {
            header.classList.remove('shadow-md');
            header.classList.add('shadow-sm');
        }
    });

    // Feature cards animation
    const features = [
        {
            icon: '🤖',
            title: 'AI-Powered Personal Finance',
            description: 'Automatically manage budgets and expenses with smart AI'
        },
        // Add more features...
    ];

    const featureContainer = document.querySelector('.features-grid');
    features.forEach(feature => {
        const card = createFeatureCard(feature);
        featureContainer.appendChild(card);
    });
});

function createFeatureCard({ icon, title, description }) {
    const div = document.createElement('div');
    div.className = 'feature-card';
    div.setAttribute('data-aos', 'fade-up');
    div.innerHTML = `
        <div class="text-4xl mb-4">${icon}</div>
        <h3 class="text-xl font-bold mb-2">${title}</h3>
        <p class="text-gray-600">${description}</p>
    `;
    return div;
}
