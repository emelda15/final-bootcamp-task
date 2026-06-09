document.addEventListener('DOMContentLoaded', () => {
  const newsletterForm = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('email');
  const signUpCard = document.getElementById('signUpCard');
  const successCard = document.getElementById('successCard');
  const userEmailSpan = document.getElementById('userEmail');
  const dismissBtn = document.getElementById('dismissBtn');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  newsletterForm.addEventListener('submit', (e) => {
  
    e.preventDefault();
    
    const emailValue = emailInput.value.trim();

  
    if (emailRegex.test(emailValue)) {
    
      userEmailSpan.textContent = emailValue;
      
   
      signUpCard.classList.add('hidden');
      successCard.classList.remove('hidden');
      
      
      newsletterForm.classList.remove('invalid-state');
    } else {

      newsletterForm.classList.add('invalid-state');
    }
  });

  
  emailInput.addEventListener('input', () => {
    if (newsletterForm.classList.contains('invalid-state')) {
      newsletterForm.classList.remove('invalid-state');
    }
  });

  
  dismissBtn.addEventListener('click', () => {
    successCard.classList.add('hidden');
    signUpCard.classList.remove('hidden');
    emailInput.value = '';
  });
});