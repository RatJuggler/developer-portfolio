$('#skillsTable').on('post-footer.bs.table', function () {
    $('#skillsCard').fadeIn(500);
})

function buttons () {
    return {
        clearFilters: {
            text: 'Clear filters',
            icon: 'fa-eraser',
            event: function () {
                $('#skillsTable').bootstrapTable('clearFilterControl');
            },
            attributes: {
                title: 'Clear all column filters'
            }
        },
        addSkill: {
            text: 'Add a new skill',
            icon: 'fa-plus',
            event: function () {
                alert('TODO: Add a new skill row!')
            },
            attributes: {
                title: 'Add a new row to the table'
            }
        }
    }
}
