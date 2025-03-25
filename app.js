function toslug(str) {
  str = str.trim();
  str = str.toLowerCase();
  str = str.replace(/[^a-zA-Z0-9 ]/g, "");
  str = str.replace(/\s+/g, "-");

  return str;
}

function tostring(slug, shouldLowerCase) {
  slug = slug.trim();

  slug = slug.replace(/[-]/g, " ");
  slug = slug.replace(/[^a-zA-Z0-9 ]/g, "");

  if (shouldLowerCase) {
    slug = slug.toLowerCase();
  }

  return slug;
}

function swap(to, str, shouldLowerCase) {
  if (!to || str.length <= 1) {
    throw new Error("Error...");
  }

  if (to === "slug") {
    return toslug(str, shouldLowerCase);
  }

  return tostring(str);
}

export default swap;
