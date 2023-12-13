//sub page only
document.addEventListener("DOMContentLoaded", function () {
    const tabIcon = '<link href="../img/logo.png" rel="icon">';
    document.head.insertAdjacentHTML('beforeend', tabIcon);

    const navbarHTML = `
    <div class="container-fluid bg-white sticky-top">
        <div class="container">
            <nav class="navbar navbar-expand-lg bg-white navbar-light py-2 py-lg-0">
                <a href="../index.html" class="navbar-brand">
                    <img class="img-fluid" src="../img/logo.png" alt="Logo">
                </a>
                <button type="button" class="navbar-toggler ms-auto me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto">
                        <a href="../index.html" id="home" class="nav-item nav-link">Home</a>
                        <a href="./about.html" id="about" class="nav-item nav-link">About Us</a>
                        <a href="./tea.html" id="tea" class="nav-item nav-link">What is Tea?</a>
                        <a href="./news.html" id="news" class="nav-item nav-link">News</a>
                        <a href="./explore.html" id="explore" class="nav-item nav-link">Explore</a>
                        <a href="./analysis.html" id="analysis" class="nav-item nav-link">Analysis</a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</a>
                            <div class="dropdown-menu bg-light rounded-0 m-0">
                                <a href="./survey.html" class="dropdown-item">Survey</a>
                            </div>
                        </div>
                        <a href="./contact.html" id="contact" class="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    `;
    document.getElementById("navbar-container").innerHTML = navbarHTML;

    const footerHTML = `<div class="container-fluid copyright py-4">
    <div class="container">
        <div class="row">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <a class="fw-medium" href="#">Tea House</a>, All Right Reserved.
            </div>
        </div>
    </div>
</div>`
    document.getElementById("footer-container").innerHTML = footerHTML;
    navHover();
});

function navHover() {
    const page = ["about", "tea", "news", "explore", "contact"];
    for (let i = 0; i < page.length; i++) {
        let element = document.getElementById(page[i]);
        element.classList.remove("active");
    }
    const currentPage = window.location.pathname.split('/').pop().split('.')[0];
    const activeLink = document.getElementById(currentPage.toLowerCase());
    // console.log(activeLink);
    activeLink.classList.add("active");
}