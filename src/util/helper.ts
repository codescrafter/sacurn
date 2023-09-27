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

export const fileSizeLimit = (files: File[]) => {
  const totalSize = files?.reduce((acc: number, file: File) => {
    if (file?.size) {
      return acc + file.size;
    }
    return acc;
  }, 0);
  if (totalSize > 2097152) return '文件大小超过 2MB';
  return null;
};
