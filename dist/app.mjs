function toslug(str) {
  str = str.trim();
  str = str.toLowerCase();
  str = str.replace(/[^a-zA-Z0-9 ]/g, "");
  str = str.replace(/\s+/g, "-");

  return str;
}

export default toslug;
