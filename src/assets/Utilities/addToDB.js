// Get array of IDs from localStorage
export const getIds = () => {
  const stored = localStorage.getItem("id");
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch (error) {
    alert("Failed to parse localStorage data:", error);
    return [];
  }
};

// Add an ID to localStorage array
export const addId = (id) => {
  const currentIds = getIds();

  if (currentIds.includes(id)) {
    return "ID_EXISTS";
  }

  const updatedIds = [...currentIds, id];
  localStorage.setItem("id", JSON.stringify(updatedIds));
  return "ID_ADDED";
};
