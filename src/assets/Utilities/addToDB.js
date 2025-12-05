// localStorageIds.js

export const getIds = () => {
  const stored = localStorage.getItem("id");
  if (!stored) return [];
};

export const addId = (id) => {
  if (!id) return "ID_REQUIRED";

  const currentIds = getIds();

  if (currentIds.includes(id)) {
    return "ID_EXISTS";
  }

  const updatedIds = [...currentIds, id];
  localStorage.setItem("id", JSON.stringify(updatedIds));
  return "ID_ADDED";
};

// export const removeId = (id) => {
//   const currentIds = getIds();
//   const updatedIds = currentIds.filter((i) => i !== id);
//   localStorage.setItem("id", JSON.stringify(updatedIds));
//   return "ID_REMOVED";
// };
