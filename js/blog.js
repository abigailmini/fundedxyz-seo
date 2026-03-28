// FundedXYZ Blog JS
document.addEventListener('DOMContentLoaded', function() {
    // FAQ accordion
    document.querySelectorAll('.faq-question').forEach(function(q) {
        q.addEventListener('click', function() {
            var item = this.parentElement;
            var wasOpen = item.classList.contains('open');
            // Close all
            document.querySelectorAll('.faq-item').forEach(function(fi) { fi.classList.remove('open'); });
            if (!wasOpen) item.classList.add('open');
        });
    });

    // Mobile menu toggle
    var toggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.nav-menu');
    if (toggle && menu) {
        toggle.addEventListener('click', function() {
            menu.classList.toggle('open');
        });
    }

    // Header scroll effect
    var header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
