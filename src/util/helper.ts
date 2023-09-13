export const getCookie = (name: 'auth') => {
  const cookieArr = document.cookie.split(';');
  for (let i = 0; i < cookieArr.length; i++) {
    const cookiePair = cookieArr[i].split('=');
    if (name == cookiePair[0].trim()) {
      const cookieValue = JSON.parse(decodeURIComponent(cookiePair[1]));
      return cookieValue?.companyId;
    }
  }
  return null;
};
