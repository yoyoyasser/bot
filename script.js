document.addEventListener('DOMContentLoaded', () => {
  // Animate title
  const title = document.getElementById('title');
  gsap.to(title, {
    backgroundPosition: '100% 50%',
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: 'linear'
  });

  // Animate dots
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    gsap.to(dot, {
      scale: 1.2,
      duration: 1,
      repeat: -1,
      yoyo: true,
      delay: index * 0.2
    });
  });

  // Animate content
  gsap.from('.content > *', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.2
  });

  // Animate social icons
  gsap.from('.social-icons > *', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.1,
    delay: 1
  });

  // Add hover animation to social icons
  const socialIcons = document.querySelectorAll('.social-icon');
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      gsap.to(icon, { scale: 1.2, duration: 0.3 });
    });
    icon.addEventListener('mouseleave', () => {
      gsap.to(icon, { scale: 1, duration: 0.3 });
    });
    icon.addEventListener('mousedown', () => {
      gsap.to(icon, { scale: 0.9, duration: 0.1 });
    });
    icon.addEventListener('mouseup', () => {
      gsap.to(icon, { scale: 1.2, duration: 0.1 });
    });
  });

  // Add floating animation to the entire page
  gsap.to('.container', {
    y: -10,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  });
});