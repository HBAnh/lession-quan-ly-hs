const validate = (values) => {
    const errors = {};
    const { hoten } = values;
    if (!hoten) {
      errors.hoten = "vui long nhap tieu de";
    } else if (hoten.trim() && hoten.length < 5) {
      errors.hoten = "tieu de phai co tu 5 ky tu";
    }
    return errors;
  };
  
  export default validate;
  