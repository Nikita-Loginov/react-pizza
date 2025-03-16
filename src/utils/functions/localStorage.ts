export function actionsLS(
  name: string,
  defaultValue: unknown[] | Record<string, unknown>,
  currentValue: unknown[] | Record<string, unknown>
) {
  if (localStorage.getItem(name)) {
    localStorage.setItem(name, JSON.stringify(currentValue));
  } else {
    localStorage.setItem(name, JSON.stringify(defaultValue));
  }
}
