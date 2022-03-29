class StudentModel {
  constructor(data) {
    if (!data) {
      data = {};
    }
    this.id = data.id || 0;
    this.name = data.name || "";
    this.gender = data !== undefined ? data.gender : true;
    this.birthday = data.birthday || "";
    this.homeTown = data.homeTown || "";
  }
}
export default StudentModel;
