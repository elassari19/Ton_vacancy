import gsap from "gsap";

  const headerAnimation = (item_1: string, item_2: string) => {

    gsap.to(`#${item_1}`, {duration: .5, y: -50, opacity: 0, display: 'none'});

    gsap.to(`#${item_2}`, {duration: .5, y: 0, opacity: 1, display: 'flex'});

  };

export default headerAnimation;
