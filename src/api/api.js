export const fetchRequest = async (link) => {
  const res = await fetch(link);
  return await res.json();
};
