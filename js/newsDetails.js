document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    getShop(id);
});

async function getShop(id) {
    try {
        const response = await fetch('../js/newsDetails.json');
        const details = await response.json();

        const detail = details.find((item) => item.id == id);

        if (detail) {
            const detailsHTML = generateNewsDetailsHTML(detail);
            document.getElementById("newsDetails").innerHTML = detailsHTML;
        } else {
            const comingSoon = comingSoonHTML();
            document.getElementById("error").innerHTML = comingSoon;
            console.error('Details not found for id:', id);
        }
    } catch (error) {
        console.error('Error fetching details:', error);
    }
}

function generateNewsDetailsHTML(detail) {
    return `
        <div class="container-fluid product py-5">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                        <img class="img-fluid" src="${detail.img}" alt="photo">
                    </div>
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <div class="section-title">
                            <p class="fs-5 fw-medium fst-italic text-primary">${detail.title}</p>
                        </div>
                        <p class="mb-4">${detail.content}</p>
                    </div>
                </div>
            </div>
        </div>`;
}

function comingSoonHTML() {
    return `
    <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container text-center">
        <div class="row justify-content-center">
            <div class="col-lg-6">
            <p class="fs-1 fw-medium fst-italic text-primary">Coming Soon</p>
                <div class="coming">
                    <img src="../img/comingSoon.jpg" alt="Coming Soon">
                </div>
                <h1 id="stayTuned" class="mb-4" style="color: #88b44e;"></h1>
                <a class="btn btn-primary rounded-pill py-3 px-5" href="../index.html">Go Back To Home</a>
            </div>
        </div>
    </div>
</div>`
}
