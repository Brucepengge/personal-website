document.addEventListener('DOMContentLoaded', () => {
    // 获取所有需要的元素
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentSlide = 0;
    let slideInterval;

    // 初始化轮播间隔
    const startSlideshow = () => {
        slideInterval = setInterval(nextSlide, 5000); // 每5秒切换一次
    };

    // 停止轮播
    const stopSlideshow = () => {
        clearInterval(slideInterval);
    };

    // 更新当前幻灯片
    const updateSlide = (n) => {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = (n + slides.length) % slides.length;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    };

    // 下一张幻灯片
    const nextSlide = () => {
        updateSlide(currentSlide + 1);
    };

    // 上一张幻灯片
    const prevSlide = () => {
        updateSlide(currentSlide - 1);
    };

    // 事件监听器
    prevBtn.addEventListener('click', () => {
        stopSlideshow();
        prevSlide();
        startSlideshow();
    });

    nextBtn.addEventListener('click', () => {
        stopSlideshow();
        nextSlide();
        startSlideshow();
    });

    // 点击指示点切换幻灯片
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopSlideshow();
            updateSlide(index);
            startSlideshow();
        });
    });

    // 鼠标悬停时暂停轮播
    document.querySelector('.slideshow').addEventListener('mouseenter', stopSlideshow);
    document.querySelector('.slideshow').addEventListener('mouseleave', startSlideshow);

    // 开始轮播
    startSlideshow();
}); 