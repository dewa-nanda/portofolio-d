/**
 * Get the period of the day based on the given date.
 *
 * Period rules:
 * - Morning   : 05:00 - 11:59
 * - Afternoon : 12:00 - 17:59
 * - Evening   : 18:00 - 04:59
 *
 * @param {Date} [date=new Date()] - The date object to check. Defaults to current time.
 * @returns {"morning" | "afternoon" | "evening"} The period of the day.
 *
 * @example
 * getDayPeriod(); // => "afternoon" (if current time is 15:00)
 *
 * @example
 * getDayPeriod(new Date("2025-09-27T09:00:00")); // => "morning"
 */
export function getDayPeriod(
  date: Date = new Date()
): "morning" | "afternoon" | "evening" {
  const hour = date.getHours();

  if (hour >= 5 && hour < 12) {
    return "morning";
  } else if (hour >= 12 && hour < 18) {
    return "afternoon";
  } else {
    return "evening";
  }
}

/**
 * Capitalize only the first letter of a string.
 *
 * @param {string} str - The input string.
 * @returns {string} String with only the first letter capitalized.
 *
 * @example
 * capitalizeFirst("morning"); // "Morning"
 */
export function capitalizeFirst(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
