import './index.css';

// import { hoverComingSoon } from '$utils/global/coming-soon';
import { greetUser } from '$utils/global/greet';
import {
  animClaim,
  animCommunity,
  animGrid,
  animHeading,
  animHeadingParallax,
  animHeroParallax,
} from '$utils/global/gsap';
import { initPersonalizeChoice, updatePersonalizeAvatar } from '$utils/global/personalize';
import {
  blockGlbPosition,
  loadModelViewerScript,
  resetGlbPosition,
} from '$utils/script/modalviewer';
window.Webflow ||= [];
window.Webflow.push(() => {
  // Project
  greetUser();

  // 3D
  loadModelViewerScript();
  resetGlbPosition();
  blockGlbPosition();

  // Animations
  if (window.innerWidth > 479) {
    animGrid();
  }
  animCommunity();
  animClaim();
  animHeading();

  // Personalize
  initPersonalizeChoice();
  updatePersonalizeAvatar();

  // Parallax
  animHeroParallax();
  if (window.innerWidth > 479) {
    animHeadingParallax();
  }

  // Coming soon
  // hoverComingSoon();
});
