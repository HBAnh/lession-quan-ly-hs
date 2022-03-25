class schoolYearModel {
  constructor(data) {
    if (!data) {
      data = {};
    }
    this.id = data.id || 0;
    this.name = data.name || "";
  }
}

export default schoolYearModel;
