// reset the fields and checkboxes when this js reloads
document.querySelector('input.searchInput').value = '';
document.querySelectorAll('section input[type="checkbox"]').forEach(checkbox => {checkbox.checked = false});

function toggle() {
    var button = document.querySelector('button.toggle');
    // if the button is labeled reveal all
    if (button.innerText == "Reveal All") {
        // reaveal all boxes and rename the button
        document.querySelectorAll('section input[type="checkbox"]').forEach(checkbox => {checkbox.checked = true});
        button.innerText = "Collapse All";
    } else {
        // collapse all boxes and rename the button
        document.querySelectorAll('section input[type="checkbox"]').forEach(checkbox => {checkbox.checked = false});
        button.innerText = "Reveal All";
    }
}

function next() {
    // First check if search input has modified the button
    var button = document.querySelector('button.next');
    if (button.innerText == "View Folders") {
        // if so reset it to its original name
        button.innerText = "Switch Folder";
        // and reset the input field
        document.querySelector('input.searchInput').value = '';
        // and reset the folder view
        document.querySelectorAll('section').forEach(box => box.classList.remove('searching'));
    }

    // now find the next folder and swith to it
    var shownFolder = document.querySelector('.accordian section.shown');
    var nextFolder = shownFolder.nextElementSibling;
    shownFolder.classList.remove('shown');
    // if the folder is the last one show the first one
    if (nextFolder == null)
        document.querySelector('.accordian section#endowment').classList.add('shown');
    else
        shownFolder.nextElementSibling.classList.add('shown');
}

function findInPage(input){
    // show all the scholarships but not the headers
    document.querySelectorAll('section').forEach(box => box.classList.add('searching'));
    // show the search header
    document.querySelector('section#search h2').style.display = 'block';
    // rename the switch folder button
    document.querySelector('button.next').innerText = "View Folders";

    var input = input.toLowerCase();
    document.querySelectorAll('section div').forEach(
        box => {
            var text = box.innerText.toLowerCase();
            // if the text matches with any of the boxes show it
            // otherwise hide it
            if(text.includes(input))
                box.classList.add('shown');
            else
                box.classList.remove('shown');
        }
    );
}
