import './index.css';

import { greetUser } from '$utils/global/greet';
import { animClaim, animCommunity, animGrid, animHeading } from '$utils/global/gsap';
import { initPersonalizeChoice, updatePersonalizeAvatar } from '$utils/global/personalize';
import { loadModelViewerScript, resetGlbPosition } from '$utils/script/modalviewer';

window.Webflow ||= [];
window.Webflow.push(() => {
  // Project
  greetUser();

  // 3D
  loadModelViewerScript();
  resetGlbPosition();

  // Animations
  animGrid();
  animCommunity();
  animClaim();
  animHeading();

  // Personalize
  initPersonalizeChoice();
  updatePersonalizeAvatar();
});
