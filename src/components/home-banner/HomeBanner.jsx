import './HomeBanner.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const HomeBanner = () => {
    return (
        <>
            <section className="banner-slider">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    spaceBetween={60}
                    slidesPerView={1}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    loop={true}
                    effect="fade"
                >
                    <SwiperSlide>
                        <img src="/images/banners/home-banner-1.avif" alt="Banner Slide 1" loading="eager" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/banners/home-banner-2.avif" alt="Banner Slide 2" loading="eager" />
                    </SwiperSlide>
                </Swiper>
                <div className="home-banner-text">
                    <h1 data-aos="fade-up">SUSTAINABLE <br /> AGRO LTD.</h1>
                </div>
            </section>
        </>
    )
}

export default HomeBanner
