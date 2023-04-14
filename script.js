const bg = document.querySelector('#bg');
const td = document.querySelector('#td');
const clb = document.querySelector('#clb');
const ctc = document.querySelector('#ctc');
const sb = document.querySelector("#sb");
const genbtn = document.querySelector('#genbtn');
const usr = document.querySelector('#usr');
const idc = document.querySelector('#id');
const tn = document.querySelector('#tn');

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function generate() {
    background = bg.value;
    textdef = td.value;
    swbtn = sb.value;
    chlsbg = clb.value;
    chlscl = ctc.value;
    user = usr.value;
    idv = idc.value;
    tnv = tn.value;
    jsonData = {
        "name": `${tnv}`,
        "description": "A theme generated with VenettaThemeGen!",
        "authors": [
            {
                "name": `${user}`,
                "id": `${idv}`
            }
        ],
        "semanticColors": {
            "BACKGROUND_PRIMARY": [
                `${background}`
            ],
            "TEXT_NORMAL": [
                `${textdef}`
            ],
            "INTERACTIVE_NORMAL": [
                `${swbtn}`
            ],
            "BACKGROUND_TERTIARY": [
                `${chlsbg}`
            ],
            "CHANNEL_BACKGROUND": [
                `${background}`
            ],
        }
    }
    download(JSON.stringify(jsonData, 0, 4), 'theme.json', 'text/plain');
}

genbtn.addEventListener('click', generate)