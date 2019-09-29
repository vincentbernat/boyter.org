$(document).ready( function () {
    $(".table-1").next().DataTable({
        "paging": true,
        "order": [[ 1, "desc" ]],
        "lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ]
    });

    $(".table-2").next().DataTable({
        "paging": true,
        "order": [[ 0, "asc" ]],
        "lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ]
    });

    $(".table-3").next().DataTable({
        "paging": true,
        "order": [[ 0, "asc" ]],
        "pageLength": 50,
        "lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ]
    });

    $(".table-4").next().DataTable({
        "paging": true,
        "order": [[ 2, "desc" ]],
        "pageLength": 50,
        "lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ]
    });

    $(".table-5").next().DataTable({
        "paging": true,
        "order": [[ 2, "desc" ]],
        "pageLength": 50,
        "lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ]
    });

    $(".table-6").next().DataTable({
        "paging": true,
        "order": [[ 2, "desc" ]],
        "pageLength": 50,
        "lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ]
    });

    $(".table-7").next().DataTable({
        "paging": true,
        "order": [[ 0, "asc" ]],
        "pageLength": 50,
        "lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ]
    });

    $(".table-8").next().DataTable({
        "paging": true,
        "order": [[ 0, "asc" ]],
        "pageLength": 50,
        "lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ]
    });
});
