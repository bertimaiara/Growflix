const growcastItems = document.getElementById("growcast-items");
const webinarItems = document.getElementById("webinar-items");
const uxuiItems = document.getElementById("ux-ui-items");
const diversosItems = document.getElementById("diversos-items");
const iframeMovie = document.getElementById("iframe-movie");
const movieModal = new bootstrap.Modal("#movie-modal");

function renderGrowcast() {
  let html = "";

  growcast.forEach((item) => {
    html += `
        <div class="col-12 col-sm-6 col-md-3 col-movie">
            <div onmouseenter="showDetail(this)" onmouseleave="closeDetail(this)">
                <img src="${item.img}" class="img-fluid">
                <p class="detail-movie" data-link="${item.link}" onclick="openMovie(this)">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16"
                        fill="currentColor"
                        class="bi bi-play-circle"
                        viewBox="0 0 16 16">
                        <path
                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path
                            d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                    </svg>
                    <span>${item.title}</span>
                </p>
            </div>
        </div>
        `;
  });
  growcastItems.innerHTML += html;
}

renderGrowcast();

function renderWebinar() {
  let html = "";

  webinar.forEach((item) => {
    html += `
        <div class="col-12 col-sm-6 col-md-3 col-movie">
            <div onmouseenter="showDetail(this)" onmouseleave="closeDetail(this)">
                <img src="${item.img}" class="img-fluid">
                <p class="detail-movie" data-link="${item.link}" onclick="openMovie(this)">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16"
                        fill="currentColor"
                        class="bi bi-play-circle"
                        viewBox="0 0 16 16">
                        <path
                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path
                            d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                    </svg>
                    <span>${item.title}</span>
                </p>
            </div>
        </div>
        `;
  });
  webinarItems.innerHTML += html;
}

renderWebinar();

function renderUxUi() {
  let html = "";

  uxUi.forEach((item) => {
    html += `
        <div class="col-12 col-sm-6 col-md-3 col-movie">
            <div onmouseenter="showDetail(this)" onmouseleave="closeDetail(this)">
                <img src="${item.img}" class="img-fluid">
                <p class="detail-movie" data-link="${item.link}" onclick="openMovie(this)">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16"
                        fill="currentColor"
                        class="bi bi-play-circle"
                        viewBox="0 0 16 16">
                        <path
                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path
                            d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                    </svg>
                    <span>${item.title}</span>
                </p>
            </div>
        </div>
        `;
  });
  uxuiItems.innerHTML += html;
}

renderUxUi();

function renderDiversos() {
  let html = "";

  diversos.forEach((item) => {
    html += `
        <div class="col-12 col-sm-6 col-md-3 col-movie">
            <div onmouseenter="showDetail(this)" onmouseleave="closeDetail(this)" class>
                <img src="${item.img}" class="img-fluid">
                <p class="detail-movie" data-link="${item.link}" onclick="openMovie(this)">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16"
                        fill="currentColor"
                        class="bi bi-play-circle"
                        viewBox="0 0 16 16">
                        <path
                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path
                            d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                    </svg>
                    <span>${item.title}</span>
                </p>
            </div>
        </div>
        `;
  });
  diversosItems.innerHTML += html;
}

renderDiversos();

function showDetail(element) {
  element.classList.add("detail-hover");
  element.children[1].style.display = "block";
}

function closeDetail(element) {
  element.classList.remove("detail-hover");
  element.children[1].style.display = "none";
}

function openMovie(element) {
  const link = element.getAttribute("data-link");
  console.log(link);
  iframeMovie.innerHTML = `
      <iframe src="${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `;
  movieModal.show();
}
