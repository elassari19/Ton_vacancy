import gsap from "gsap";

export const SubstitutY = (item_1: string, item_2: string, duration= 0.2, display= 'flex') => {

  gsap.to(`#${item_1}`, {stagger: 1, duration, y: -50, opacity: 0, display: 'none'});

  gsap.to(`#${item_2}`, {stagger: 1, duration, y: 0, opacity: 1, display, delay: duration});

};

export const SubstitutX = (item_1: string, item_2: string, duration= 0.2, display= 'flex') => {

  gsap.to(`#${item_1}`, {stagger: 1, duration, x: -100, opacity: 0, display: 'none'});

  gsap.to(`#${item_2}`, {stagger: 1, duration, x: 0, opacity: 1, display, delay: duration});

};

export const SubstitutZ = (item_1: string, item_2: string, duration= 0.2, display= 'flex') => {

  gsap.to(`#${item_1}`, {stagger: 1, duration, z: 100, opacity: 0, display: 'none'});

  gsap.to(`#${item_2}`, {stagger: 1, duration, z: 0, opacity: 1, display, delay: duration});

};