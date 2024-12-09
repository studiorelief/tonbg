// export function hoverComingSoon() {
//   const buttons = document.querySelectorAll('.button');

//   buttons.forEach((button) => {
//     const comingSoon = button.querySelector('.button_coming-soon') as HTMLElement;
//     if (!comingSoon) return;

//     button.addEventListener('mouseenter', () => {
//       comingSoon.style.display = 'flex';
//       // Small delay to ensure display:flex is applied before animation
//       requestAnimationFrame(() => {
//         comingSoon.style.opacity = '1';
//         comingSoon.style.transform = 'translate(0px, 100%)';
//         comingSoon.style.transition = 'all 0.5s ease';
//       });
//     });

//     button.addEventListener('mouseleave', () => {
//       comingSoon.style.opacity = '0';
//       comingSoon.style.transform = 'translate(0px, 0%)';
//       comingSoon.style.transition = 'all 0.5s ease';

//       // Remove display:none after transition completes
//       setTimeout(() => {
//         comingSoon.style.display = 'none';
//       }, 500);
//     });
//   });
// }
