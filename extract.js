(function() {
    window.names = [];
    var i;
    var selector;
    var elementText;

    // start routine
    HandlePage(1);

    function HandlePage(pageNumber) {
        var nextPageNumber;
        var $element;

        if (pageNumber < 11) {
            ExtractNames(pageNumber);
        }

        nextPageNumber = pageNumber + 1;
        selector = '#ctl08_ctl07_ctl00_Listnam > tbody > tr:nth-child(14) > td > table > tbody > tr > td:nth-child(' + nextPageNumber + ') > a';
        $element = $(selector);
        elementText = $element.text();
        // if (elementText === '...') {
        //     nextPageNumber = nextPageNumber + 1
        //     selector = '#ctl08_ctl07_ctl00_Listnam > tbody > tr:nth-child(14) > td > table > tbody > tr > td:nth-child(' + nextPageNumber + ') > a';
        //     $element = $(selector);
        //     elementText = $element.text();
        // }

        if ($element.length) {
            $element[0].click();
            setTimeout(function () {
                // check if next page is ...
                if (elementText === '...') {
                    HandlePage(2); // first is ...
                } else {
                    HandlePage(nextPageNumber);
                }
            }, 4000);
        }
    }

    function ExtractNames(pageNumber) {
        // extract names from current page
        for (i = 2; i <= 13; i++) {
            if (i < 10) {
                selector = '#ctl08_ctl07_ctl00_Listnam_ctl0' + i + '_LinkButton1';
            } else {
                selector = '#ctl08_ctl07_ctl00_Listnam_ctl' + i + '_LinkButton1';
            }

            var newName = $(selector).text();
            names.push(newName);
            //console.log("names", pageNumber, newName);
        }
        
        console.log("names:", names.length);
    }
})();
