export function normalizeRoomName(name: string | undefined): string {
  if (!name) return "";

  // 1. Remove common prefixes and normalize spacing around dashes
  const cleanName = name
    .replace(/^(Phòng|P\.|P\s|P)(?:\s|\.)*/i, "")
    .replace(/\s*-\s*/g, "-") // Normalize " - " to "-"
    .replace(/\s+/g, " ") // Collapse multiple spaces
    .trim();

  // 2. Return consistent "Phòng " prefix
  return `Phòng ${cleanName}`;
}
