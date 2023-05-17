// scrollMenu

document.addEventListener('DOMContentLoaded', function() {

    let scrollLast = 0;
    const hightHeader = 120;
    const header = document.querySelector('.header');

    const scrollPosition = () => window.pageYOffset || document.documentElement.scroll

    const containHide = () => header.classList.contains('hide');

    window.addEventListener('scroll', () => {

        if(scrollPosition() > scrollLast && !containHide()) {
            if(scrollPosition() < hightHeader) {
                return;
            } else {
                header.classList.add('hide')
            }
            
        } else if(scrollPosition() < scrollLast && containHide()) {

            header.classList.remove('hide')
        }

        scrollLast = scrollPosition();
    });
});
