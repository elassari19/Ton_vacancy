import React, { Children, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { BtnPrimary, TipsCard } from "components";
import { personsWhite, SuitcaseWhite } from "../../../public";
import { useRouter } from "next/router";

interface Props {}

const index: React.FC<Props> = () => {
  const router = useRouter();

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <TipsCard
            tag="h1"
            size="lg"
            title="Professional applicants in various fields"
            content="TON work allows you to find the most effective and top employees from all over the world"
          >
            <BtnPrimary
              blueDark
              title="I am employer"
              inIcon={SuitcaseWhite}
              style={{ width: "45%", padding: "12px" }}
              onClick={() => router.push("/workers")}
            />
            <BtnPrimary
              greenDark
              title="I am applicant"
              inIcon={personsWhite}
              style={{ width: "45%", padding: "12px" }}
              onClick={() => router.push("/companies")}
            />
          </TipsCard>
        </SwiperSlide>
        <SwiperSlide>
          <TipsCard
            tag="h1"
            size="lg"
            title="Responsible customers from all over the world"
            content="TON work allows you to find the most effective and top employees from all over the world"
          >
            <BtnPrimary
              blueDark
              title="I am employer"
              inIcon={SuitcaseWhite}
              style={{ width: "45%", padding: "12px" }}
              onClick={() => router.push("/workers")}
            />
            <BtnPrimary
              greenDark
              title="I am applicant"
              inIcon={personsWhite}
              style={{ width: "45%", padding: "12px" }}
              onClick={() => router.push("/companies")}
            />
          </TipsCard>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default index;
