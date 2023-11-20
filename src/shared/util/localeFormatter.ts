type Locale = "de-DE";
type Currency = "EUR";

const defaultLocale: Locale = "de-DE";
const defaultCurrency: Currency = "EUR";

export const formatNumberForLocale = (
  value: number | undefined,
  locale = defaultLocale
) => {
  if (value === undefined) {
    return "";
  }

  const formatter = new Intl.NumberFormat(locale);
  return formatter.format(value);
};

export const formatNumberAsCurrencyForLocale = (
  value: number,
  locale = defaultLocale
) => {
  const formatter = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(value);
};

export const formatCurrencyForLocale = (
  value: number,
  locale = defaultLocale,
  currency = defaultCurrency
) => {
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: "currency",
  });

  return formatter.format(value);
};

export const formatDateForLocale = (value: Date, locale = defaultLocale) => {
  const formatter = new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
  });
  return formatter.format(value);
};
