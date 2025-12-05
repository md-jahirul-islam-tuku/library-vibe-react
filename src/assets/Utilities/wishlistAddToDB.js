// Get array of IDs from localStorage
export const wishGetIds = () => {
  const stored = localStorage.getItem("item");
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch (error) {
    alert("Failed to parse localStorage data:", error);
    return [];
  }
};

// Add an ID to localStorage array
export const wishAddId = (id) => {
  const currentIds = wishGetIds();

  if (currentIds.includes(id)) {
    return "ID_EXISTS";
  }

  const updatedIds = [...currentIds, id];
  localStorage.setItem("item", JSON.stringify(updatedIds));
  return "ID_ADDED";
};
