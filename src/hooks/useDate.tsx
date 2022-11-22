export function useDate(source: Date, delimiter = "-") {
  const leftPad = (value: number) => {
    if (value >= 10) {
      return value;
    }

    return `0${value}`;
  };
  const year = source.getFullYear();
  const month = leftPad(source.getMonth() + 1);
  const day = leftPad(source.getDate());

  return [year, month, day].join(delimiter);
}
