const validate = (values) => {
  const errors = {};
  const { hoten,  } = values;
  if (!hoten) {
    errors.hoten = "vui long nhap ho ten hoc sinh";
  } else if (hoten.trim() && hoten.length < 5) {
    errors.hoten = "ho ten hoc sinh phai co tu 5 ky tu tro len";
  }
  return errors;
};

export default validate;
