import moment from "moment";

export const isSupportedLanguage = (lang: string) => {
  for (var i in LANG_SUPPORT) {
    if (LANG_SUPPORT[i].label.toLowerCase() === lang.toLowerCase()) {
      return true;
    }
  }
  return false;
};

export const LOCALE_SUPPORT: any[] = [
  { key:0, text: "IT", value: "it_IT" },
  { key:1, text: "EN", value: "en_EN" },
  { key:2, text: "ES", value: "es_ES" },
];

export const LANG_SUPPORT: any[] = [
  { label: "IT", value: "it" },
  { label: "EN", value: "en" },
  { label: "ES", value: "es" },
];

export const LANG = {
  IT: "it",
  EN: "en",
  ES: "es",
};

export const SET_CALENDAR_LOCALE = (locale: string) => {
  switch (locale) {
    case LANG.IT:
      return CALENDAR_IT;
    case LANG.ES:
      return CALENDAR_ES;
    default:
      return CALENDAR_EN;
  }
};

export const CALENDAR_IT = {
  firstDayOfWeek: 1,
  dayNames: [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Savato",
  ],
  dayNamesShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
  dayNamesMin: ["D", "L", "Ma", "Me", "G", "V", "S"],
  monthNames: [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
  ],
  monthNamesShort: [
    "Gen",
    "Feb",
    "Mar",
    "Apr",
    "Mag",
    "Giu",
    "Lug",
    "Ago",
    "Set",
    "Ott",
    "Nov",
    "Dic",
  ],
  today: "Oggi",
  clear: "Cancella",
  dateFormat: "dd/mm/yy",
  weekHeader: "Set",
};

export const CALENDAR_ES = {
  firstDayOfWeek: 1,
  dayNames: [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ],
  dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
  dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
  monthNames: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  monthNamesShort: [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ],
  today: "Hoy",
  clear: "Limpiar",
  dateFormat: "dd/mm/yy",
  weekHeader: "Sm",
};

export const CALENDAR_EN = {
  firstDayOfWeek: 1,
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  dayNamesMin: ["Su", "M", "Tu", "W", "Th", "F", "Sa"],
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthNamesShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  today: "Today",
  clear: "Clear",
  dateFormat: "yyyy-mm-dd",
  weekHeader: "Wee",
};

export const GetDateAndTimeByLocale = (locale: string, date: string) => {
  switch (locale) {
    case LANG.IT:
    case LANG.ES:
      return moment(date).format("DD-MM-YYYY HH:mm");
      return;
    default:
      return moment(date).format("YYYY-MM-DD HH:mm");
  }
};

export const GetDateFormatByLocale = (locale: string) => {
  switch (locale) {
    case LANG.IT:
    case LANG.ES:
      return "DD-MM-YYYY HH:mm"
    default:
      return "YYYY-MM-DD HH:mm"
  }
};

export const GetCalendarDateFormatByLocale = (locale: string) => {
  switch (locale) {
    case LANG.IT:
    case LANG.ES:
      return "dd/mm/yy"
    default:
      return "yy-mm-dd"
  }
};
