(function () {
    'use strict';

    $(document).foundation();

    $(document).ready(function () {
        // Switch Pages
        switch ($('body').data('page-id')) {
            case 'home':
                break;
            case 'adminCategories':
                eTrade.admin.update();
                eTrade.admin.delete();
                break;
            default:
                // do nothing
        }
    });

})();