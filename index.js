function get_coords_y(element) {
    const rect = element.getBoundingClientRect();
    const clientTop = document.documentElement.clientTop || document.body.clientTop || 0;
    return Math.round(rect.top + window.scrollY - clientTop);
}

function cover_toggle() {
    var cover = document.querySelector("div.cover[role='fullscreen-cover']");
    cover.addEventListener("transitionend", (event) => {
        if (event.target.getAttribute('role') === 'fullscreen-cover') {
            cover.style.display = "none";
        }
    });
    cover.style.overflow = "hidden";
    cover.classList.toggle('cover-hidden');
    scroll_to('body');
    document.body.classList.toggle('locked');
}

function scroll_to(target) {
    target_location = get_coords_y(document.querySelector(target));
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: target_location - nav.offsetHeight
    });
}

function open_menu(element) {
    element.nextElementSibling.classList.toggle('hidden');
}

function __counter(string) {
    return string.split(' ').filter((num) => {
        return num != '';
    }).length;
}

function word_counter() {
    var articles = document.querySelectorAll('main article');
    var counter = 0;
    articles.forEach((article) => {
        var text = article.innerText;
        counter += text.trim().split(/\s+/).length;
    });
    return counter;
}

function update_article_stats() {
    const wpm = 200;
    var word_count = word_counter();
    document.querySelector('.stat.word-count > p > span').innerText = word_count;
    
    var time = Math.ceil(word_count / wpm);
    document.querySelector('.stat.read-time > p > span').innerText = time;
}
