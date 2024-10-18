module.exports.homelist = function (req, res) {
    res.render('locations-list', {
        title: 'O u t f i t - O r b i t -Your fashion is our passion.',
        pageHeader: {
            title: 'OUTFIT-ORBIT ',
            strapline: 'Your fashion is our passion.'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about.Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: [{
            name: 'zara',
            address: '110 High Street,4th floor',
            rating: 4,
            famousfor:'high quality clothes',
            distance: '100m'
        }, {
            name: 'H&M',
            address: '110 High Street, RG6 4PS',
            rating: 3,
            famousfor:'fashionable and affordable',
            distance: '200m'
        }, {
            name: 'westside',
            address: '100 High Street, Reading, RG 7PS',
            rating: 5,
           famousfor:'western wear',
            distance: '250m'
        },]
    });

};
module.exports.locationInfo = function (req, res) {
    res.render('locations-info', { title: 'LocationInfo' });
};
module.exports.locationInfo1 = function (req, res) {
    res.render('locations-info1', { title: 'LocationInfo1' });
};
module.exports.locationInfo2 = function (req, res) {
    res.render('locations-info2', { title: 'LocationInfo2' });
};
module.exports.addReview = function (req, res) {
    res.render('locations-review-form', { title: 'ADD REVIEW' });
};