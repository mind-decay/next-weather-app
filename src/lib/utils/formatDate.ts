const padValue = (value: number) => (value < 10 ? `0${value}` : value.toString());

export const formatDate = (dt: number | Date) => {
  const newDate = new Date(dt);

  const month = padValue(newDate.getMonth() + 1);
  const day = padValue(newDate.getDate());
  const year = newDate.getFullYear();
  let hour = newDate.getHours();
  const minute = padValue(newDate.getMinutes());
  const amPm = hour >= 12 ? 'PM' : 'AM';

  hour = hour % 12 || 12;

  return `${month}/${day}/${year} ${hour}:${minute} ${amPm}`;
};
