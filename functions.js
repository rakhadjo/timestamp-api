exports.is_utc = (date_inp) => {
  let utc_regex = /\d{4}-\d{2}-\d{2}/;
  return utc_regex.test(date_inp);
};

exports.is_unix = (unix_inp) => {
  let unix_regx = /^\d{5,}$/;
  return unix_regx.test(unix_inp);
};
