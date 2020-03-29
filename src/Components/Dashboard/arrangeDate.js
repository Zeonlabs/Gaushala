import _ from 'lodash'

export const arrangeDate = (data) => {

    const monthArray = [null, "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

    // const sortedData = _.orderBy(data, [(datas) => datas.year, (data) => (monthArray.indexOf(data.month))], ["asc", "asc"]);
    // const sortedData = _.orderBy(data, [datas => datas.year], ["asc"]);

    const sortedData = _.orderBy(data, [datas => datas.year, data => data.month], ["asc", "asc"]);

    console.log( 'sorted data', sortedData)
    
    return sortedData
}