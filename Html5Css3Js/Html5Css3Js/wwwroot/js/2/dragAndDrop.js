var $draggedItem;

$(document).ready(function () {
    $('.item').on('dragstart', dragging);
    $('.item').on('dragend', draggingEnded);
    $('.hole').on('dragenter', preventDefault);
    $('.hole').on('dragover', preventDefault);
    $('.hole').on('drop', dropItem);

    jQuery.event.props.push('dataTransfer');
    $('#carList').on('dragstart', draggingCar);
    $('#favoriteCars').on('dragenter', preventDefault);
    $('#favoriteCars').on('dragover', preventDefault);
    $('#favoriteCars').on('drop', dropCarItem);
});

function dragging(e) {
    $(e.target).addClass('dragging');
    $draggedItem = $(e.target);
}

function draggingEnded(e) {
    $(e.target).removeClass('dragging');
}

function preventDefault(e) {
    e.preventDefault();
}

function dropItem(e) {
    var hole = $(e.target);
    if (hole.hasClass('hole') && hole.children().length == 0) {
        $draggedItem.detach();
        $draggedItem.appendTo($(e.target));
    }
}

function draggingCar(e) {
    var val = e.target.getAttribute('data-value');
    e.dataTransfer.setData('text', val);
    e.dataTransfer.effectAllowed = 'copy';
}
function dropCarItem(e) {
    var data = e.dataTransfer.getData('text').split(',');
    if (data[0] == 'car') {
        var li = document.createElement('li');
        li.textContent = data[1];
        e.target.appendChild(li);
    }
}