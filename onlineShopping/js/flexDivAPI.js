$(document).ready(() => {

    var that = this;
    that.onLoad = true;
    if( that.onLoad ){
        getStudentsByUsingAjax();
    }

    function getRow(student) {
        if (typeof student != 'object' || Array.isArray(student)) {
            return;
        }
        var columns = `
        <div>${student.id}</div>
        <div>${student.name}</div>
        <div>${student.class}</div>
        <div>${student.age}</div>
        `;
        return row = `<div class='row'>${columns}</div>`;
    }
    // create rows of students
    function getRows(students) {
        if (students) {
            var rowOfStudents = '';
            students.forEach((student, index) => {
                rowOfStudents = rowOfStudents + getRow(student);
            })
            return rows = `${rowOfStudents}
        `;
        }
    }
    /*function fetchStudents(url){
        var url = 'http://localhost:3000/students';
        var p = fetch(url);
        p.then( (response) => {
                return response.json();
        }).then( (data) => {
            var rows = getRows(data);
            document.querySelector('.rowContainer').innerHTML = rows;
        })
    }*/
    function getStudentsByUsingAjax() {
        var url = 'http://localhost:3000/students';
        $.ajax({
            url: url,
            method: 'GET'
        }).then((response) => {
            var rows = getRows(response);
            document.querySelector('.rowContainer').innerHTML = rows;
        })
    }

    function getStudentsByLKG() {
        var input = $('#serchByClass').val();
        var url = 'http://localhost:3000/students?q='+input;
        $.ajax({
            url: url,
            method: 'GET'
        }).then((response) => {
            var rows = getRows(response);
            $('.rowContainer').html('');
            $('.rowContainer').html(rows);
        })
    }

    $('#serchButton').on('click',function() {
        that.onLoad = false;
        getStudentsByLKG();
    });
})