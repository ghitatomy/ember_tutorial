import { helper } from '@ember/component/helper';

export function formatDate(params) {
  /* globals moment */ return moment(params[0]).format('YYYY-MM-DD');
}

export default helper(formatDate);
