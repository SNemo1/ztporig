document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollToClass = urlParams.get('scrollTo');
    
    if (scrollToClass) {
        scrollPage(scrollToClass);
    }
});

function scrollPage(className) {
    const element = document.querySelector(`${className}`);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth"
        });
    }
}