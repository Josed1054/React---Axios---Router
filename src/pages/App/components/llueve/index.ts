export function llueve(precip: number, humidity: number) {
  if (precip > 60 || humidity > 50) {
    return "Si";
  }
  return "No";
}
