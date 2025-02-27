export const isInputFilled = (user) => {
  return Object.values(user).every((value) => {
    if (typeof value === "string") {
      return value.trim() !== "";
    }
    if (typeof value === "number") {
      return value !== 0;
    }
    return false;
  });
};
