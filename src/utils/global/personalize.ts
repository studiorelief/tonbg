export function initPersonalizeChoice() {
  const persoChoices = document.querySelectorAll<HTMLElement>('.personalize_choice-perso');
  const weaponChoices = document.querySelectorAll<HTMLElement>('.personalize_choice-weapon');

  if (!persoChoices.length && !weaponChoices.length) return;

  persoChoices.forEach((choice) => {
    choice.addEventListener('click', () => {
      // Remove is-active from all perso choices
      persoChoices.forEach((otherChoice) => {
        otherChoice.classList.remove('is-active');
      });

      // Add is-active to clicked perso choice
      choice.classList.add('is-active');

      // Update avatar when choice changes
      updatePersonalizeAvatar();
    });
  });

  weaponChoices.forEach((choice) => {
    choice.addEventListener('click', () => {
      // Remove is-active from all weapon choices
      weaponChoices.forEach((otherChoice) => {
        otherChoice.classList.remove('is-active');
      });

      // Add is-active to clicked weapon choice
      choice.classList.add('is-active');

      // Update avatar when choice changes
      updatePersonalizeAvatar();
    });
  });

  // Initial update
  updatePersonalizeAvatar();
}

export function updatePersonalizeAvatar() {
  // Get all avatar images
  const avatarWrapper = document.querySelector('.personalize_choice-avatar-wrapper');
  const avatarImages = document.querySelectorAll<HTMLElement>('.personalize_choice-avatar');

  if (!avatarWrapper || !avatarImages.length) return;

  // Get active choices
  const activePerso = document.querySelector('.personalize_choice-perso.is-active');
  const activeWeapon = document.querySelector('.personalize_choice-weapon.is-active');

  if (!activePerso || !activeWeapon) return;

  // Get the numbers from the active choices
  const persoNumber = activePerso.classList.contains('is-1')
    ? '1'
    : activePerso.classList.contains('is-2')
      ? '2'
      : activePerso.classList.contains('is-3')
        ? '3'
        : null;

  const weaponNumber = activeWeapon.classList.contains('is-1')
    ? '1'
    : activeWeapon.classList.contains('is-2')
      ? '2'
      : activeWeapon.classList.contains('is-3')
        ? '3'
        : null;

  if (!persoNumber || !weaponNumber) return;

  // Hide all images first
  avatarImages.forEach((img) => {
    img.style.display = 'none';
  });

  // Show the correct image based on combination
  const targetImage = document.querySelector<HTMLElement>(
    `.personalize_choice-avatar.is-${persoNumber}-${weaponNumber}`
  );
  if (targetImage) {
    targetImage.style.display = 'block';
  }
}
