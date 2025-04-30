document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
  
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
  
    if (birthDate > today) {
      document.getElementById('result').innerText = `Invalid birth date.`;
      return;
    }
  
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
  
    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    document.getElementById('result').innerText = 
      `You are ${years} years, ${months} months, and ${days} days old.`;
  });
  