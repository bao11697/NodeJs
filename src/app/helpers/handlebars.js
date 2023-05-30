const Handlebars = require('handlebars');
module.exports = {
    sum: (a, b) => a + b,
    checked: (value, curValue) => {
        if (value == undefined) return '';
        return value == curValue ? 'checked' : '';
    },
    sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : 'default';
        const icons = {
            default: 'fa-solid fa-sort fa-sm',
            asc: '<fa-sharp fa-solid fa-sort-up fa-sm',
            desc: 'fa-sharp fa-solid fa-sort-down fa-sm',
        };
        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        };
        const icon = icons[sortType];
        const type = types[sortType];

        const href = Handlebars.escapeExpression(
            `?_sort&column=${field}&type=${type}`,
        );
        const output = ` <a href="${href}"><i class="${icon}"></i></a>`;
        return new Handlebars.SafeString(output);
    },
};
