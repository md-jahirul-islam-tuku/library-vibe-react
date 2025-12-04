// localStorageIds.js

const STORAGE_KEY = "id";

// Get array of IDs from localStorage
export const getIds = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
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
  if (!id) {
    alert("ID is required");
    return;
  }

  const currentIds = getIds();

  if (currentIds.includes(id)) {
    alert("ID already exists");
    return;
  }

  const updatedIds = [...currentIds, id];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedIds));
};

// Optional: remove an ID
export const removeId = (id) => {
  const currentIds = getIds();
  const updatedIds = currentIds.filter((i) => i !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedIds));
};
