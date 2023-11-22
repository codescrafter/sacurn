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

export const getDaysOldDate = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};

export const convertDateToFormat = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};

export const convertFormatToDate = (date: string) => {
  const [year, month, day] = date.split('-');
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
};

export const formatDate = (date: string) => {
  return new Date(date || '').toLocaleDateString().split('/').reverse().join('/');
};

export const formatNumberByComma = (value: string | number) => {
  const updatedValue = value?.toString();
  const sanitizedValue = updatedValue.replace(/,/g, '');
  return Number(sanitizedValue).toLocaleString();
};
