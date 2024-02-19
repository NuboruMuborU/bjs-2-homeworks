function Student(name, gender, age, marks) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (!this.marks) return;
	else this.marks.push(...marks);
}

Student.prototype.getAverage = function() {
	if (!this.hasOwnProperty("marks") || this.marks.length < 1) return 0;

	let sum = 0,
		count = 0;
	for (let i of this.marks) {
		sum += i;
		count++;
	}

	return sum / count;
}

Student.prototype.exclude = function(reason) {
	delete this.marks;
	delete this.subject;
	this.excluded = reason;
}