import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function animGrid() {
  const gridSection = document.querySelector('.section_gsap-grid');
  const gridMain = document.querySelector('.gsap-grid_image.is-main');
  const gridLogo = document.querySelector('.gsap-grid_baseline');
  const gridLayer = document.querySelector('.gsap-grid_main-image-layer');

  if (!gridSection || !gridMain || !gridLogo) return;

  gsap.to(gridMain, {
    position: 'absolute',
    overflow: 'visible',
    zIndex: 1,
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    ease: 'none',
    scrollTrigger: {
      markers: false,
      trigger: gridSection,
      start: '50% 100%',
      end: '50% 25%',
      scrub: true,
    },
  });

  //   gsap.to(gridSection, {
  //     scale: 2.5,
  //     ease: 'none',
  //     scrollTrigger: {
  //       markers: false,
  //       trigger: gridSection,
  //       start: '50% 100%',
  //       end: '50% 25%',
  //       scrub: true,
  //     },
  //   });
  gsap.set(gridLogo, {
    y: '-5rem',
  });
  gsap.to(gridLogo, {
    opacity: 1,
    y: '0rem',
    ease: 'none',
    scrollTrigger: {
      markers: false,
      trigger: gridSection,
      start: '50% 45%',
      end: '50% 100%',
      scrub: true,
    },
  });

  gsap.to(gridLayer, {
    opacity: 0.35,
    ease: 'none',
    scrollTrigger: {
      markers: false,
      trigger: gridSection,
      start: '50% 100%',
      end: '50% 25%',
      scrub: true,
    },
  });
}

export function animCommunity() {
  const communitySection = document.querySelector('.section_community');
  const communityBg = document.querySelector('.community_background-image');

  if (!communitySection || !communityBg) return;

  gsap.to(communityBg, {
    scale: 1.2,
    ease: 'none',
    scrollTrigger: {
      markers: false,
      trigger: communitySection,
      start: '0% 100%',
      end: '50% 50%',
      scrub: true,
      onLeave: () => {
        gsap.to(communityBg, {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            markers: false,
            trigger: communitySection,
            start: '50% 50%',
            end: '100% 0%',
            scrub: true,
          },
        });
      },
    },
  });
}

export function animClaim() {
  const claimSection = document.querySelector('.section_claim');
  const claimLoader = document.querySelector('.claim_content');

  if (!claimSection || !claimLoader) return;

  gsap.set(claimLoader, {
    opacity: 0,
    y: '5rem',
  });
  gsap.to(claimLoader, {
    y: '0',
    opacity: 1,
    scrollTrigger: {
      markers: false,
      trigger: claimSection,
      start: '50% 100%',
      end: '50% 50%',
      scrub: 2,
    },
  });
}

function cryptingHeading(targetElement: HTMLElement) {
  const arr1: string[] = targetElement.innerHTML.split('');
  const arr2: string[] = [];

  const tl = gsap.timeline();
  let step = 0;
  tl.fromTo(
    targetElement,
    {
      innerHTML: arr2.join(''),
      color: 'var(--base-color-brand--yellow)',
      background: 'transparent',
    },
    {
      duration: arr1.length / 12.5,
      ease: 'power4.in',
      delay: 0.1,
      color: 'var(--base-color-brand--yellow)',
      background: 'transparent',
      onUpdate: () => {
        const p = Math.floor(tl.progress() * arr1.length);
        if (step !== p) {
          step = p;
          arr1.forEach((_, i) => {
            arr2[i] = randChar();
          });
          let pt1 = arr1.join('').substring(p, 0),
            pt2 = arr2.join('').substring(arr2.length - p, 0);
          if (targetElement.classList.contains('fromRight')) {
            pt1 = arr2.join('').substring(arr2.length - p, 0);
            pt2 = arr1.join('').substring(arr1.length - p);
          }
          targetElement.innerHTML = pt1 + pt2;
        }
      },
    }
  );

  //   const chars = '0!#$^&*()…æ_+-;[~`';
  function randChar(): string {
    const chars = '0!#$`';
    const c = chars[Math.floor(Math.random() * chars.length)];
    return Math.random() > 0.5 ? c : c.toUpperCase();
  }
}

export function animHeading() {
  const headerTexts = document.querySelectorAll<HTMLElement>('[gsap="text-animated"]');

  if (!headerTexts.length) return;

  headerTexts.forEach((text) => {
    gsap.to(text, {
      scrollTrigger: {
        markers: false,
        trigger: text,
        start: 'top 80%',
        onEnter: () => {
          cryptingHeading(text);
        },
      },
    });
  });
}
